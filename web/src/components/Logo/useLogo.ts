export function useLogo() {
  /**
   * Returns ball color or win (-1) colors
   * @param index
   * @returns string
   */
  function logoStyle(index: number): string {
    switch (index) {
      case -1:
        return "bg-emerald-700";
      case 0:
        return "bg-blue-700";
      case 1:
        return "bg-red-700 animation-delay-300";
      case 2:
        return "bg-neutral-500 animation-delay-900";
      case 3:
        return "bg-emerald-700 animation-delay-1200";
      case 4:
        return "bg-orange-600 animation-delay-600";
      default:
        throw new Error("Error in Logo style");
    }
  }

  function logoStyleInner(index: number): string {
    switch (index) {
      case -1:
        return "from-emerald-100 via-emerald-400 to-emerald-700";
      case 0:
        return "from-blue-100 via-blue-400 to-blue-700";
      case 1:
        return "from-red-100 via-red-400 to-red-700";
      case 2:
        return "from-neutral-100 via-neutral-200 to-neutral-500";
      case 3:
        return "from-emerald-100 via-emerald-400 to-emerald-700";
      case 4:
        return "from-orange-100 via-orange-300 to-orange-600";
      default:
        throw new Error("Error in Logo inner style");
    }
  }

  return [logoStyle, logoStyleInner];
}
