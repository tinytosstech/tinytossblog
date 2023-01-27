import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex mb-[28px] mt-[8px] justify-between font-light">
      <Link to="/">
        <div className="ml-[50px] duration-300 hover:translate-x-2 ">
          Tinytoss
        </div>
      </Link>
      <ul className="flex  mr-[50px] ">
        <Link to="/Blog">
          <li className="mr-2 transition duration-300 ease-in-out hover:text-white hover:bg-black hover:translate-y-1 rounded px-2">
            Blog
          </li>
        </Link>
        <a href="https://www.youtube.com/channel/UCeGLCL7ujJoSMJ8kdHf2wAg">
          <li className="mr-2 transition duration-300 ease-in-out hover:text-white hover:bg-black hover:translate-y-1 rounded px-2">
            Youtube
          </li>
        </a>
        <a href="https://github.com/tinytosstech?tab=repositories">
          <li className="transition duration-300 ease-in-out hover:text-white hover:bg-black hover:translate-y-1 rounded px-2">
            Github
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
