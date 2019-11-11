import React from 'react';
import { shallow } from 'enzyme';
import Board from '../../src/components/board';

describe('<Board />', () => {
    test('Board renders correctly.', () => {
        shallow(<Board />);
    });
});
