import React, { useContext } from "react";
import clsx from "clsx";
import Background from "../../Surfaces/Background";
import Container from "../Container";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { ToastContainer, Zoom } from "react-toastify";

export function Wrapper({
  children,
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative flex min-h-screen items-end justify-end overflow-hidden p-10">
      <div
        id="App"
        className={clsx("relative flex items-center justify-center", theme)}
      >
        <Container>
          <Background />
          {children}
          {/* <Background variant="top" /> */}
        </Container>
        <Background variant="phone" />
        <ToastContainer
          position="bottom-left"
          newestOnTop={true}
          transition={Zoom}
          theme={theme}
          limit={3}
          className="m-2"
          toastClassName={() =>
            "bg-gray-100 dark:bg-gray-700 text-black dark:text-white text-opacity-90 dark:text-opacity-90 leading-none relative flex p-2 mb-4 box-border min-h-[4rem] max-h-[50rem] rounded shadow-xl justify-between overflow-hidden cursor-pointer"
          }
        />
      </div>
    </div>
  );
}
