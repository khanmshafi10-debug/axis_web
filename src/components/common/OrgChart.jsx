import React, { useEffect, useRef, useState } from 'react';

const treeData = {
  id: 'partners', title: 'PARTNERS', sub: '', tier: 't-exec',
  children: [{
    id: 'ceo', title: 'CEO', sub: 'Mobeen Zia', tier: 't-exec',
    children: [{
      id: 'md', title: 'Managing Director (MD)', sub: 'Mujeeb Ali', tier: 't-exec',
      children: [{
        id: 'opmgr', title: 'Operational Manager', sub: 'Ch Kashif Naveed', tier: 't-ops',
        children: [
          { id: 'deputy', title: 'Deputy Manager', sub: 'Sohail Akhtar', tier: 't-mgr', children: [] },
          { id: 'financehr', title: 'Finance & HR Manager', sub: 'Ch Tallal Majeed', tier: 't-mgr', children: [] },
          {
            id: 'projmgr', title: 'Project Manager', sub: 'Ch Moin Anwar', tier: 't-mgr',
            children: [
              { id: 'qa', title: 'QA Manager', sub: 'Arif Dawood', tier: 't-qa', children: [] },
              {
                id: 'constmgr', title: 'Construction Manager', sub: 'Naeem', tier: 't-con',
                children: [
                  {
                    id: 'civil', title: 'Civil Team Leader', sub: 'Saifullah Khalid', tier: 't-lead',
                    children: [{
                      id: 'civilsup', title: 'Supervisors / Foremen', sub: '', tier: 't-ground',
                      children: [{ id: 'civilwork', title: 'Workers / Technicians', sub: '', tier: 't-ground', children: [] }]
                    }]
                  },
                  {
                    id: 'mech', title: 'Mechanical Team Leader', sub: 'Sakhawat Ali', tier: 't-lead',
                    children: [{
                      id: 'mechsup', title: 'Supervisors / Foremen', sub: '', tier: 't-ground',
                      children: [{ id: 'mechwork', title: 'Workers / Technicians', sub: '', tier: 't-ground', children: [] }]
                    }]
                  },
                  {
                    id: 'elec', title: 'Electrical, Instrument & Telecom Leader', sub: 'Saeed Imran', tier: 't-lead',
                    children: [{
                      id: 'elecsup', title: 'Supervisors / Foremen', sub: '', tier: 't-ground',
                      children: [{ id: 'elecwork', title: 'Workers / Technicians', sub: '', tier: 't-ground', children: [] }]
                    }]
                  }
                ]
              },
              { id: 'qc', title: 'QC Manager', sub: '', tier: 't-qa', children: [] },
              {
                id: 'safetymgr', title: 'Safety Manager', sub: 'Tahir Zameer', tier: 't-safe',
                children: [{ id: 'safetyoff', title: 'Safety Officer(s)', sub: '', tier: 't-safe', children: [] }]
              }
            ]
          }
        ]
      }]
    }]
  }]
};

export default function OrgChart() {
  const wrapperRef = useRef(null);
  const [scale, setScale] = useState(1.0);
  const [isCustomZoom, setIsCustomZoom] = useState(false);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [treeBounds, setTreeBounds] = useState({ w: 980, h: 900 });

  useEffect(() => {
    const tree = JSON.parse(JSON.stringify(treeData));

    const CARD_W = 168;
    const GAP_X = 20;
    const ROW_H = 115;
    const COL_W = CARD_W + GAP_X;

    let leafCounter = 0;
    function assignX(node, depth) {
      node.depth = depth;
      if (!node.children || node.children.length === 0) {
        node.x = leafCounter;
        leafCounter++;
        return;
      }
      node.children.forEach(c => assignX(c, depth + 1));
      const xs = node.children.map(c => c.x);
      node.x = xs.reduce((a, b) => a + b, 0) / xs.length;
    }
    assignX(tree, 0);

    // Compact Op Manager row
    (function compactOpMgrRow() {
      const opmgr = tree.children[0].children[0].children[0];
      if (opmgr && opmgr.children && opmgr.children.length >= 3) {
        const [deputy, financehr, projmgr] = opmgr.children;
        const centerX = opmgr.x;
        const sideGap = 1;
        const dx = centerX - projmgr.x;
        (function shift(n) {
          n.x += dx;
          n.children.forEach(shift);
        })(projmgr);
        deputy.x = centerX - sideGap;
        financehr.x = centerX + sideGap;
      }
    })();

    let maxDepth = 0;
    let minX = Infinity, maxX = -Infinity;
    (function findBounds(n) {
      maxDepth = Math.max(maxDepth, n.depth);
      minX = Math.min(minX, n.x);
      maxX = Math.max(maxX, n.x);
      n.children.forEach(findBounds);
    })(tree);

    (function normalize(n) {
      n.x -= minX;
      n.children.forEach(normalize);
    })(tree);
    maxX -= minX;

    const treeW = (maxX + 1) * COL_W;
    const treeH = (maxDepth + 1) * ROW_H + 85;
    setTreeBounds({ w: treeW, h: treeH });

    function px(n) { return n.x * COL_W + COL_W / 2; }
    function py(n) { return n.depth * ROW_H + 30; }

    const nodeList = [];
    const edgeList = [];

    function processNodes(n) {
      const cx = px(n);
      const cy = py(n);
      nodeList.push({
        id: n.id,
        title: n.title,
        sub: n.sub,
        tier: n.tier,
        left: cx - CARD_W / 2,
        top: cy,
        depth: n.depth
      });

      // Calculate exact bottom of parent card based on subtitle presence
      const parentCardH = n.sub ? 52 : 38;

      n.children.forEach(c => {
        const x1 = cx;
        // Start line 2px inside parent card bottom so there is zero gap
        const y1 = cy + parentCardH - 2;
        const x2 = px(c);
        // End line 2px inside child card top so there is zero gap
        const y2 = py(c) + 2;

        let pathD = '';
        if (Math.abs(x1 - x2) < 1) {
          pathD = `M ${x1} ${y1} L ${x2} ${y2}`;
        } else {
          const midY = (y1 + y2) / 2;
          pathD = `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`;
        }

        edgeList.push({ id: `${n.id}-${c.id}`, d: pathD, depth: c.depth });
        processNodes(c);
      });
    }

    processNodes(tree);
    setNodes(nodeList);
    setEdges(edgeList);

  }, []);

  useEffect(() => {
    function handleResize() {
      if (!isCustomZoom && wrapperRef.current) {
        const containerWidth = wrapperRef.current.clientWidth - 32;
        if (containerWidth > 0 && treeBounds.w > 0) {
          const fitScale = containerWidth / treeBounds.w;
          const safeScale = Math.min(Math.max(fitScale, 0.28), 1.0);
          setScale(safeScale);
        }
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [treeBounds, isCustomZoom]);

  const handleZoomIn = () => {
    setIsCustomZoom(true);
    setScale(prev => Math.min(prev + 0.15, 1.4));
  };

  const handleZoomOut = () => {
    setIsCustomZoom(true);
    setScale(prev => Math.max(prev - 0.15, 0.25));
  };

  const handleResetZoom = () => {
    setIsCustomZoom(false);
    if (wrapperRef.current) {
      const containerWidth = wrapperRef.current.clientWidth - 32;
      const fitScale = containerWidth / treeBounds.w;
      setScale(Math.min(Math.max(fitScale, 0.28), 1.0));
    }
  };

  return (
    <div className="org-chart-warm-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .org-chart-warm-container {
            width: 100%;
            background: #F5E6D0;
            background-image: radial-gradient(rgba(120, 90, 50, 0.06) 1px, transparent 1px);
            background-size: 22px 22px;
            border-radius: 20px;
            padding: 24px 16px 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
            border: 1.5px solid #E2D6C0;
            overflow: hidden;
            position: relative;
        }

        .oc-control-bar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            padding: 0 8px;
        }

        .oc-zoom-btn {
            background: #FFFFFF;
            border: 1.5px solid #E2D6C0;
            color: #0F1B3A;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 6px 12px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }

        .oc-zoom-btn:hover {
            background: #0F1B3A;
            color: #FFFFFF;
            border-color: #0F1B3A;
        }

        .oc-wrapper-outer {
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden !important;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 10px 0 0;
            -webkit-overflow-scrolling: touch;
        }

        .oc-stage-scaler {
            position: relative;
            transform-origin: top center;
            transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
            flex: none;
        }

        .oc-node-card {
            position: absolute;
            width: 168px;
            padding: 12px 14px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 8px 18px rgba(0, 0, 0, 0.12);
            transition: all 0.18s ease-out;
            cursor: pointer;
            user-select: none;
            z-index: 2;
        }

        .oc-node-card:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12), 0 14px 26px rgba(0, 0, 0, 0.16);
            z-index: 10;
        }

        .oc-node-card .node-title {
            font-weight: 800;
            font-size: 0.82rem;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            line-height: 1.25;
        }

        .oc-node-card .node-sub {
            font-size: 0.73rem;
            margin-top: 3px;
            font-weight: 600;
        }

        /* Tier Styling matching axis-org-chart (2).html */
        .t-exec {
            background: linear-gradient(135deg, #0F1B3A 0%, #16244A 100%);
            color: #FFFFFF;
        }
        .t-exec .node-title { color: #FFFFFF; }
        .t-exec .node-sub { color: #6FA8DC; }

        .t-ops {
            background: linear-gradient(135deg, #7BC47F 0%, #5FAE65 100%);
            color: #0B3B12;
        }
        .t-ops .node-title { color: #0B3B12; }
        .t-ops .node-sub { color: #1F5C29; }

        .t-mgr {
            background: linear-gradient(135deg, #A9D4F5 0%, #8FC3EE 100%);
            color: #0B3050;
        }
        .t-mgr .node-title { color: #0B3050; }
        .t-mgr .node-sub { color: #1D5580; }

        .t-qa {
            background: linear-gradient(135deg, #BCA8E8 0%, #A78FDD 100%);
            color: #2A1A4D;
        }
        .t-qa .node-title { color: #2A1A4D; }
        .t-qa .node-sub { color: #4B3480; }

        .t-con {
            background: linear-gradient(135deg, #F0925A 0%, #E87F42 100%);
            color: #4A2000;
        }
        .t-con .node-title { color: #4A2000; }
        .t-con .node-sub { color: #6B3410; }

        .t-lead {
            background: linear-gradient(135deg, #F5DE7D 0%, #EFCF5A 100%);
            color: #4A3C00;
        }
        .t-lead .node-title { color: #4A3C00; }
        .t-lead .node-sub { color: #6B5A10; }

        .t-safe {
            background: linear-gradient(135deg, #B7E8B0 0%, #9EDB96 100%);
            color: #0F3D0C;
        }
        .t-safe .node-title { color: #0F3D0C; }
        .t-safe .node-sub { color: #2A5C24; }

        .t-ground {
            background: #FFFFFF;
            border: 1.5px solid #E2D6C0;
            color: #3A2E1E;
        }
        .t-ground .node-title { color: #3A2E1E; }
        .t-ground .node-sub { color: #8A7B60; }

        .oc-edge-line {
            fill: none;
            stroke: #3B7CB8;
            stroke-width: 2.2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        .legend-bar-warm {
            display: flex;
            flex-wrap: wrap;
            gap: 12px 18px;
            justify-content: center;
            margin-top: 24px;
            padding-top: 18px;
            border-top: 1.5px solid #E2D6C0;
        }

        .legend-item-warm {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            color: #3A2E1E;
            font-weight: 600;
        }

        .legend-color-warm {
            width: 14px;
            height: 14px;
            border-radius: 4px;
        }
      ` }} />

      {/* Control Buttons */}
      <div className="oc-control-bar">
        <button className="oc-zoom-btn" onClick={handleZoomOut} title="Zoom Out">-</button>
        <button className="oc-zoom-btn" onClick={handleResetZoom} title="Reset Zoom">Fit ({Math.round(scale * 100)}%)</button>
        <button className="oc-zoom-btn" onClick={handleZoomIn} title="Zoom In">+</button>
      </div>

      <div 
        className="oc-wrapper-outer" 
        ref={wrapperRef} 
        style={{ height: `${Math.ceil(treeBounds.h * scale) + 15}px` }}
      >
        <div 
          className="oc-stage-scaler" 
          style={{ 
            width: `${treeBounds.w}px`, 
            height: `${treeBounds.h}px`,
            transform: `scale(${scale})` 
          }}
        >
          <svg 
            style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible', zIndex: 1 }} 
            width={treeBounds.w} 
            height={treeBounds.h}
          >
            {edges.map(e => (
              <path key={e.id} d={e.d} className="oc-edge-line" />
            ))}
          </svg>

          {nodes.map(n => (
            <div 
              key={n.id} 
              className={`oc-node-card ${n.tier}`} 
              style={{ left: `${n.left}px`, top: `${n.top}px` }}
            >
              <div className="node-title">{n.title}</div>
              {n.sub && <div className="node-sub">{n.sub}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Legend Bar */}
      <div className="legend-bar-warm">
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#0F1B3A' }}></span> Executive Board</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#7BC47F' }}></span> Operations</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#A9D4F5' }}></span> Managers</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#BCA8E8' }}></span> QA / QC</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#F0925A' }}></span> Construction</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#F5DE7D' }}></span> Team Leaders</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#B7E8B0' }}></span> Safety</div>
        <div className="legend-item-warm"><span className="legend-color-warm" style={{ background: '#FFFFFF', border: '1px solid #E2D6C0' }}></span> Ground Workforce</div>
      </div>
    </div>
  );
}
