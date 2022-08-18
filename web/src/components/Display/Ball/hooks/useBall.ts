import { Column } from "@np-bingo/types";

export function useBall(
  column: Column | "",
  remainder: number,
  disabled: boolean
) {
  const ballColumn = (disabled && "disabled") || column;

  /**
   *
   * @param column
   * @returns string
   */
  function background(): string {
    switch (ballColumn) {
      case "":
        return "bg-neutral-500";
      case "b":
        return "bg-blue-700";
      case "i":
        return "bg-red-700";
      case "n":
        return "bg-neutral-500";
      case "g":
        return "bg-emerald-700";
      case "o":
        return "bg-orange-600";
      case "disabled":
        return "opacity-50 bg-neutral-400 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-400 shadow-none border-neutral-400 bg-none";
      default:
        throw new Error("Error in Ball style");
    }
  }

  /**
   * Inner ball styles
   * @param column
   * @returns string
   */
  function gradient(): string {
    switch (ballColumn) {
      case "":
        return "from-neutral-100 via-neutral-200 dark:to-neutral-500";
      case "b":
        return "from-blue-100 via-blue-400 to-blue-700";
      case "i":
        return "from-red-100 via-red-400 to-red-700";
      case "n":
        return "from-neutral-100 via-neutral-200 to-neutral-500";
      case "g":
        return "from-emerald-100 via-emerald-400 to-emerald-700";
      case "o":
        return "from-orange-100 via-orange-300 to-orange-600";
      case "disabled":
        return "opacity-0 bg-none";
      default:
        throw new Error("Error in Ball inner style");
    }
  }

  /**
   * Returns percentage of total balls drawn
   * Used to offset badge background color
   * @returns number | undefined
   */
  const offset =
    remainder === 75 ? 0 : Math.round(((75 - remainder) * 100) / 75);

  return { offset, background, gradient };
}
