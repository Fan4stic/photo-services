import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../client/src/components/Carousel.jsx';


test('Basic Modal Functionality', () => {
  const component = renderer.create(
    <Carousel />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.openModal();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.closeModal();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.setMainModal('https://www.w3schools.com/howto/img_woods.jpg');
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});