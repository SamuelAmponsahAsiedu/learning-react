import Body from "../Body";
import {fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MOCK_DATA from '../mocks/mockResListData.json';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'

global.fetch =jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            }
        });
});

it('should render the body component with Search', async() => {
    await act (async () => 
    render(
        <BrowserRouter >
            <Body />
        </BrowserRouter>
    ))

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput, {target: {value: "KFC"}});

    fireEvent.click(searchBtn);

    //screen should load all the cards with name KFC 
    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(1);
})

it('should filter top rated restaurants', async() => {
    await act (async () => 
    render(
        <BrowserRouter >
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    
    expect(cardsBeforeFilter.length).toBe(20);


    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(17);
})