import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const cards = [];
        const div = document.createElement('div');
        ReactDOM.render(<List cards={cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const cards = [];
        const tree = renderer
            .create(<List cards={cards}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});