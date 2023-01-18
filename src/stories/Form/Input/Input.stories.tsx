import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./Input";

export default {
  title: "Form/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Input",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Input",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Input",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Input",
};
