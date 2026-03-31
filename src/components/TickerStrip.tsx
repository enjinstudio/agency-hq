'use client';

import { useEffect, useRef } from 'react';

const TICKER_ITEMS = [
  { agent: "Scotty", emoji: "⚙️", action: "Writing API endpoint", mins: 2 },
  { agent: "Spock", emoji: "🖖", action: "Reviewing pull request #47", mins: 5 },
  { agent: "Rex", emoji: "🦊", action: "Researching market trends", mins: 8 },
  { agent: "Watson", emoji: "🔍", action: "Running data analysis", mins: 11 },
  { agent: "Rook", emoji: "♟️", action: "Drafting architecture doc", mins: 14 },
  { agent: "Scotty", emoji: "⚙️", action: "Debugging CSS regression", mins: 17 },
  { agent: "Rex", emoji: "🦊", action: "Updating sprint board", mins: 23 },
  { agent: "Spock", emoji: "🖖", action: "Coordinating deployment", mins: 31 },
];

export default function TickerStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 60 / 60; // 60px/s at ~60fps → 1px/frame

    const tick = () => {
      pos += speed;
      // When we've scrolled past the first copy, reset
      if (pos >= el.scrollWidth / 2) {
        pos = 0;
      }
      el.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  const items = TICKER_ITEMS;
  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden shrink-0"
      style={{
        height: 24,
        backgroundColor: '#07070d',
        borderBottom: '1px solid #1e1e2e',
      }}
    >
      <div
        ref={scrollRef}
        className="flex items-center whitespace-nowrap h-full"
        style={{ willChange: 'transform' }}
      >
        {allItems.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span style={{ fontSize: 10, fontFamily: 'system-ui', color: '#4b4b6b' }}>
              <span>{item.emoji}</span>{' '}
              <span style={{ color: '#6b6b9b' }}>{item.agent}</span>
              {' · '}
              {item.action}
              {' · '}
              {item.mins}m ago
            </span>
            <span
              className="mx-3 inline-block"
              style={{ color: '#2a2a3e', fontSize: 10 }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
