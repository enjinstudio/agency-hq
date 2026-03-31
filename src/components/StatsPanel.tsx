'use client';

const AGENT_STATS = [
  { name: "Scotty", emoji: "⚙️", count: 24 },
  { name: "Spock", emoji: "🖖", count: 19 },
  { name: "Rex", emoji: "🦊", count: 14 },
  { name: "Rook", emoji: "♟️", count: 11 },
  { name: "Watson", emoji: "🔍", count: 8 },
];

const maxCount = Math.max(...AGENT_STATS.map(a => a.count));

const SUMMARY = {
  closed: 9,
  blocked: 3,
  active: 5,
};

export default function StatsPanel() {
  return (
    <div className="px-3 py-2 flex flex-col gap-3">
      {/* Pill badges */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#22c55e22', color: '#22c55e' }}>
          {SUMMARY.closed} closed
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#ef444422', color: '#ef4444' }}>
          {SUMMARY.blocked} blocked
        </span>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#9333ea22', color: '#9333ea' }}>
          {SUMMARY.active} active now
        </span>
      </div>

      {/* Agent activity bar chart */}
      <div>
        <div className="text-[9px] text-[#4b5563] uppercase tracking-wider mb-2">Agent Activity</div>
        <div className="flex flex-col gap-1.5">
          {AGENT_STATS.map((agent) => (
            <div key={agent.name} className="flex items-center gap-2">
              <span className="text-xs w-5 text-center">{agent.emoji}</span>
              <span className="text-[10px] text-[#b0b0c0] w-14 truncate">{agent.name}</span>
              <div className="flex-1 h-3 bg-[#1a1a2e] rounded overflow-hidden">
                <div
                  className="h-full rounded"
                  style={{
                    width: `${(agent.count / maxCount) * 100}%`,
                    backgroundColor: '#9333ea',
                    imageRendering: 'pixelated',
                    /* Pixel bar effect via repeating gradient */
                    backgroundImage: 'repeating-linear-gradient(90deg, #9333ea 0px, #9333ea 3px, #7c22d4 3px, #7c22d4 4px)',
                  }}
                />
              </div>
              <span className="text-[9px] text-[#9333ea] w-5 text-right font-bold">{agent.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
