"use client"
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrossel(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider  {...settings} className="w-[900px] h-80 ">
      <div className="">
        <div className="grid grid-cols-2 rounded-2xl h-80 w-[900px] bg-white bg-opacity-5">
          <div></div>
          <div className="flex flex-col p-5 text-white gap-10">
            <h2 className="">Site</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates a modi ipsum beatae obcaecati ullam, distinctio sapiente nemo quasi. Alias tempore cumque eum nostrum eius, quo nemo explicabo deleniti odit.</p>
            <a href='' className="relative group">
          <button className='rounded-3xl text-white py-2 px-5 bg-azul hover:bg-gradient-to-r from-azul to-prata hover:px-12 clip  transition-all duration-500 hover:text-sky-950'>
            Visitar
          </button>
        </a>
          </div>
        </div>
      </div>
      <div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div><div>
        <div className=" rounded-2xl h-80 w-[500px] bg-white bg opacity-10">

        </div>
      </div>
    </Slider>
  );
}