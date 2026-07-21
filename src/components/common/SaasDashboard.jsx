import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Server, 
  Layers, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  Camera, 
  HardHat, 
  TrendingUp, 
  Wifi, 
  RefreshCw,
  Eye
} from 'lucide-react';

export default function SaasDashboard() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [isLive, setIsLive] = useState(true);
  const [activeNode, setActiveNode] = useState('KSA-HQ-01');
  const [telemetryValues, setTelemetryValues] = useState({
    powerEfficiency: 98.4,
    gridPressure: 142.8,
    activeSensors: 1240,
    safetyRating: 99.9,
    throughput: 840
  });

  // Simulate real-time metric jittering for live SaaS feel
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(() => {
      setTelemetryValues(prev => ({
        powerEfficiency: +(98.0 + Math.random() * 0.9).toFixed(1),
        gridPressure: +(141.5 + Math.random() * 2.5).toFixed(1),
        activeSensors: prev.activeSensors,
        safetyRating: +(99.8 + Math.random() * 0.2).toFixed(1),
        throughput: Math.floor(830 + Math.random() * 30)
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="saas-dashboard-wrapper" style={{
      background: 'linear-gradient(135deg, #091322 0%, #0F1C33 50%, #08111E 100%)',
      borderRadius: '20px',
      border: '1px solid rgba(0, 210, 255, 0.2)',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      padding: 'clamp(20px, 4vw, 35px)',
      color: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
      margin: '40px 0'
    }}>
      {/* Background Ambient Glow & Grid Grid */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        right: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(226, 148, 15, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
        pointerEvents: 'none'
      }} />

      {/* Header bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        paddingBottom: '20px',
        marginBottom: '25px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            background: 'rgba(0, 210, 255, 0.15)',
            border: '1px solid rgba(0, 210, 255, 0.4)',
            padding: '10px',
            borderRadius: '12px',
            display: 'flex'
          }}>
            <Cpu size={26} color="#00D2FF" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#FFF', fontWeight: 700 }}>AXIS Cloud Industrial IoT & Telemetry Hub</h3>
              <span style={{
                background: 'linear-gradient(90deg, #00D2FF 0%, #0072FF 100%)',
                color: '#FFF',
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>PRO SaaS</span>
            </div>
            <p style={{ margin: '3px 0 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
              Real-Time SCADA Monitoring, Structural Telemetry & AI Safety Intelligence
            </p>
          </div>
        </div>

        {/* Live Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 14px',
            borderRadius: '30px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '0.85rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: isLive ? '#10B981' : '#EF4444',
              boxShadow: isLive ? '0 0 10px #10B981' : 'none',
              display: 'inline-block'
            }} />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{isLive ? 'LIVE STREAM' : 'PAUSED'}</span>
            <button 
              onClick={() => setIsLive(!isLive)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#00D2FF',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '4px',
                padding: 0
              }}
              title="Toggle Live Stream"
            >
              <RefreshCw size={14} className={isLive ? "spin-slow" : ""} />
            </button>
          </div>

          {/* Node Selector */}
          <select 
            value={activeNode} 
            onChange={(e) => setActiveNode(e.target.value)}
            style={{
              background: 'rgba(15, 28, 51, 0.9)',
              color: '#FFF',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="KSA-HQ-01">KSA Jubail Industrial Hub</option>
            <option value="KSA-RYD-02">Riyadh Metro Infrastructure</option>
            <option value="PAK-KHN-03">Pakistan EPC Site Sector 4</option>
          </select>
        </div>
      </div>

      {/* Top Metrics Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '15px',
        marginBottom: '25px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px',
          transition: 'transform 0.2s ease, border-color 0.2s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '8px' }}>
            <span>Power Efficiency</span>
            <Zap size={16} color="#00D2FF" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00D2FF' }}>{telemetryValues.powerEfficiency}%</div>
          <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <TrendingUp size={12} /> +1.2% optimal grid
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '8px' }}>
            <span>Pipeline Pressure</span>
            <Activity size={16} color="#E2940F" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#E2940F' }}>{telemetryValues.gridPressure} <span style={{fontSize: '0.9rem', fontWeight: 500}}>PSI</span></div>
          <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <CheckCircle2 size={12} /> Nominal tolerance
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '8px' }}>
            <span>Active IoT Nodes</span>
            <Wifi size={16} color="#10B981" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFF' }}>{telemetryValues.activeSensors}</div>
          <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <Radio size={12} /> 100% online signal
          </div>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '8px' }}>
            <span>Safety Index</span>
            <ShieldCheck size={16} color="#3B82F6" />
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3B82F6' }}>{telemetryValues.safetyRating}%</div>
          <div style={{ fontSize: '0.75rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            <HardHat size={12} /> Zero HSE Incidents
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div style={{
        display: 'flex',
        gap: '10px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '20px',
        overflowX: 'auto',
        paddingBottom: '2px'
      }}>
        <button
          onClick={() => setActiveTab('telemetry')}
          style={{
            background: activeTab === 'telemetry' ? 'rgba(0, 210, 255, 0.15)' : 'transparent',
            color: activeTab === 'telemetry' ? '#00D2FF' : 'rgba(255, 255, 255, 0.65)',
            border: 'none',
            borderBottom: activeTab === 'telemetry' ? '2px solid #00D2FF' : '2px solid transparent',
            padding: '10px 18px',
            borderRadius: '6px 6px 0 0',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease'
          }}
        >
          <BarChart3 size={16} /> SCADA & Structural Telemetry
        </button>

        <button
          onClick={() => setActiveTab('cctv')}
          style={{
            background: activeTab === 'cctv' ? 'rgba(0, 210, 255, 0.15)' : 'transparent',
            color: activeTab === 'cctv' ? '#00D2FF' : 'rgba(255, 255, 255, 0.65)',
            border: 'none',
            borderBottom: activeTab === 'cctv' ? '2px solid #00D2FF' : '2px solid transparent',
            padding: '10px 18px',
            borderRadius: '6px 6px 0 0',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease'
          }}
        >
          <Camera size={16} /> AI CCTV Hazard Radar
        </button>

        <button
          onClick={() => setActiveTab('fleet')}
          style={{
            background: activeTab === 'fleet' ? 'rgba(0, 210, 255, 0.15)' : 'transparent',
            color: activeTab === 'fleet' ? '#00D2FF' : 'rgba(255, 255, 255, 0.65)',
            border: 'none',
            borderBottom: activeTab === 'fleet' ? '2px solid #00D2FF' : '2px solid transparent',
            padding: '10px 18px',
            borderRadius: '6px 6px 0 0',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease'
          }}
        >
          <Layers size={16} /> Smart Fleet & Equipment Dispatch
        </button>
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        {activeTab === 'telemetry' && (
          <motion.div
            key="telemetry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {/* Live Chart Simulation */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '20px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h4 style={{ margin: 0, color: '#FFF', fontSize: '0.95rem', fontWeight: 600 }}>Plant Energy & Load Monitor</h4>
                <span style={{ fontSize: '0.75rem', color: '#00D2FF', background: 'rgba(0,210,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                  Realtime Peak: {telemetryValues.throughput} MW
                </span>
              </div>
              
              {/* Animated Graph Bars */}
              <div style={{ height: '140px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '10px 0 5px' }}>
                {[65, 80, 45, 90, 75, 88, 95, 70, 85, 92, 78, 89, 94, 82, 96].map((h, i) => {
                  const animatedHeight = isLive ? Math.min(100, Math.max(30, h + (i % 2 === 0 ? Math.sin(Date.now() / 1000 + i) * 10 : -Math.cos(Date.now() / 1000 + i) * 10))) : h;
                  return (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: '100%',
                        height: `${animatedHeight}%`,
                        background: i === 14 ? 'linear-gradient(to top, #E2940F, #FFD700)' : 'linear-gradient(to top, #0072FF, #00D2FF)',
                        borderRadius: '4px 4px 0 0',
                        transition: 'height 0.4s ease'
                      }} />
                    </div>
                  );
                })}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginTop: '8px' }}>
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>NOW</span>
              </div>
            </div>

            {/* Subsystem Status */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <h4 style={{ margin: '0 0 15px 0', color: '#FFF', fontSize: '0.95rem', fontWeight: 600 }}>Active Engineering Subsystems</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.85)' }}>Turbine Heat Exchangers</span>
                  <span style={{ color: '#10B981', background: 'rgba(16,185,129,0.15)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>OPTIMAL (42°C)</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '42%', height: '100%', background: '#10B981' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.85)' }}>Structural Vibration Sensors</span>
                  <span style={{ color: '#10B981', background: 'rgba(16,185,129,0.15)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>NORMAL (0.02g)</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '18%', height: '100%', background: '#00D2FF' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <span style={{ color: 'rgba(255,255,255,0.85)' }}>Substation Transformers</span>
                  <span style={{ color: '#E2940F', background: 'rgba(226,148,15,0.15)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>LOAD 84%</span>
                </div>
                <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '84%', height: '100%', background: '#E2940F' }} />
                </div>
              </div>

              <div style={{
                marginTop: '15px',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.6)'
              }}>
                <span>Node location: {activeNode}</span>
                <span style={{ color: '#00D2FF', fontWeight: 600 }}>Synced 1s ago</span>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'cctv' && (
          <motion.div
            key="cctv"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '15px'
            }}
          >
            {/* Camera feed 1 */}
            <div style={{
              position: 'relative',
              background: '#040914',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0,210,255,0.3)',
              height: '180px'
            }}>
              <img 
                src="images/oil.png" 
                alt="Refinery Feed" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
              />
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                background: 'rgba(0,0,0,0.7)',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                CAM-01: JUBAIL REFINERY SECTOR A
              </div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                border: '1px solid #00D2FF',
                background: 'rgba(0, 210, 255, 0.2)',
                color: '#00D2FF',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '3px'
              }}>
                AI PPE PPE-CHECK: PASSED 100%
              </div>
            </div>

            {/* Camera feed 2 */}
            <div style={{
              position: 'relative',
              background: '#040914',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(16,185,129,0.3)',
              height: '180px'
            }}>
              <img 
                src="images/civil.jpg" 
                alt="Civil Site Feed" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} 
              />
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                background: 'rgba(0,0,0,0.7)',
                padding: '3px 8px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                CAM-02: STRUCTURAL DECK B-3
              </div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                border: '1px solid #10B981',
                background: 'rgba(16, 185, 129, 0.2)',
                color: '#10B981',
                fontSize: '0.7rem',
                padding: '2px 6px',
                borderRadius: '3px'
              }}>
                NO HAZARD DETECTED
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'fleet' && (
          <motion.div
            key="fleet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '20px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.8rem', color: '#00D2FF', fontWeight: 600 }}>CRANE-RIG-880</div>
                <div style={{ fontSize: '0.9rem', color: '#FFF', marginTop: '4px' }}>Demag 500-Ton All Terrain Crane</div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', marginTop: '6px' }}>Status: Deployed (Jubail Site)</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.8rem', color: '#00D2FF', fontWeight: 600 }}>FLT-HEAVY-102</div>
                <div style={{ fontSize: '0.9rem', color: '#FFF', marginTop: '4px' }}>Heavy Multi-Axle Lowbed Trailer</div>
                <div style={{ fontSize: '0.75rem', color: '#10B981', marginTop: '6px' }}>Status: In Transit (Logistics)</div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontSize: '0.8rem', color: '#00D2FF', fontWeight: 600 }}>GEN-KW-500</div>
                <div style={{ fontSize: '0.9rem', color: '#FFF', marginTop: '4px' }}>500 KVA Diesel Power Generator</div>
                <div style={{ fontSize: '0.75rem', color: '#E2940F', marginTop: '6px' }}>Status: Scheduled Maintenance</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer bar */}
      <div style={{
        marginTop: '25px',
        paddingTop: '15px',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px',
        fontSize: '0.82rem',
        color: 'rgba(255,255,255,0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Server size={14} color="#00D2FF" />
          <span>AXIS Cloud Intelligence System • ISO 9001:2015 & OSHA Compliant</span>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="/contact" style={{ color: '#00D2FF', textDecoration: 'none', fontWeight: 600 }}>Request Live Demo →</a>
        </div>
      </div>
    </div>
  );
}
