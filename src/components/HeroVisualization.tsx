import { motion } from 'framer-motion'

// Abstract node-based flow visualization representing batch tracking
export function HeroVisualization() {
  const nodes = [
    { id: 1, x: 20, y: 30, label: 'Input', delay: 0 },
    { id: 2, x: 50, y: 20, label: 'Process', delay: 0.2 },
    { id: 3, x: 80, y: 35, label: 'Output', delay: 0.4 },
    { id: 4, x: 35, y: 60, label: 'Track', delay: 0.3 },
    { id: 5, x: 65, y: 55, label: 'Analyze', delay: 0.5 },
  ]

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 2, to: 5 },
    { from: 5, to: 3 },
  ]

  return (
    <div className="relative w-full h-full min-h-[400px]">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-gold/5 rounded-3xl" />
      
      <svg className="w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
        {/* Connection lines */}
        {connections.map((conn, i) => {
          const from = nodes.find(n => n.id === conn.from)!
          const to = nodes.find(n => n.id === conn.to)!
          return (
            <motion.line
              key={`line-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
          )
        })}

        {/* Animated pulses along connections */}
        {connections.map((conn, i) => {
          const from = nodes.find(n => n.id === conn.from)!
          const to = nodes.find(n => n.id === conn.to)!
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="1"
              fill="hsl(173 58% 39%)"
              initial={{ cx: from.x, cy: from.y, opacity: 0 }}
              animate={{
                cx: [from.x, to.x],
                cy: [from.y, to.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: 1 + i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
              }}
            />
          )
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(173 58% 39%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(43 74% 49%)" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="hsl(173 58% 39%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(173 58% 39%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: node.delay + 0.3 }}
          >
            {/* Glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="url(#nodeGlow)"
            />
            {/* Node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="white"
              stroke="hsl(173 58% 39%)"
              strokeWidth="1"
              animate={{
                r: [4, 4.5, 4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.delay,
              }}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + 10}
              textAnchor="middle"
              className="fill-text-muted text-[3px] font-medium"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
