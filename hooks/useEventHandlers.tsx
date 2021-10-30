import { useEffect, useMemo } from "react";
import { Nullable } from "types";

export const useEventHandlers = (
  target: Nullable<EventTarget>,
  eventMap: Record<string, EventListener>,
  condition = true
) => {
  const events = useMemo(() => Object.entries(eventMap), [eventMap]);

  useEffect(() => {
    if (!target || !condition) return;
    events.forEach(([type, callback]) =>
      target.addEventListener(type, callback)
    );
    return () => {
      events.forEach(([type, callback]) =>
        target.removeEventListener(type, callback)
      );
    };
  }, [target, condition, events]);
};
