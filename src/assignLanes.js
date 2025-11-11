/**
 * @param {Array<{id:number,start:string,end:string,name:string}>} items
 * @param {{ labelBufferDays?: number }} options
 * @returns {Array<Array<any>>}
 */
export function assignLanes(items, { labelBufferDays = 0.35 } = {}) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );
  const lanes = [];

  function canPlace(lane, item) {
    const last = lane[lane.length - 1];
    const bufferedEnd = new Date(
      new Date(last.end).getTime() + labelBufferDays * 24 * 3600 * 1000
    );
    return bufferedEnd < new Date(item.start);
  }

  for (const item of sortedItems) {
    let placed = false;
    for (const lane of lanes) {
      if (canPlace(lane, item)) {
        lane.push(item);
        placed = true;
        break;
      }
    }
    if (!placed) lanes.push([item]);
  }
  return lanes;
}
