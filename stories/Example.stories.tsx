import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Example } from "./Example";

export default {
    title: "Example",
    component: Example,
} as ComponentMeta<typeof Example>;

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Primary = Template.bind({});
