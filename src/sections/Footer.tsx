import Image from "next/image";
import Logo from "@/assets/logo.png";
import LogoText from "@/assets/logo_text.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="flex items-center justify-center pr-7">
          <Image src={Logo} alt="Saas Logo" height={80} width={80} />
          <Image src={LogoText} alt="Saas Text" height={34} width={181} />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Customers</a>
        </nav>
        {/* <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div> */}
        <p className="mt-6">&copy; Feldstern, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
