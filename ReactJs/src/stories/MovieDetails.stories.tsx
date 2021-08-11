import React from 'react'
import { Story, Meta } from '@storybook/react'
import Movie from '../view/movie'

export default {
  title: 'Movie',
  component: Movie,
} as Meta

export const MovieList: Story = (args) => <Movie {...args} />
