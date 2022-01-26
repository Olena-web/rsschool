let start = 0;
const state = {
  id: 0,
};
export function animation(car: HTMLDivElement, distance: number, animationTime: number) {
  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const passed = Math.round(time * (distance / animationTime));
    car.setAttribute('style', 'transition: cubic-bezier(0.445, 0.05, 0.55, 0.95)');
    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
    }
  }
  state.id = window.requestAnimationFrame(step);
  return state;
}

export function cancelAnimation() {
  cancelAnimationFrame(state.id);
}
