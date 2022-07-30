import React from "react";
import { render, cleanup } from '@testing-library/react'
import Modal from '..'; 

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup); 

describe('Modal component', () => {
  it('renders', () => {
    // baseline render component test
  })
  //snapshot test
})