import { BadgeColors } from "..";

export function useBadge(
  color: BadgeColors,
  currentOffset: number,
  disabled: boolean
) {
  const style = (disabled && "disabled") || color;

  function backgroundColor(): string {
    switch (style) {
      case "disabled":
        return "bg-neutral-500 dark:bg-neutral-600 text-white";
      case "blue":
        return "bg-blue-bingo hover:bg-blue-900 active:bg-blue-800 text-white";
      case "gray":
        return "bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-600 text-white";
      case "gradient":
        return "bg-gradient-linear bg-oversized text-white";
      case "stepped":
        if (offset < 42)
          return "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-500 text-white";
        if (offset < 69)
          return "bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-500 text-black";
        return "bg-red-600 hover:bg-red-700 active:bg-red-500 text-white";
      default:
        throw new Error("Error in Badge background color");
    }
  }

  const offset = (disabled && -1) || currentOffset;

  const alert = () => {
    if (offset <= 0) return "";
    if (offset < 42)
      return "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-400 text-white";
    if (offset < 69)
      return "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-400 text-black";
    return "bg-red-500 hover:bg-red-600 active:bg-red-400 text-white";
  };

  return [backgroundColor, alert];
}
