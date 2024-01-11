import Image from "next/image";
import Frame from "@/public/Frame.png";
const Header = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-[1330px] flex items-center justify-between">
        <div className="flex">
          <Image src={Frame} width={28} height={28} alt="logo" />
          <h1 className="text-[20px] font-Sora">E-REKSHA®</h1>
        </div>
        <div className="w-[378px] flex  justify-between font-Sora">
          <h3>Home</h3>
          <h3>Info</h3>
          <h3>Features</h3>
          <h3>Specs</h3>
          <h3>FAQs</h3>
        </div>
        <button className="font-Sora leading-[24px] px-[20px] bg-black py-2 rounded-[60px]">
          Order now
        </button>
      </div>
    </div>
  );
};

export default Header;
