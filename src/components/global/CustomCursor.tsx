import React, { useCallback, useEffect, useRef,useState } from "react";

import { useEventListener } from "@/hooks/useEventListener";

import isDevice from "@/utils/isDevice";

const clickables = [
  "a",
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  "label[for]",
  "select",
  "textarea",
  "button",
  ".link",
  ".cursor-pointer",
  "label",
];
const size = 80;
const scale = 0.6;

function CursorCore() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.top = `${clientY}px`;
      cursorRef.current.style.left = `${clientX}px`;
    },
    []
  );

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove);
  useEventListener("mousedown", onMouseDown);
  useEventListener("mouseup", onMouseUp);
  useEventListener("mouseover", onMouseEnterViewport);
  useEventListener("mouseout", onMouseLeaveViewport);

  useEffect(() => {
    if (!cursorRef.current) return;
    if (isActive) {
      cursorRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
    } else {
      cursorRef.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }, [isActive]);

  useEffect(() => {
    if (!cursorRef.current) return;
    if (isActiveClickable) {
      cursorRef.current.style.transform = `translate(-50%, -50%) scale(${
        scale * 1.2
      })`;
    }
  }, [isActiveClickable]);

  useEffect(() => {
    if (!cursorRef.current) return;
    cursorRef.current.style.opacity = isVisible ? "1" : "0";
  }, [isVisible]);

  useEffect(() => {
    const clickableEls = document.querySelectorAll<HTMLElement>(
      clickables.join(",")
    );

    clickableEls.forEach((el) => {
      el.style.cursor = "none";

      el.addEventListener("mouseover", () => {
        setIsActive(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener("mousedown", () => {
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  const styles = {
    cursor: {
      zIndex: 999,
      display: "block",
      position: "fixed" as React.CSSProperties["position"],
      borderRadius: "50%",
      width: size,
      height: size,
      pointerEvents: "none" as React.CSSProperties["pointerEvents"],
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      backgroundColor: "#fff",
      mixBlendMode: "difference" as React.CSSProperties["mixBlendMode"],
    },
  };

  document.body.style.cursor = "none";

  return (
    <React.Fragment>
      <div ref={cursorRef} style={styles.cursor} />
    </React.Fragment>
  );
}

function AnimatedCursor() {
  if (typeof navigator !== "undefined" && isDevice?.any()) {
    return <React.Fragment></React.Fragment>;
  }
  return <CursorCore />;
}

export default AnimatedCursor;
