import React from 'react';
import ReactDOM from 'react-dom';
import Favorite from '../components/Favorite';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Favorite', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Favorite />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Favorite />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should handle state changes', () => {
        wrapper.instance().handleIsFavorite = jest.fn();
        let { handleIsFavorite } = wrapper.instance();
        expect(handleIsFavorite).toHaveBeenCalledTimes(0);
        expect(wrapper.state('isFavorite')).toEqual(false)
        wrapper.find('.Favorite--toggle').simulate('click'); 
        wrapper.find('span').simulate('click');
        expect(wrapper.state('isFavorite')).toEqual(true)
        expect(handleIsFavorite).toHaveBeenCalledTimes(1);
    });

    it('should containe all elements', () => {
        expect(wrapper.find('div').length).toBe(1)
        expect(wrapper.find('span').length).toBe(1)
        expect(wrapper.find('i').length).toBe(1)   
     });
})