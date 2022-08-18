import { useEffect } from "react";
import { Story, Meta } from "@storybook/react";
import CircularProgress, { CircularProgressProps } from ".";
import { useProgress } from "../../../hooks/useProgress";

export default {
  title: "Feedback/Circular Progress",
  component: CircularProgress,
  decorators: [
    (Story) => (
      <div className="relative">
        <div className="relative flex h-20 w-20 items-center justify-center"></div>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<CircularProgressProps> = (args) => {
  const onProgressDone = () => {
    enableProgress();
  };
  const { progress, enableProgress, pauseProgress } = useProgress(
    undefined,
    onProgressDone
  );
  useEffect(() => {
    enableProgress();
    // return () => {
    //   pauseProgress();
    // };
  }, [enableProgress]);
  return (
    <CircularProgress
      className="absolute"
      progress={progress}
      {...args}
    ></CircularProgress>
  );
};

export const Base = Template.bind({});
