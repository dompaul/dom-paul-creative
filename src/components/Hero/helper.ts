export const onScroll = (
  videoRef: React.MutableRefObject<HTMLVideoElement>
) => {
  const { pageYOffset } = window;
  if (pageYOffset === 0) {
    videoRef.current.play();
    return;
  }
  videoRef.current.pause();
  return;
};
