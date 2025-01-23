import "./titleAnimation.css";

export default function AnimatedTitle({
  text,
  delay,
  startDelay,
  className,
}: {
  text: string;
  delay: number;
  startDelay: number;
  className: string;
}) {
  return (
    <h1 className={className}>
      {text.split("").map((char: string, index: number) => (
        <span
          key={index}
          className="animated-letter"
          style={{ animationDelay: `${startDelay + index * delay}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
