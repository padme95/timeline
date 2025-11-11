import { assignLanes } from "./assignLanes.js";
import timelineItems from "./timelineItems.js";

const toDate = (s) => new Date(`${s}T00:00:00`);
const fmt = (d) => d.toISOString().slice(0, 10);
const daysBetween = (aStr, bStr) => Math.round((toDate(bStr) - toDate(aStr)) / (1000 * 60 * 60 * 24));
const overlapsToday = (it, today) => toDate(it.start) <= today && today <= toDate(it.end);

let items = structuredClone(timelineItems);
let pxPerDay = 16;
let showTodayMarker = false;
let filterToday = false;

let lastTimelineScrollLeft = 0;
let lastTimelineScrollTop = 0;
let lastWindowX = 0;
let lastWindowY = 0;

function computeBounds(list, includeToday = false) {
  const today = new Date();
  if (!list.length) {
    const pad = 2 * 24 * 3600 * 1000;
    return [new Date(today.getTime() - pad), new Date(today.getTime() + pad)];
  }
  let min = toDate(list[0].start);
  let max = toDate(list[0].end);
  for (const it of list) {
    const s = toDate(it.start), e = toDate(it.end);
    if (s < min) min = s;
    if (e > max) max = e;
  }
  if (includeToday) {
    if (today < min) min = today;
    if (today > max) max = today;
  }
  const pad = 2 * 24 * 3600 * 1000;
  return [new Date(min.getTime() - pad), new Date(max.getTime() + pad)];
}

function buildBarLabelHTML(it, width) {
  const W = width;
  let nameHTML = "", datesHTML = "";
  if (W >= 160) { nameHTML = `<div class="name">${it.name}</div>`; datesHTML = `<div class="dates">${it.start} → ${it.end}</div>`; }
  else if (W >= 120) { const short = it.name.length > 18 ? it.name.slice(0, 18) + "…" : it.name; nameHTML = `<div class="name">${short}</div>`; datesHTML = `<div class="dates">${it.start.slice(5)}→${it.end.slice(5)}</div>`; }
  else if (W >= 80) { const short = it.name.length > 14 ? it.name.slice(0, 14) + "…" : it.name; nameHTML = `<div class="name">${short}</div>`; }
  else if (W >= 48) { datesHTML = `<div class="dates">${it.start.slice(5)}→${it.end.slice(5)}</div>`; }
  else if (W >= 24) { datesHTML = `<div class="dates">${it.start.slice(5)}</div>`; }
  return `${nameHTML}${datesHTML}`;
}

function render() {
  const root = document.getElementById("root");
  const prevTimeline = root.querySelector(".timeline");
  if (prevTimeline) { lastTimelineScrollLeft = prevTimeline.scrollLeft; lastTimelineScrollTop = prevTimeline.scrollTop; }
  lastWindowX = window.scrollX; lastWindowY = window.scrollY;

  root.innerHTML = "";

  const today = new Date();
  const working = filterToday ? items.filter((it) => overlapsToday(it, today)) : items;
  const [minDate, maxDate] = computeBounds(working, showTodayMarker);
  const lanes = assignLanes(working, { labelBufferDays: 0.45 });
  const totalDays = daysBetween(fmt(minDate), fmt(maxDate)) + 1;
  const widthPx = totalDays * pxPerDay;

  const controls = document.createElement("div");
  controls.className = "tl-controls";
  controls.innerHTML = `
    <button id="zoomOut" aria-label="Zoom out">−</button>
    <input id="zoomSlider" type="range" min="6" max="40" step="1" value="${pxPerDay}" aria-label="Zoom"/>
    <button id="zoomIn" aria-label="Zoom in">+</button>
    <label class="chk"><input id="showToday" type="checkbox" ${showTodayMarker ? "checked" : ""}/> <span>Show "Today"</span></label>
    <label class="chk"><input id="filterToday" type="checkbox" ${filterToday ? "checked" : ""}/> <span>Filter to Today</span></label>
    <span class="hint">Double-click to rename. Drag body to move, edges to resize.</span>
  `;
  root.appendChild(controls);

  const timeline = document.createElement("div");
  timeline.className = "timeline";
  timeline.style.setProperty("--col-width", `${pxPerDay}px`);

  const header = document.createElement("div");
  header.className = "tl-header";
  const scale = document.createElement("div");
  scale.className = "tl-scale";
  scale.style.width = `${widthPx}px`;
  const labelStep = (px) => (px >= 28 ? 1 : px >= 20 ? 2 : px >= 14 ? 3 : px >= 10 ? 7 : "month");
  const step = labelStep(pxPerDay);

  for (let i = 0; i < totalDays; i++) {
    const d = new Date(minDate.getTime() + i * 24 * 3600 * 1000);
    const tick = document.createElement("div");
    tick.className = "tick";
    if (d.getUTCDay() === 1) tick.classList.add("strong");
    let label = "";
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    if (step === 1) label = `${mm}-${dd}`;
    else if (step === 2 || step === 3) { if (i % step === 0) label = `${mm}-${dd}`; }
    else if (step === 7) { if (d.getUTCDay() === 1) label = `${mm}-${dd}`; }
    else { if (d.getUTCDate() === 1) { label = `${d.getUTCFullYear()}-${mm}`; tick.classList.add("strong"); } }
    tick.textContent = label;
    scale.appendChild(tick);
  }
  header.appendChild(scale);
  timeline.appendChild(header);

  if (showTodayMarker) {
    const fromMin = daysBetween(fmt(minDate), fmt(today));
    const marker = document.createElement("div");
    marker.className = "today";
    marker.style.left = `${fromMin * pxPerDay}px`;
    timeline.appendChild(marker);
  }

  const lanesEl = document.createElement("div");
  lanesEl.className = "lanes";
  lanesEl.style.width = `${widthPx}px`;

  const getOrigin = () => {
    const rect = lanesEl.getBoundingClientRect();
    const paddingLeft = 8;
    return { originLeftScreen: rect.left + paddingLeft, scrollX: timeline.scrollLeft };
  };
  const toDays = (clientX, originLeftScreen, scrollX) => Math.round(((clientX - originLeftScreen) + scrollX) / pxPerDay);

  lanes.forEach((laneItems) => {
    const laneEl = document.createElement("div");
    laneEl.className = "lane";

    laneItems.forEach((it) => {
      const startDays = Math.max(0, daysBetween(fmt(minDate), it.start));
      const duration = Math.max(1, daysBetween(it.start, it.end) + 1);
      const left = startDays * pxPerDay;
      const width = duration * pxPerDay;

      const bar = document.createElement("div");
      bar.className = "bar";
      bar.style.left = `${left}px`;
      bar.style.width = `${width}px`;
      bar.title = `${it.name} • ${it.start} → ${it.end}`;

      const handleLeft = document.createElement("div");
      handleLeft.className = "handle left";
      const handleRight = document.createElement("div");
      handleRight.className = "handle right";

      const label = document.createElement("div");
      label.className = "label";
      label.innerHTML = buildBarLabelHTML(it, width);

      bar.ondblclick = (e) => {
        e.stopPropagation();
        const newName = prompt("Rename item:", it.name);
        if (newName && newName.trim() && newName !== it.name) {
          it.name = newName.trim();
          render();
        }
      };

      const onBodyPointerDown = (downEvent) => {
        const threshold = 3;
        const startX = downEvent.clientX;
        let dragging = false;

        const { originLeftScreen, scrollX } = getOrigin();
        const startOffset = toDays(downEvent.clientX, originLeftScreen, scrollX);
        const baseStart = toDate(it.start);
        const baseEnd = toDate(it.end);
        let liveStart = new Date(baseStart);
        let liveEnd = new Date(baseEnd);

        const move = (ev) => {
          if (!dragging && Math.abs(ev.clientX - startX) >= threshold) dragging = true;
          if (!dragging) return;

          const cur = toDays(ev.clientX, originLeftScreen, timeline.scrollLeft);
          const delta = cur - startOffset;

          liveStart = new Date(baseStart); liveEnd = new Date(baseEnd);
          liveStart.setDate(liveStart.getDate() + delta);
          liveEnd.setDate(liveEnd.getDate() + delta);

          const newLeft = Math.max(0, daysBetween(fmt(minDate), fmt(liveStart))) * pxPerDay;
          const newWidth = Math.max(1, daysBetween(fmt(liveStart), fmt(liveEnd)) + 1) * pxPerDay;

          bar.style.left = `${newLeft}px`;
          bar.style.width = `${newWidth}px`;

          const tempItem = { ...it, start: fmt(liveStart), end: fmt(liveEnd) };
          label.innerHTML = buildBarLabelHTML(tempItem, newWidth);
          bar.title = `${tempItem.name} • ${tempItem.start} → ${tempItem.end}`;
        };

        const up = () => {
          if (dragging) {
            it.start = fmt(liveStart);
            it.end = fmt(liveEnd);
            render();
          }
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up, { once: true });
      };

      const onHandlePointerDown = (edge) => (downEvent) => {
        downEvent.stopPropagation();

        const { originLeftScreen, scrollX } = getOrigin();
        const startOffset = toDays(downEvent.clientX, originLeftScreen, scrollX);
        const baseStart = toDate(it.start);
        const baseEnd = toDate(it.end);
        let liveStart = new Date(baseStart);
        let liveEnd = new Date(baseEnd);

        const move = (ev) => {
          const cur = toDays(ev.clientX, originLeftScreen, timeline.scrollLeft);
          const delta = cur - startOffset;

          if (edge === "left") {
            const s = new Date(baseStart);
            s.setDate(s.getDate() + delta);
            if (s <= baseEnd) liveStart = s;
          } else {
            const e = new Date(baseEnd);
            e.setDate(e.getDate() + delta);
            if (e >= baseStart) liveEnd = e;
          }

          const newLeft = Math.max(0, daysBetween(fmt(minDate), fmt(liveStart))) * pxPerDay;
          const newWidth = Math.max(1, daysBetween(fmt(liveStart), fmt(liveEnd)) + 1) * pxPerDay;

          bar.style.left = `${newLeft}px`;
          bar.style.width = `${newWidth}px`;

          const tempItem = { ...it, start: fmt(liveStart), end: fmt(liveEnd) };
          label.innerHTML = buildBarLabelHTML(tempItem, newWidth);
          bar.title = `${tempItem.name} • ${tempItem.start} → ${tempItem.end}`;
        };

        const up = () => {
          it.start = fmt(liveStart);
          it.end = fmt(liveEnd);
          window.removeEventListener("pointermove", move);
          window.removeEventListener("pointerup", up);
          render();
        };

        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up, { once: true });
      };

      bar.onpointerdown = onBodyPointerDown;
      handleLeft.onpointerdown = onHandlePointerDown("left");
      handleRight.onpointerdown = onHandlePointerDown("right");

      bar.append(handleLeft, label, handleRight);
      laneEl.appendChild(bar);
    });

    lanesEl.appendChild(laneEl);
  });

  timeline.appendChild(lanesEl);
  root.appendChild(timeline);

  timeline.scrollLeft = lastTimelineScrollLeft;
  timeline.scrollTop = lastTimelineScrollTop;
  if (typeof lastWindowX === "number" && typeof lastWindowY === "number") window.scrollTo(lastWindowX, lastWindowY);

  const zoomSlider = document.getElementById("zoomSlider");
  document.getElementById("zoomIn").onclick = () => { pxPerDay = Math.min(40, pxPerDay + 2); zoomSlider.value = pxPerDay; render(); };
  document.getElementById("zoomOut").onclick = () => { pxPerDay = Math.max(6, pxPerDay - 2); zoomSlider.value = pxPerDay; render(); };
  zoomSlider.oninput = (e) => { pxPerDay = parseInt(e.target.value, 10); render(); };
  document.getElementById("showToday").onchange = (e) => { showTodayMarker = e.target.checked; render(); };
  document.getElementById("filterToday").onchange = (e) => { filterToday = e.target.checked; render(); };
}

render();
