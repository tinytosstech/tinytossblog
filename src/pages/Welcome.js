import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useLayoutEffect } from "react";



function Welcome() {
useLayoutEffect(() => {
  window.scrollTo(0, 0)
});

  return (
    <div className="Welcome ">
      <div className="mt-[8px] w-[100%]  ml-[8px] flex max-lg:flex-col max-lg:justify-center max-lg:items-center relative group max-lg:mx-0">
        <div className=" h-[80vh] w-[47.7vw]  rounded-md hover:scale-[0.98] transition duration-300 ease-in-out  max-lg:h-[60vw] max-lg:w-[95vw] ">
          <LazyLoadImage
            className=" h-[80vh] w-[47.7vw] rounded-md max-lg:h-[60vw] max-lg:w-[95vw]"
            src="https://media0.giphy.com/media/a5viI92PAF89q/200w.webp?cid=ecf05e47ubrqng0x8ixusg8fg9yzswq7uf2mzd7650ai8u7s&rid=200w.webp&ct=g"
            alt="Img"
            effect="blur"
            placeholderSrc="https://media0.giphy.com/media/a5viI92PAF89q/200w.webp?cid=ecf05e47ubrqng0x8ixusg8fg9yzswq7uf2mzd7650ai8u7s&rid=200w.webp&ct=g"
          />
        </div>
        <div className=" h-[80vh] w-[50.7vw]  ml-[8px] rounded-md flex flex-col justify-center items-center max-lg:h-[100%] max-lg:w-[100%] max-lg:my-5">
          <div className=" text-6xl transition hover:-translate-y-3 duration-300 hover:scale-1 max-lg:text-4xl">
            Tinytoss Design
          </div>
          <div className="mt-[10px]">💻 ยินดีต้อนรับงับ 💾</div>
          <div className="flex mt-[14px]">
            <Link to="/Blog">
              <div className="ring-2 ring-slate-200 p-2 rounded hover:ring-slate-800 duration-300">
                BLOG
              </div>
            </Link>
            <a href="https://www.youtube.com/channel/UCeGLCL7ujJoSMJ8kdHf2wAg">
              <div className="ring-2 ring-slate-200 p-2 mx-5 rounded hover:ring-slate-800 duration-300">
                YOUTUBE
              </div>
            </a>
            <a href="https://github.com/tinytosstech?tab=repositories">
              <div className="ring-2 ring-slate-200 p-2 rounded hover:ring-slate-800 duration-300">
                GITHUB
              </div>
            </a>
          </div>
        </div>
        <span className ="right-[50px] top-[30px] animate-ping absolute h-5 w-5 rounded-full bg-slate-400 opacity-100 max-lg:bg-slate-100 max-lg:opacity-0 max-lg:animate-none"></span>
        <span className ="right-[50px] top-[30px] absolute rounded-full h-5 w-5 bg-slate-500 max-lg:bg-slate-200 max-lg:right-[30px] max-lg:top-[20px] max-lg:opacity-0"></span>
      </div>

      {/* 4 block */}
      <div className="w-[96%] h-[100%] ml-[8px] mt-[8px] flex flex-nowrap gap-2 max-lg:grid max-lg:grid-cols-2">
        <div className="hover:scale-95 transition duration-300 ">
        <LazyLoadImage
          className=" h-[24.1vw] w-[24.1vw] rounded-md max-lg:w-[100vw] max-lg:h-[45vw] "
          src="https://media3.giphy.com/media/MdA16VIoXKKxNE8Stk/200w.webp?cid=ecf05e47xibvee67nso62aqun7jyavsezg47gz8fodacdwoz&rid=200w.webp&ct=g"
          alt="Img" 
          effect="blur"
          placeholderSrc="https://media3.giphy.com/media/MdA16VIoXKKxNE8Stk/200w.webp?cid=ecf05e47xibvee67nso62aqun7jyavsezg47gz8fodacdwoz&rid=200w.webp&ct=g"
        />
        </div>
        <div className="hover:scale-95 transition duration-300 ">
        <LazyLoadImage
          className=" h-[24.1vw] w-[24.1vw] rounded-md max-lg:w-[100vw] max-lg:h-[45vw]"
          src="https://media2.giphy.com/media/kaq6GnxDlJaBq/giphy.webp?cid=ecf05e4754skkps7ntg4yrr09ptoyccfm0k5tp57k14m0xgw&rid=giphy.webp&ct=g"
          alt="Img"
          effect="blur"
          placeholderSrc="https://media2.giphy.com/media/kaq6GnxDlJaBq/giphy.webp?cid=ecf05e4754skkps7ntg4yrr09ptoyccfm0k5tp57k14m0xgw&rid=giphy.webp&ct=g"
        />
        </div>
        <div className="hover:scale-95 transition duration-300 ">
        <LazyLoadImage
          className=" h-[24.1vw] w-[24.1vw] rounded-md max-lg:w-[100vw] max-lg:h-[45vw]"
          src="https://media4.giphy.com/media/vrxxqQbyRxYi6scCjT/200.webp?cid=ecf05e47wnwl5uib3nmio54dniazltlws5nmcwqjs3dzu43i&rid=200.webp&ct=g"
          alt="Img"
          effect="blur"
          placeholderSrc="https://media4.giphy.com/media/vrxxqQbyRxYi6scCjT/200.webp?cid=ecf05e47wnwl5uib3nmio54dniazltlws5nmcwqjs3dzu43i&rid=200.webp&ct=g"
        />
        </div>
        <div className="hover:scale-95 transition duration-300 ">
        <LazyLoadImage
          className=" h-[24.1vw] w-[24.1vw] rounded-md max-lg:w-[80vw] max-lg:h-[45vw]"
          src="https://media4.giphy.com/media/c4u2gld3Or69i/200w.webp?cid=ecf05e47xibvee67nso62aqun7jyavsezg47gz8fodacdwoz&rid=200w.webp&ct=g"
          alt="Img"
          effect="blur"
          placeholderSrc="https://media4.giphy.com/media/c4u2gld3Or69i/200w.webp?cid=ecf05e47xibvee67nso62aqun7jyavsezg47gz8fodacdwoz&rid=200w.webp&ct=g"
        />
        </div>
      </div>
      <Navbar></Navbar>
      
    </div>
  );
}

export default Welcome;
