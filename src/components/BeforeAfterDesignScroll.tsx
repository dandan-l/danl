import imgOldEfmfHomePageBeforeLogin from "figma:asset/73e3173236b468c3eb096e203cb15331108fdc4a.png";
import imgOldEfmfHomePageAfterLogin from "figma:asset/071d0e577fa418acd358b5de54fc434aa3501245.png";
import imgOldEfmfCartPage from "figma:asset/d1c1e464e996db6574f5f201f46c63e85998cacb.png";
import imgOldEfmfOrderReviewPage from "figma:asset/0afa29c5858e4ee9a35c7e332966e4a0cb823bde.png";
import imgOldEfmfSignUpSuccessPage from "figma:asset/39cf82331f03a8c4b023a18a3ba6e82db0d39f84.png";
import imgDesignSystemShowcaseImg from "figma:asset/f518db6d25e7df170a6773d6216604eae2ecc187.png";

export function BeforeAfterDesignScroll() {
  return (
    <div className="relative w-full my-8 md:my-12">
      {/* Horizontal scroll container - full width with left padding */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-x-auto overflow-y-hidden pb-4 scroll-smooth">
        <div className="flex gap-6 md:gap-10 min-w-max pl-[var(--container-padding)]">
          {/* After Design - New Design System Showcase */}
          <div className="flex-shrink-0 w-[calc(100vw-var(--container-padding)-8rem)] md:w-[calc(100vw-var(--container-padding)-12rem)] lg:w-[1180px]">
            <div className="h-[400px] md:h-[772px] relative rounded-lg overflow-hidden shadow-lg">
              <img
                alt="New design system showcase"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={imgDesignSystemShowcaseImg}
              />
            </div>
          </div>

          {/* Before Design Section - Old Designs */}
          <div className="flex-shrink-0 w-[90vw] md:w-[1400px]">
            <div className="bg-[#f9f8f7] border border-[#e6e3df] rounded-lg p-4 md:p-6 h-[400px] md:h-[772px] overflow-hidden">
              <div className="flex flex-col gap-4 h-full">
                <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-primary)] tracking-[-0.3px]">
                  Before my design
                </p>

                {/* Horizontal scrolling old designs */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden">
                  <div className="flex gap-4 h-full pb-2">
                    <div className="relative rounded-lg shadow-lg flex-shrink-0 h-full aspect-[800/687]">
                      <img
                        alt="Old EFMF home page before login"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        src={imgOldEfmfHomePageBeforeLogin}
                      />
                    </div>
                    <div className="relative rounded-lg shadow-lg flex-shrink-0 h-full aspect-[800/687]">
                      <img
                        alt="Old EFMF home page after login"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        src={imgOldEfmfHomePageAfterLogin}
                      />
                    </div>
                    <div className="relative rounded-lg shadow-lg flex-shrink-0 h-full aspect-[800/709]">
                      <img
                        alt="Old EFMF cart page"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        src={imgOldEfmfCartPage}
                      />
                    </div>
                    <div className="relative rounded-lg shadow-lg flex-shrink-0 h-full aspect-[800/575]">
                      <img
                        alt="Old EFMF order review page"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        src={imgOldEfmfOrderReviewPage}
                      />
                    </div>
                    <div className="relative rounded-lg shadow-lg flex-shrink-0 h-full aspect-[800/491]">
                      <img
                        alt="Old EFMF signup success page"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        src={imgOldEfmfSignUpSuccessPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-2 h-2 rounded-full bg-[var(--color-accent-teal)]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
