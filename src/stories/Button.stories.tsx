import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../components/Button";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      defaultValue: "Button",
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Primary",
  backgroundColor: "lightblue",
  color: "white",
  border: "1px solid red",
  padding: "20px",
};

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
  backgroundColor: "lightgreen",
  color: "black",
  border: "1px solid blue",
  borderRadius: "25px",
  padding: "10px",
};
