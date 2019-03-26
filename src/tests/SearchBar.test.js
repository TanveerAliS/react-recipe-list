import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../components/SearchBar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<SearchBar />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should have all the elmemts', () => {
        expect(wrapper.find('input').length).toBe(1)
        expect(wrapper.find('button').length).toBe(1)
    });


    it('should simulate input changes', () => {
        expect(wrapper.find('input').value).toBe(undefined)
        wrapper.find('input').simulate('change', {target: {value: 'helloFresh'}});
    });
})