export default function SDslot() {
    return(
        <button aria-label="SD Card" className="bg-[#72B2F2] absolute bottom-[15%] left-[12vw] flex h-16 w-11 flex-col items-center justify-between rounded-sm border-2 border-[#00a0e9] pb-1 pt-2 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_2px_4px_rgba(0,0,0,0.15),0_0_0_3px_rgba(255,255,255,0.5)] active:scale-95 transition-transform cursor-default">
            <div className="flex w-[80%] flex-col items-center justify-center rounded-sm border border-[#b0b4b8] bg-[#e6e8eb] py-1">
                <div className="flex items-baseline font-sans font-black italic tracking-tighter text-[#00a0e9] leading-none">
                    <span className="text-[14px]">S</span>
                    <span className="text-[11px] translate-y-[1px]">D</span>
                </div>
            </div>
            <div className="h-[4px] w-[80%] rounded-full bg-[#00a0e9]"></div>
        </button>
    );
}