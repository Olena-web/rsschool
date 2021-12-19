export function addEventListener<T extends EventTarget, E extends Event>(
  element: T,
  type: string,
  handler: (this: T, evt: E) => void
) {
  element.addEventListener(type, handler as (evt: Event) => void);
}
