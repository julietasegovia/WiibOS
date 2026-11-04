import Clock from "./Clock";
import Orb from "./Orb";
import SDslot from "./SDslot";

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
          d="M0,0 C120,0 180,38 220,66 C260,125 740,125 780,66 C820,38 880,0 1000,0 V190 H0 Z"
          className="fill-wii-bar dark:fill-neutral-300"
        />
        <path
          d="M0,0 C120,0 180,38 220,66 C260,125 740,125 780,66 C820,38 880,0 1000,0"
          fill="none"
          className="stroke-[#60cdff] dark:stroke-[#60cdff]"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

        <a href="https://github.com/julietasegovia" target="_blank">
            <Orb side="left" label="Wii menu">
                Mii (Juli)
            </Orb>
        </a>
      <SDslot />
      <Clock />
      <a href="https://github.com/julietasegovia/wiimouse" target="_blank">
        <Orb side="right" label="Messages">
            WiiMote
        </Orb>
      </a>
    </footer>
  );
}