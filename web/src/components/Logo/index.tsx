import React from "react";
import clsx from "clsx";
import { letters } from "../../utils/bingo";
import { useLogo } from "./useLogo";

export interface LogoProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  home?: boolean;
  winner?: boolean;
}

export default function Logo({
  home = false,
  winner,
  ...props
}: LogoProps): JSX.Element {
  const [logoStyle, logoStyleInner] = useLogo();
  return (
    <div
      className={clsx(
        "flex",
        home ? "justify-center -space-x-4" : "justify-around"
      )}
      {...props}
    >
      {letters.map((item, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "relative flex select-none items-center justify-center rounded-full text-center font-sans font-bold uppercase text-black text-opacity-90",
              !winner ? logoStyle(index) : logoStyle(-1),
              home
                ? "h-[4.6875rem] w-[4.6875rem] animate-bounce text-4xl shadow-md"
                : "h-[3.125rem] w-[3.125rem] text-3xl"
            )}
          >
            <div className="absolute h-full w-full overflow-hidden rounded-full">
              <div
                className={clsx(
                  "h-[97%] w-[97%] rounded-full bg-gradient-radial blur-[0.375rem] filter",
                  !winner ? logoStyleInner(index) : logoStyleInner(-1)
                )}
              ></div>
            </div>
            <div className="relative z-10">{item}</div>
          </div>
        );
      })}
    </div>
  );
}
