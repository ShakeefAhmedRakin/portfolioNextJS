import Logo from "../branding/logo";
import { Button } from "../ui/button";
import HeaderBackground from "../ui/header-background";
import { HeaderWrapper } from "../ui/wrappers";
import { Breadcrumbs } from "./breadcrumbs";
import { GetInTouchDialog } from "./get-in-touch-dialog";
import NavigationDesktop from "./navigation-desktop";
import NavigationMobile from "./navigation-mobile";

export default function SiteHeader() {
  return (
    <HeaderWrapper
      innerClassName="h-[95px] max-h-[95px] min-h-[95px]"
      wrapperClassName="fixed z-50 top-0 w-screen animate-fade-down animate-ease animate-delay-200 animate-duration-[1500ms] animate-once"
    >
      <HeaderBackground minScroll={95} />
      <div className="flex h-[70px] max-h-[70px] min-h-[70px] items-center justify-between pt-2">
        <Logo />
        <div className="flex items-center gap-4 lg:gap-8">
          <NavigationDesktop />
          <GetInTouchDialog>
            <Button size="lg" className="h-10 text-xs md:h-12 md:text-sm">
              Get In Touch
            </Button>
          </GetInTouchDialog>

          <NavigationMobile />
        </div>
      </div>
      <Breadcrumbs />
    </HeaderWrapper>
  );
}
