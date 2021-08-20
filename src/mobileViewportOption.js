export const mobileViewport = () => {
  return window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.1;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};
