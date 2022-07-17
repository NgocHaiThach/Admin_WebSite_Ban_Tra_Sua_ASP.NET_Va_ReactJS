// import React from 'react'
// import { shallow } from 'enzyme'
// import configureStore from 'redux-mock-store'
// import ProductListPage from '../Pages/ProductListPage'
// import '../setupTest'

// it('should render the component productlist from store', () => {
//     const wrapper = shallow(<ProductListPage />)
//     expect(wrapper).not.toBe(null)
// })

test('async test', async () => {
    const asyncMock = jest.fn().mockResolvedValue(43);

    await asyncMock(); // 43
});