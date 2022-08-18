import clsx from "clsx";

type Alerts = "success" | "caution" | "failure" | "none";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  status: Alerts;
}
// TODO Alert.stories
export default function Alert({
  status = "success",
  className,
  ...props
}: AlertProps) {
  const alertStyle = () => {
    switch (status) {
      case "success":
        return "bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-400 text-white";
      case "caution":
        return "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-400 text-black";
      case "failure":
        return "bg-red-500 hover:bg-red-600 active:bg-red-400 text-white";
      default:
        return "";
    }
  };
  return (
    <div
      className={clsx("h-2 w-2 rounded-full", alertStyle(), className)}
      {...props}
    />
  );
}
