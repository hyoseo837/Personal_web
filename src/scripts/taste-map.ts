(() => {
  const items = document.querySelectorAll<HTMLElement>('.taste-item');
  const body = document.body;
  const container = document.getElementById('taste-map-container');
  const svg = document.getElementById('connections-svg') as unknown as SVGSVGElement | null;

  function drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
    if (!svg) return;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path') as SVGPathElement;
    
    // Create a curved path
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cx1 = x1 + dx * 0.2;
    const cy1 = y1 + dy * 0.8;
    const cx2 = x1 + dx * 0.8;
    const cy2 = y1 + dy * 0.2;
    
    const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
    
    path.setAttribute('d', d);
    path.setAttribute('stroke', color);
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('fill', 'none');
    path.classList.add('connection-line');
    
    svg.appendChild(path);

    // Dynamic length animation
    const length = path.getTotalLength();
    path.style.strokeDasharray = length.toString();
    path.style.strokeDashoffset = length.toString();
    path.style.opacity = '0';
    
    // Trigger animation
    requestAnimationFrame(() => {
      path.style.transition = 'stroke-dashoffset 0.8s ease-out, opacity 0.3s ease-out';
      path.style.strokeDashoffset = '0';
      path.style.opacity = '0.3';
    });
  }

  function clearLines() {
    if (!svg) return;
    const lines = svg.querySelectorAll('.connection-line');
    lines.forEach(line => {
      if (line instanceof SVGPathElement) {
        line.style.opacity = '0';
        setTimeout(() => line.remove(), 300);
      }
    });
  }

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const color = item.getAttribute('data-color');
      const connectionsData = item.getAttribute('data-connections');
      const connections: string[] = JSON.parse(connectionsData || '[]');
      
      if (color) {
        body.style.backgroundColor = `${color}0D`; 
        if (container) container.style.borderColor = `${color}40`;
      }

      if (connections.length > 0 && svg && container) {
        // Clear previous lines immediately to avoid race conditions
        const existingLines = svg.querySelectorAll('.connection-line');
        existingLines.forEach(l => l.remove());

        const rect1 = item.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const x1 = rect1.left - containerRect.left + rect1.width / 2;
        const y1 = rect1.top - containerRect.top + rect1.height / 2;

        connections.forEach(targetName => {
          const target = document.querySelector(`.taste-item[data-name="${targetName}"]`) as HTMLElement | null;
          if (target) {
            const rect2 = target.getBoundingClientRect();
            const x2 = rect2.left - containerRect.left + rect2.width / 2;
            const y2 = rect2.top - containerRect.top + rect2.height / 2;
            
            drawLine(x1, y1, x2, y2, color || '#000');
            const span = target.querySelector('span');
            if (span) span.classList.add('!border-accent-bright', '!text-text-main');
          }
        });
      }
    });

    item.addEventListener('mouseleave', () => {
      body.style.backgroundColor = '';
      if (container) container.style.borderColor = '';
      
      clearLines();

      document.querySelectorAll('.taste-item span').forEach(span => {
        span.classList.remove('!border-accent-bright', '!text-text-main');
      });
    });
  });
})();
