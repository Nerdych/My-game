export const getAbsoluteCoordinates = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();

  const scrollTop = window.scrollY;
  const scrollLeft = window.scrollX;

  return {
    left: rect.left + scrollLeft,
    top: rect.top + scrollTop,
    right: rect.right + scrollLeft,
    bottom: rect.bottom + scrollTop,
  };
};
