import React from "react";
import Menu from "./menu";


export default function NavbarComponent() { 
    return (
      <div className="container absolute">
        <ul className="bg-teal-500 flex flex-wrap p-10 gap-3 font-dmSans text-white">
          <li>
            <button
              href="#"
              className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-sm p-1 hover:scale-110 hover:bg-teal-200 duration-300 "
            >
              Info
            </button>
          </li>
          <li>
            <button
              href="#"
              className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-sm p-1 hover:scale-110 hover:bg-teal-200 duration-300 "
            >
              Schedule
            </button>
          </li>
          <li>
            <button
              href="#"
              className="transition ease-in-out delay-150 hover:-translate-y-1 rounded-sm p-1 hover:scale-110 hover:bg-teal-200 duration-300 "
            >
              Contact
            </button>
            <li className="flex align-middle justify-end bg-teal-100"><Menu/></li>
          </li>
        </ul>

        <div className="flex flex-wrap bg-teal-200 relative ">

        </div>
      </div>
    );
}