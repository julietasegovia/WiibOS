import Clock from "./Clock";
import Orb from "./Orb";

export default function BottomBar() {
  return (
    <footer className="relative mt-auto h-48 w-full shrink-0 pb-6">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 190"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,-20 C120,-20 180,38 220,66 C260,115 740,115 780,66 C820,38 880,-20 1000,-20 V190 H0 Z"
          className="fill-wii-bar stroke-wii-blue dark:fill-neutral-300"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Orb side="left" label="Wii menu">
        Wii
      </Orb>
      <Clock />
      <Orb side="right" label="Messages">
        ✉
      </Orb>
    </footer>
  );
}