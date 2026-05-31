import { useReveal } from "../hooks/userReveal";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}ms,
                     transform 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}