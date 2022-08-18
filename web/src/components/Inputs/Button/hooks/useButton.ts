import { MouseEvent } from "react";
import { ButtonVariant } from "..";
import { useClickHard } from "../../../../hooks/useClickHard";

export function useButton(
  variant: ButtonVariant,
  handleSetCoordinates: (event: MouseEvent<HTMLButtonElement>) => void
) {
  const clickHardSfx = useClickHard();

  /**
   * Button style based on variant or disabled
   * @param variant
   * @returns string
   */
  const buttonStyle = (): string => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 dark:bg-blue-300 dark:hover:bg-blue-400 text-white dark:text-black text-opacity-90 dark:text-opacity-90 hover:shadow-xl disabled:bg-neutral-400 dark:disabled:bg-neutral-700";
      case "success":
        return "bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-300 dark:hover:bg-emerald-400 text-white dark:text-black text-opacity-90 dark:text-opacity-90 hover:shadow-xl disabled:bg-neutral-400 dark:disabled:bg-neutral-700";
      default:
        return "text-blue-600 dark:text-blue-300 hover:text-white dark:hover:text-black hover:text-opacity-90 dark:hover:text-opacity-90 hover:bg-blue-700 dark:hover:bg-blue-400 hover:shadow-xl";
    }
  };

  /**
   * Mouse Down handler
   * @param event
   */
  const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    clickHardSfx();
    handleSetCoordinates(event);
  };

  return {
    buttonStyle,
    handleMouseDown,
  };
}
