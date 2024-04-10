"use client";

import React, { useState } from "react";
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from "./SearchBox";
import axios from "axios";

type Props = {};

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY;

export default function Navbar({}: Props) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = async (value: string) => {
    setCity(value);
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
        );
        const suggestions = response.data.list.map((item: any) => item.name);
        setSuggestions(suggestions);
        setError("");
        setShowSuggestions(true);
      } catch (error) {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">SkySync</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </p>

        <section className="flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-slate-900/80 text-sm">India</p>
          <div className="">
            <SearchBox
              value={city}
              // onSubmit={}
              onChange={(e) => handleInputChange(e.target.value)}
            />
          </div>
        </section>
      </div>
    </nav>
  );
}
