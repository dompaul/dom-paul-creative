export const onScroll = (
  setScrollTop: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { pageYOffset } = window;
  if (pageYOffset === 0) {
    setScrollTop(true);
    document.body.classList.remove("scrolling");
    return;
  }
  setScrollTop(false);
  document.body.classList.add("scrolling");
  return;
};
