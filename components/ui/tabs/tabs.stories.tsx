import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './index';

const Templates = () => {
  return (
    <Tabs.Root defaultValue="1">
      <Tabs.List>
        <Tabs.Trigger value="1">item 1</Tabs.Trigger>
        <Tabs.Trigger value="2">item 2</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="1">content 1</Tabs.Content>
      <Tabs.Content value="2">content 2</Tabs.Content>
    </Tabs.Root>
  );
};

type Story = StoryObj<typeof Templates>;

export const Primary: Story = {
  render: () => <Templates />,
};

const meta: Meta<typeof Templates> = {
  component: Templates,
};

export default meta;
