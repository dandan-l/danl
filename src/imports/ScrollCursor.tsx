import svgPaths from "./svg-6iunnnbsct";

export default function ScrollCursor() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="scrollCursor">
      <div className="h-[18.631px] relative shrink-0 w-[38.154px]" data-name="scrollCursor">
        <div className="absolute bottom-0 left-[24.01%] right-[21.62%] top-0">
          <div className="absolute inset-[-5.37%_-4.82%_-5.37%_-4.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 21">
              <path d={svgPaths.p4259a2c} id="Vector 213" stroke="var(--stroke-0, #9E185B)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] flex items-center justify-center left-0 right-[83.37%] top-[27%]">
          <div className="flex-none h-[7.326px] rotate-[11.34deg] w-[5.002px]">
            <div className="relative size-full">
              <div className="absolute inset-[-13.65%_-20%_-13.65%_-19.99%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
                  <path d={svgPaths.p30469100} id="Vector 214" stroke="var(--stroke-0, #9E185B)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[32.24%] flex items-center justify-center left-[90.11%] right-0 top-[28.4%]">
          <div className="flex-none h-[7.176px] rotate-[357.228deg] w-[3.43px]">
            <div className="relative size-full">
              <div className="absolute inset-[-13.94%_-29.16%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
                  <path d={svgPaths.p166b3980} id="Vector 215" stroke="var(--stroke-0, #9E185B)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[16px] text-[#9E185B] text-nowrap tracking-[-0.2px] whitespace-pre">scroll to the right</p>
    </div>
  );
}