import Image from "next/image";
import Link from "next/link";
import { Menu, SliderMenu } from "..";
import { LoginBtn } from "@/components/atoms";
import { useContext } from "react";
import { AppContext, type AppContextType } from "@/context/AppContext";

export const Header = () => {
  const ctx = useContext(AppContext) as AppContextType;

  return (
    <nav className="header flex justify-center shadow-sm bg-white">
      <div className="flex items-center justify-between py-2 px-4 container">
        {/* Brand */}
        <Link href={"/"}>
          <Image
            src={"assets/images/logo-full.svg"}
            width={173}
            height={52}
            priority={false}
            alt="Logo"
          />
        </Link>

        {/* Rigt navigation */}
        <div className="hidden lg:block">
          {ctx.userData?.login === "octocat" ? <LoginBtn /> : <Menu />}
        </div>
        <SliderMenu />
      </div>
    </nav>
  );
};
