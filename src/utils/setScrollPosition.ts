export function setScrollPosition(parent: HTMLElement, target: HTMLElement) {
  const rect0 = parent.getBoundingClientRect();
  const rect1 = target.getBoundingClientRect();
  const { scrollTop } = parent;

  const y0 = rect0.top;
  const y1 = y0 + rect0.height;
  const y2 = rect1.top;
  const y3 = y2 + rect1.height;

  if (y2 < y0) {
    // eslint-disable-next-line no-param-reassign
    parent.scrollTop = scrollTop + y2 - y0 - 1;
  }

  if (y1 < y3) {
    // eslint-disable-next-line no-param-reassign
    parent.scrollTop = scrollTop + y3 - y1 + 1;
  }
}
