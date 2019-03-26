import React from 'react';
import ReactDOM from 'react-dom';
import Recipes from '../container/Recipes';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {fetchRecipes} from '../__mocks__/apiCalls';
Enzyme.configure({ adapter: new Adapter() });
jest.mock('../__mocks__/apiCalls');

console.log(fetchRecipes())
describe('App', () => {
  describe('componentDidMount', () => {
    it.skip('sets the state componentDidMount', async () => {
      const wrapper = await shallow(<Recipes />)
      await wrapper.update()
      expect(wrapper.state('recipes').length).toEqual(2)
    })
    
    it.skip('sets the state componentDidMount on error', async () => {
      const wrapper = await shallow(<Recipes />)
      await wrapper.update()
      expect(wrapper.state('error')).toEqual('Error fetching recipes')
    })
  })
})