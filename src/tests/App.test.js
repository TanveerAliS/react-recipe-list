import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import Recipes from '../container/Recipes';
import RecipeDetails from '../container/RecipeDetails';
import NoMatch from '../components/NoMatch';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('default path should redirect to Recipes component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Recipes)).toHaveLength(1);
  });

  it('/anyother path should redirect to NoMatch component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/anyother']} initialIndex={0}>
        <Route
          path="/anyother" component={NoMatch} 
        />
      </MemoryRouter>,
    );
    expect(wrapper.find(NoMatch)).toHaveLength(1);
  });

  it('/anyother path should redirect to RecipeDetails component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/recipe/:recipeId']} initialIndex={0}>
        <Route
          path="/recipe/:recipeId"  component={RecipeDetails} 
        />
      </MemoryRouter>,
    );
    expect(wrapper.find(RecipeDetails)).toHaveLength(1);
  });
});