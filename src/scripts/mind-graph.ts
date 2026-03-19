declare const ForceGraph: any;
declare const d3: any;

(() => {
  interface GraphNode {
    id: string;
    name: string;
    type: 'thought' | 'project' | 'taste';
    desc: string;
    sub: string;
    meta?: string;
    pid?: number;
    x?: number;
    y?: number;
    vx?: number;
    vy?: number;
  }

  interface GraphLink {
    source: string | GraphNode;
    target: string | GraphNode;
    reason: string;
  }

  interface GraphData {
    nodes: GraphNode[];
    links: GraphLink[];
  }

  const container = document.getElementById('graph');
  const panel = document.getElementById('detail-panel');
  const pType = document.getElementById('panel-type');
  const pTitle = document.getElementById('panel-title');
  const pSub = document.getElementById('panel-sub');
  const pDesc = document.getElementById('panel-desc');
  const pMeta = document.getElementById('panel-meta');
  const pkmnContainer = document.getElementById('pokemon-container');
  const pkmnImg = document.getElementById('pokemon-img') as HTMLImageElement;
  const pkmnBg = document.getElementById('pokemon-bg');

  if (container && panel && pType && pTitle && pSub && pDesc && pMeta && pkmnContainer && pkmnImg && pkmnBg) {
    const dataStr = container.getAttribute('data-graph');
    if (!dataStr) throw new Error('No graph data found');
    
    const data: GraphData = JSON.parse(dataStr);
    
    let selectedNode: GraphNode | null = null;
    const highlightNodes = new Set<GraphNode>();
    const highlightLinks = new Set<GraphLink>();

    const colors = {
      thought: '#ea580c',
      project: '#1c1917',
      taste: '#fed7aa',
    };

    const updatePanel = (node: GraphNode) => {
      const color = colors[node.type];
      pType.textContent = node.type;
      pType.style.color = color === '#1c1917' ? '#78716c' : color;
      pTitle.textContent = node.name;
      pSub.textContent = node.sub;
      pDesc.textContent = `"${node.desc}"`;
      pMeta.textContent = node.meta || '';

      if (node.sub === 'pokemon' && node.pid) {
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${node.pid}.png`;
        pkmnImg.src = spriteUrl;
        pkmnImg.alt = node.name;
        pkmnContainer.style.display = 'flex';
        pkmnBg.innerHTML = `<img src="${spriteUrl}" class="w-48 h-48 pixelated" />`;
      } else {
        pkmnContainer.style.display = 'none';
        pkmnBg.innerHTML = '';
      }

      document.body.style.backgroundColor = `${color}15`;
      panel.classList.remove('translate-x-12', 'opacity-0');
      panel.classList.add('translate-x-0', 'opacity-100');
    };

    const hidePanel = () => {
      if (selectedNode) return;
      document.body.style.backgroundColor = '';
      panel.classList.add('translate-x-12', 'opacity-0');
      panel.classList.remove('translate-x-0', 'opacity-100');
    };

    const updateHighlights = (node: GraphNode | null) => {
      highlightNodes.clear();
      highlightLinks.clear();
      if (node) {
        highlightNodes.add(node);
        data.links.forEach(link => {
          const source = typeof link.source === 'string' ? link.source : link.source.id;
          const target = typeof link.target === 'string' ? link.target : link.target.id;
          
          if (source === node.id || target === node.id) {
            highlightLinks.add(link);
            highlightNodes.add(typeof link.source === 'string' ? data.nodes.find(n => n.id === link.source)! : (link.source as GraphNode));
            highlightNodes.add(typeof link.target === 'string' ? data.nodes.find(n => n.id === link.target)! : (link.target as GraphNode));
          }
        });
      }
      Graph.nodeColor(Graph.nodeColor())
           .linkWidth(Graph.linkWidth())
           .linkDirectionalParticles(Graph.linkDirectionalParticles());
    };

    const Graph = ForceGraph()(container)
      .graphData(data)
      .nodeId('id')
      .nodeLabel(() => '') 
      .nodeColor((node: GraphNode) => {
        if (highlightNodes.size > 0 && !highlightNodes.has(node)) {
          return 'rgba(28, 25, 23, 0.1)'; 
        }
        return colors[node.type];
      })
      .nodeRelSize(12)
      .linkWidth((link: GraphLink) => highlightLinks.has(link) ? 3 : 1.5)
      .linkColor((link: GraphLink) => highlightLinks.has(link) ? '#ea580c' : 'rgba(124, 45, 18, 0.1)')
      .linkDirectionalParticles((link: GraphLink) => highlightLinks.has(link) ? 4 : 2)
      .linkDirectionalParticleSpeed(0.005)
      .linkDirectionalParticleWidth((link: GraphLink) => highlightLinks.has(link) ? 4 : 2)
      .linkDirectionalParticleColor(() => '#ea580c')
      .onNodeClick((node: GraphNode) => {
        if (selectedNode === node) {
          selectedNode = null;
          hidePanel();
        } else {
          selectedNode = node;
          updatePanel(node);
          updateHighlights(node);
        }
      })
      .onBackgroundClick(() => {
        selectedNode = null;
        hidePanel();
        updateHighlights(null);
      })
      .onNodeHover((node: GraphNode | null) => {
        if (selectedNode) {
          container.style.cursor = node ? 'pointer' : 'grab';
          return;
        }
        
        if (node) {
          updatePanel(node);
          updateHighlights(node);
        } else {
          hidePanel();
          updateHighlights(null);
        }
        container.style.cursor = node ? 'pointer' : 'grab';
      })
      .backgroundColor('rgba(0,0,0,0)');

    Graph.d3Force('charge').strength(-150);
    Graph.d3Force('link').distance(100);
    Graph.d3Force('center', d3.forceCenter());
    Graph.d3Force('x', d3.forceX().strength(0.3));
    Graph.d3Force('y', d3.forceY().strength(0.3));

    window.addEventListener('resize', () => {
      Graph.width(window.innerWidth);
      Graph.height(window.innerHeight - 80);
    });
  }
})();
