export interface BackgroundProps {
  variant?: "default" | "phone" | "top";
}
export default function Background({ variant = "default" }: BackgroundProps) {
  if (variant === "phone")
    return (
      <div className="background absolute h-[106%] w-[106%] bg-iphone bg-contain bg-center bg-no-repeat"></div>
    );
  if (variant === "top")
    return (
      <div className="background absolute left-0 z-20 -translate-x-7 -translate-y-px transform bg-iphone-top bg-contain bg-center bg-no-repeat sm:h-8 sm:w-[26.875rem]"></div>
    );
  return (
    <div className="background absolute left-0 top-0 h-full w-full bg-bingo-light bg-cover bg-bottom bg-no-repeat dark:bg-bingo-dark sm:rounded-[2.375rem]"></div>
  );
}
