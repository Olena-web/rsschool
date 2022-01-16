// function getCenterElement(element: HTMLElement) {
//   const { top, left, width, height } = element.getBoundingClientRect();
//   return {
//     x: left + width / 2,
//     y: top + height / 2,
//   };
// }

// export function getDistanceBetweenElements(a: HTMLElement, b: HTMLElement) {
//   const aPosition = getCenterElement(a);
//   const bPosition = getCenterElement(b);

//   return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
// }

export function animation(car: HTMLDivElement, distance: number, animationTime: number) {
  let start = 0;
  const state = {
    id: 0,
  };
  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));

    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
}
