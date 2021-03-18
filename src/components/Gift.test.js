import React from 'react';
import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id}, removeGift: mockRemove }
    const gift = shallow(<Gift {...props} />);

    it('renders properly', () => {
        expect(toJson(gift)).toMatchSnapshot();
    })

    it('initializes a person and present in `state', () => {
        expect(gift.state()).toEqual({person: '', present: ''});
    })

    describe('When typing into the `person` input', () => {
        const person = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person}});
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        })
    });

    describe('when typng into the present input', () => {
        const present = 'Golf clubs';

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present}});
        });
        it('update the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        })
    });

    describe('when clicking  the  `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    })
})