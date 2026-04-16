# Agency HQ (Agent Arena) — Project Context

## What This Is
Real-time pixel art visualization of the AI agent team. Shows agents working in a virtual office.
Next.js 16 + Pixi.js + Vercel. TypeScript.

## Features
- 6 rooms: Main Office, Meeting, Kitchen, Game, Server, Rest
- Pixel art agent characters with unique colors + animations
- Real-time status from OpenClaw (active/idle/offline)
- Activity feed, agent chat, spotlight view
- 24-hour activity heatmap
- Day/night ambient lighting
- Pixel the dog (office mascot)
- Demo mode for standalone use

## Tech Stack
- Graphics: Pixi.js 8 (2D canvas rendering)
- Canvas: node-canvas (server-side rendering)
- Hosting: Vercel

## Key Rules
- Demo mode must always work (no OpenClaw dependency for basic display)
- Agent colors and names defined in config — keep in sync with OpenClaw team
- Mobile: stacked layout, not side-by-side
