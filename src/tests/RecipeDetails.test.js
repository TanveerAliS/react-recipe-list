import React from 'react';
import ReactDOM from 'react-dom';
import RecipeDetails from '../container/RecipeDetails';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('RecipeDetails', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<RecipeDetails />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RecipeDetails />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should have all the elmemts', () => {
        expect(wrapper.find('.RecipeDetails').length).toBe(1)
    });
})