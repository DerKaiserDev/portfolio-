import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const isHover = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [data-hover]')) {
        if (!isHover.current) {
          isHover.current = true;
          dot.style.width = '20px';
          dot.style.height = '20px';
          dot.style.backgroundColor = '#22d3ee';
          dot.style.opacity = '0.8';
        }
      }
    };

    const onOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [data-hover]')) {
        isHover.current = false;
        dot.style.width = '8px';
        dot.style.height = '8px';
        dot.style.backgroundColor = 'white';
        dot.style.opacity = '0.9';
      }
    };

    const onLeave = () => {
      dot.style.opacity = '0';
    };

    const onEnter = () => {
      dot.style.opacity = isHover.current ? '0.8' : '0.9';
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      style={{
        width: '8px',
        height: '8px',
        backgroundColor: 'white',
        opacity: 0.9,
        transform: 'translate(-100px, -100px) translate(-50%, -50%)',
        transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease, opacity 0.15s ease',
        willChange: 'transform',
      }}
    />
  );
}
