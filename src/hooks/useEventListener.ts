import { useEffect, useRef } from "react";

export function useEventListener(
  eventName: string,
  handler: (e: any) => void,
  element = window
) {
  const savedHandler = useRef<(e: any) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event: any) =>
      savedHandler.current && savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
