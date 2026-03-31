'use client';

const KANBAN_CARDS = {
  todo: [
    { title: "Set up error monitoring", tag: "chore", agent: "Scotty" },
    { title: "Write changelog for v2.1", tag: "chore", agent: "Spock" },
    { title: "Improve search ranking", tag: "feat", agent: null },
  ],
  inProgress: [
    { title: "Rebuild nav component", tag: "feat", agent: "Rook" },
    { title: "Fix broken redirects", tag: "bug", agent: "Scotty" },
    { title: "Draft release notes", tag: "chore", agent: "Rex" },
  ],
  done: [
    { title: "Deploy v2 to production", tag: "feat", agent: "Scotty" },
    { title: "Merge auth PR", tag: "feat", agent: "Rook" },
    { title: "Clear stale branches", tag: "chore", agent: "Spock" },
  ],
};

const TAG_COLORS: Record<string, string> = {
  bug: '#ef4444',
  feat: '#3b82f6',
  chore: '#6b7280',
};

const COLUMNS: { key: keyof typeof KANBAN_CARDS; label: string; color: string }[] = [
  { key: 'todo', label: 'To Do', color: '#94a3b8' },
  { key: 'inProgress', label: 'In Progress', color: '#9333ea' },
  { key: 'done', label: 'Done', color: '#22c55e' },
];

export default function KanbanBoard() {
  return (
    <div className="flex gap-2 px-2 py-2 h-full overflow-x-auto">
      {COLUMNS.map(col => (
        <div key={col.key} className="flex-1 min-w-[100px] flex flex-col">
          <div
            className="text-[9px] font-bold uppercase tracking-wider mb-1.5 px-1"
            style={{ color: col.color }}
          >
            {col.label}
            <span className="ml-1 opacity-60">({KANBAN_CARDS[col.key].length})</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {KANBAN_CARDS[col.key].map((card, i) => (
              <div
                key={i}
                className="rounded px-2 py-1.5"
                style={{
                  backgroundColor: '#13131f',
                  border: '1px solid #2a2a3e',
                }}
              >
                <div className="text-[10px] text-[#d0d0d0] leading-tight mb-1">
                  {card.title}
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase"
                    style={{
                      backgroundColor: (TAG_COLORS[card.tag] || '#6b7280') + '22',
                      color: TAG_COLORS[card.tag] || '#6b7280',
                    }}
                  >
                    {card.tag}
                  </span>
                  {card.agent && (
                    <span className="text-[8px] text-[#6b7280]">{card.agent}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
