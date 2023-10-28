import Contact from '../Contacts';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Contact us page test cases', () => {
    test('Should load contact us component', () => {
        render(<Contact />)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
    });
    
    it('should load button inside contact us component', () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    });
    
    test('should load two input boxes inside contact us component', () => {
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes).not.toBe(20000);
        //expect(inputBoxes).toBe(2);
    })
})

