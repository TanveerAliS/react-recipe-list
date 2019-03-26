import React from 'react';
import ReactDOM from 'react-dom';
import Rating from '../components/Rating';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Rating recipeId="1234" recipeRating="4"/>);
    });
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Rating />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it.skip('handle input changes', () => {
        wrapper.instance().onFilterTextInput = jest.fn();
        let { onFilterTextInput } = wrapper.instance();
        expect(onFilterTextInput).toHaveBeenCalledTimes(0);
        wrapper.find('SearchBar').simulate('change'); 
        wrapper.find('input').simulate('change');
        // expect(wrapper.state('rating')).toEqual("4")
    });

    it('should containe all elements', () => {
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('RatingStar').length).toBe(5);
    });

    it('should highlight the rating based on rating props', () => {
        expect(wrapper.find('RatingStar').at(4).prop("active")).toBe(false);
    });
})