interface WaveDividerProps {
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({ flip = false, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-16"
        preserveAspectRatio="none"
      >
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill="currentColor"
          className="animate-wave"
        />
        <path
          d="M0 50C360 90 720 10 1080 50C1260 70 1380 30 1440 50V80H0V50Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
