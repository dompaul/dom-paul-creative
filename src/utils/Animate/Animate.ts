export const animate = (
  element: React.MutableRefObject<HTMLUListElement>,
  value: string = '0',
) => (element.current.style.transform = `translateX(${value})`);

export const isActive = (
  itemsPerSlide: number,
  slideIndex: number,
  index: number,
) =>
  index <= itemsPerSlide
    ? true
    : index <= slideIndex && index >= slideIndex - itemsPerSlide
    ? true
    : false;
