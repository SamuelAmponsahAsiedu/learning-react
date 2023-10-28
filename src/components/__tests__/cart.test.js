import {screen, render, fireEvent} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA_MENU from '../mocks/mockResMenu.json';
import Header from '../Header';
import Cart from '../Cart';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA_MENU)
        }
    })
});

it('should load Restaurant Menu Component', async () =>{
    await act (async() => 
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header /> 
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("DOUBLE DOWN (5)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5)
    
    expect(screen.getByText( "Cart 🛒 (0 item)")).toBeInTheDocument();

    const addBtns = screen.getAllByText("Add +");
    fireEvent.click(addBtns[0]);

    expect(screen.getByText( "Cart 🛒 (1 item)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText( "Cart 🛒 (2 item)")).toBeInTheDocument();
});

