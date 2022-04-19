import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src="https://lh3.googleusercontent.com/a-/AOh14GiX08tHI1McvPXDHUJaUxI_co0si9Eu6VeFhmc8Wg=s288-p-rw-no"
        alt="Onoriode Ufuoma"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        <span className="text-green">Onoriode </span>
        Ufuoma
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300">
        Software Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-300"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-300"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          {/* location icon */}
          <GoLocation />
          <span>Abuja, Nigeria</span>
        </div>
        <p className="my-2">onoriodeud@gmail.com</p>
        <p className="my-2">+234 703 084 8696</p>
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:onoriodeud@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle theme
      </button>
    </>
  );
};

export default Sidebar;
