import ChannelGrid from "./components/ChannelGrid.jsx";
import BottomBar from "./components/BottomBar.jsx";
import { CHANNELS } from "./data/channels.js";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
  <div className="flex h-full flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <ChannelGrid channels={CHANNELS} />
    </div>
  <BottomBar />
</div>
  );
}
