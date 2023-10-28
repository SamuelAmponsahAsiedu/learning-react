import { render, screen } from "@testing-library/react";
import RestaurantCard from'../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMocks.json'
import '@testing-library/jest-dom';

it('should render restaurant card with props data', ()=> {
    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();
})
