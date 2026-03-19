import fs from 'fs';
import path from 'path';

function checkIntegrity() {
  console.log('🔍 Checking Data Integrity (Regex Mode)...');
  let errors = 0;

  const dataDir = path.join(process.cwd(), 'src/data');
  
  const readFile = (filename: string) => fs.readFileSync(path.join(dataDir, filename), 'utf-8');

  // Extract IDs using regex
  const extractIds = (content: string) => {
    const ids: string[] = [];
    const matches = content.matchAll(/id:\s*["']([^"']+)["']/g);
    for (const match of matches) {
      ids.push(match[1]);
    }
    return ids;
  };

  const projectIds = extractIds(readFile('projects.ts'));
  const thoughtIds = extractIds(readFile('thoughts.ts'));
  const tasteIds = extractIds(readFile('tastes.ts'));
  
  const allNodeIds = new Set([...projectIds, ...thoughtIds, ...tasteIds]);

  // Extract Taste Names
  const tasteNames: string[] = [];
  // Match name: "..." or name: '...'
  const nameMatches = readFile('tastes.ts').matchAll(/name:\s*(["'])(.*?)\1/g);
  for (const match of nameMatches) {
    tasteNames.push(match[2]);
  }
  const allTasteNames = new Set(tasteNames);

  // 1. Uniqueness
  const checkUniqueness = (ids: string[], label: string) => {
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.error(`❌ Duplicate IDs found in ${label}`);
      errors++;
    }
  };

  checkUniqueness(projectIds, 'projects');
  checkUniqueness(thoughtIds, 'thoughts');
  checkUniqueness(tasteIds, 'tastes');

  // 2. Links validation
  const linksContent = readFile('links.ts');
  const linkMatches = linksContent.matchAll(/from:\s*(["'])(.*?)\1,\s*to:\s*(["'])(.*?)\3/g);
  for (const match of linkMatches) {
    const from = match[2];
    const to = match[4];
    if (!allNodeIds.has(from)) {
      console.error(`❌ Invalid link "from": ${from}`);
      errors++;
    }
    if (!allNodeIds.has(to)) {
      console.error(`❌ Invalid link "to": ${to}`);
      errors++;
    }
  }

  // 3. Taste Connections validation
  const tastesContent = readFile('tastes.ts');
  // Improved taste block matching that correctly handles quotes inside strings
  const tasteBlockRegex = /{[^{]*?name:\s*(["'])(.*?)\1[^}]*?connections:\s*\[([\s\S]*?)\]/g;
  const tasteBlockMatches = tastesContent.matchAll(tasteBlockRegex);
  
  for (const match of tasteBlockMatches) {
    const tasteName = match[2];
    const connectionsStr = match[3];
    
    // Parse connection array like ["A", "B's C"]
    const connections: string[] = [];
    const connMatches = connectionsStr.matchAll(/(["'])(.*?)\1/g);
    for (const cm of connMatches) {
      connections.push(cm[2]);
    }
    
    connections.forEach(connName => {
      if (!allTasteNames.has(connName)) {
        console.error(`❌ Invalid taste connection "${connName}" in "${tasteName}"`);
        errors++;
      }
    });
  }

  if (errors === 0) {
    console.log('✅ Data integrity check passed!');
    process.exit(0);
  } else {
    console.log(`\nFound ${errors} data errors.`);
    process.exit(1);
  }
}

checkIntegrity();
