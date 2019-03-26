import React from 'react';
import ReactDOM from 'react-dom';
import NoMatch from '../components/NoMatch';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('NoMatch', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NoMatch />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should have all the elmemts', () => {
        let wrapper = shallow(<NoMatch />);
        expect(wrapper.find('h1').length).toBe(1)
        expect(wrapper.find('p').length).toBe(1)
        expect(wrapper.find('i').length).toBe(1)
        expect(wrapper.find('span').length).toBe(1)
        expect(wrapper.find('a').length).toBe(1)
    });
})