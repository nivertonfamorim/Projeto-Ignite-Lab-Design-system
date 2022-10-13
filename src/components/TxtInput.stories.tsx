import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react'
import { TxtInput, TxtInputRootProps } from './TxtInput';

export default {
  title: 'Components/TxtInput',
  component: TxtInput.Root,
  args: {
    children: [
      <TxtInput.Icon>
        <Envelope />
      </TxtInput.Icon>,

      <TxtInput.Input placeholder='Type'/>
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TxtInputRootProps>;

export const Default: StoryObj<TxtInputRootProps> = {};

export const WithoutIcon: StoryObj<TxtInputRootProps> = {
  args: {
    children: <TxtInput.Input placeholder='Type'/>,
  }
};
