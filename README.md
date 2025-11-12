A compact project-timeline component built with plain JavaScript, featuring automatic lane assignment, zooming, editing, and drag-and-drop interaction.

Features

Automatic lane assignment (compact)
Items share the same lane when end(A) < start(B), with light flexibility to fit long labels.
Zoom in/out (px per day)
Drag & drop
Drag body → move event
Drag edges → resize start/end date
Inline rename (double-click)
Adaptive time scale
Day / multi-day / weekly / monthly labels depending on zoom level
"Show Today" marker
"Filter to Today" — optionally show only events active today
Scroll preserved on update
No redraw during dragging → smoother UX
All implemented in ~4h complexity level.


What I like about this implementation:

Zero dependencies (plain JS) — easy to read, review, and run anywhere
Greedy compact lane packing with small label buffer for readability
Smooth UX
Only the active bar updates during drag; full re-render runs only on release → no layout flickering and preserved scroll
Adaptive time scale keeps labels clean and useful without visual overload
Simple editing workflow: double-click to rename, intuitive drag edges to resize

What I would improve with more time:
State management extraction
A small store separating data, layout, and rendering would simplify further features.
Accessibility (a11y)
Keyboard support for move/resize, better ARIA labels, improved focus management.
Higher-scale performance
Virtualization or canvas-based rendering for large datasets (1000+ items).
Constraints / snapping
Snap to weeks or months; min/max duration; dependency constraints.
Undo/redo
Simple history model.
Better mobile/touch UX
Larger hit areas, edge scrolling when dragging close to boundaries.


Design decisions:
Greedy lane assignment + label buffer
Meets the requirement of compact layout while keeping labels readable.
Absolute-position DOM bars within lanes
Each event directly maps to pixel positions → easy to update during drag.
Drag does not re-render
Live-update only the hovered bar and label while dragging → smooth experience; single re-render afterwards recomputes lanes and bounds.
Adaptive time scale
Inspired by Gantt and calendar tools (e.g., Google Calendar), label density responds to zoom level.
Minimal controls UI
Focus on clarity: simple zoom buttons/slider + checkboxes.


How I would test this (with more time):
Unit tests (Jest / Vitest)
assignLanes correctness:
Non-overlapping → same lane
Overlap → new lane
Edge case: exact end=start with/without buffer
Mixed order input
Date utilities (daysBetween, fmt)
Label fitting behavior for different widths
Interaction tests (Playwright / Cypress)


How to run:
npm install
npm start
