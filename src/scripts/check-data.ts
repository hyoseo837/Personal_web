import fs from 'fs';
import path from 'path';

function checkIntegrity() {
  console.log('🔍 Checking Data Integrity (Regex Mode)...');
  let errors = 0;

  const dataDir = path.join(process.cwd(), 'src/data');

  const readFile = (filename: string) => fs.readFileSync(path.join(dataDir, filename), 'utf-8');

  const extractIds = (content: string) => {
    const ids: string[] = [];
    const matches = content.matchAll(/id:\s*["']([^"']+)["']/g);
    for (const match of matches) {
      ids.push(match[1]);
    }
    return ids;
  };

  const checkUniqueness = (ids: string[], label: string) => {
    const uniqueIds = new Set(ids);
    if (uniqueIds.size !== ids.length) {
      console.error(`❌ Duplicate IDs found in ${label}`);
      errors++;
    }
  };

  checkUniqueness(extractIds(readFile('projects.ts')), 'projects');
  checkUniqueness(extractIds(readFile('thoughts.ts')), 'thoughts');
  checkUniqueness(extractIds(readFile('tastes.ts')), 'tastes');

  if (errors === 0) {
    console.log('✅ Data integrity check passed!');
    process.exit(0);
  } else {
    console.log(`\nFound ${errors} data errors.`);
    process.exit(1);
  }
}

checkIntegrity();
