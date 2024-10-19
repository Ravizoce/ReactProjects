import React from "react";
import { useState } from "react";

function BackgroundChanger() {

    let [background, setBackground] = useState("bg-lime-600");

    const colors = [
      {
        name: "Red",
        background: "bg-red-700",
        text: "text-white"
      },
      {
        name: "Blue",
        background: "bg-blue-700",
        text: "text-white"
      },
      {
        name: "Yellow",
        background: "bg-yellow-500",
        text: "text-black"
      },
      {
        name: "Orange",
        background: "bg-orange-600",
        text: "text-white"
      },
      {
        name: "Pink",
        background: "bg-pink-700",
        text: "text-white"
      },
      {
        name: "Green",
        background: "bg-green-700",
        text: "text-white"
      },
      {
        name: "black",
        background: "bg-black",
        text: "text-white"
      },
      {
        name: "white",
        background: "bg-white",
        text: "text-black"
      },
    ]
  
    const changeColor = (colorName) => {
      console.log(colorName);
      setBackground(colorName);
    }

  return (
    <div className={`w-full h-screen  flex flex-col justify-end items-center align-middle ${background}`}>
      <div className='flex justify-between w-fit p-2 bg-gray-400 rounded-md mb-20'>
        {
          colors.map((color, index) => (

            <button onClick={()=>changeColor(color.background)} key={index} className={"p-1 m-1 mr-3 ml-3 pr-4 pl-4 rounded-md " + `${color.text} ${color.background}`}> {color.name} </button>
          ))
        }
      </div>
    </div>
  )
}

export default BackgroundChanger;
