
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagramCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="bg-[#2f2f2f] h-[200px]">
        <div className="flex justify-center items-center h-full">
          <div>
          <h2 className="text-center font-dosis font-bold text-white">MyBooKSwap </h2>
          <p className="text-center font-dosis text-white my-4">My Book Service Provider 2023</p>
          <div className="flex justify-center items-center gap-4 my-6">
          <BiLogoFacebookCircle className=" border-[2px] border-white rounded-full hover:border-orange-400 cursor-pointer text-[30px] text-white"></BiLogoFacebookCircle>
          <AiFillTwitterCircle className=" border-[2px] border-white rounded-full hover:border-orange-400 cursor-pointer text-[30px] text-white"></AiFillTwitterCircle>
          <TiSocialInstagramCircular  className=" border-[2px] border-white rounded-full hover:border-orange-400 cursor-pointer text-[30px] text-white"></TiSocialInstagramCircular>
          </div>
          </div>
      
           </div>
        </div>
    );
};

export default Footer;