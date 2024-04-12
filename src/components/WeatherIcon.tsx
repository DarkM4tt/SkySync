import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

type Props = {
  iconName: string;
};

export default function WeatherIcon(props: Props) {
  // Destructure props
  const { iconName, ...rest } = props;

  return (
    <div {...rest} className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
      />
    </div>
  );
}
