import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITypographyProps, Typography } from "./Typography";

export default {
  title: "Typography/Fonts",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <div>
    <i className="text-4">{args.variant}</i>
    <hr className="my-3" />
    <Typography {...args} />
  </div>
);

export const Display1: { args: ITypographyProps } = Template.bind({});
Display1.args = {
  children: "Lorem ipsum dolor sit",
  variant: "display1",
};

export const Display2: { args: ITypographyProps } = Template.bind({});
Display2.args = {
  children: "Lorem ipsum dolor sit",
  variant: "display2",
};

export const Heading1: { args: ITypographyProps } = Template.bind({});
Heading1.args = {
  children: "Lorem ipsum dolor sit",
  variant: "heading1",
};

export const Heading2: { args: ITypographyProps } = Template.bind({});
Heading2.args = {
  children: "Lorem ipsum dolor sit",
  variant: "heading2",
};

export const Heading3: { args: ITypographyProps } = Template.bind({});
Heading3.args = {
  children: "Lorem ipsum dolor sit",
  variant: "heading3",
};

export const HeadingRegular: { args: ITypographyProps } = Template.bind({});
HeadingRegular.args = {
  children: "Lorem ipsum dolor sit",
  variant: "headingRegular",
};

export const HeadingSubtitle: { args: ITypographyProps } = Template.bind({});
HeadingSubtitle.args = {
  children: "Lorem ipsum dolor sit",
  variant: "headingSubtitle",
};

export const BodyBig: { args: ITypographyProps } = Template.bind({});
BodyBig.args = {
  children: "Lorem ipsum dolor sit",
  variant: "bodyBig",
};

export const BodyNormal: { args: ITypographyProps } = Template.bind({});
BodyNormal.args = {
  children: "Lorem ipsum dolor sit",
  variant: "bodyNormal",
};

export const BodyParagraph: { args: ITypographyProps } = Template.bind({});
BodyParagraph.args = {
  children: "Lorem ipsum dolor sit",
  variant: "bodyParagraph",
};

export const BodySmall: { args: ITypographyProps } = Template.bind({});
BodySmall.args = {
  children: "Lorem ipsum dolor sit",
  variant: "bodySmall",
};

export const AllCaps: { args: ITypographyProps } = Template.bind({});
AllCaps.args = {
  children: "Lorem ipsum dolor sit",
  variant: "allCaps",
};

export const Caption: { args: ITypographyProps } = Template.bind({});
Caption.args = {
  children: "Lorem ipsum dolor sit",
  variant: "caption",
};
