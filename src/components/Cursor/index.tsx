import { useRef, useEffect } from "react";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement | null>(null);

  const changePosition = (e: MouseEvent) => {
    if (cursor.current) {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", changePosition);
    return () => {
      document.removeEventListener("mousemove", changePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[100] h-10 w-10 origin-[100%_100%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary bg-blue/30"
      ref={cursor}
    ></div>
  );
};

export default Cursor;
