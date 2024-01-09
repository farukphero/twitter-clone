import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        p-4
        flex 
        items-center 
        justify-start 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <BsTwitter size={28} color="white" />
      <h1 className="text-sky-500 text-2xl px-2 font-bold hidden lg:flex">Twitter</h1>
    </div>
  );
};

export default SidebarLogo;
