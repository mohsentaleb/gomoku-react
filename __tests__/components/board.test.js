import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../src/components/board';

describe('Testing Board Component...', () => {
    
    test('Creating a Board', () => {
        const board = shallow(<Board />);
    });
    
});
