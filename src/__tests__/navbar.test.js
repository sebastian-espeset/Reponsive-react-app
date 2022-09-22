import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

afterEach(()=>{
    cleanup();
});

test('beam logo should render in the navbar',()=>{
    //Arrange
    render(<Navbar/>)
    //Act
    const wholeNavbar = screen.getByTestId('logo-test-id');
    //Assert
    expect(wholeNavbar).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('navbar component to match snapshot',()=>{
    const tree = renderer.create(<Navbar/>).toJSON();
    expect(tree).toMatchSnapshot();
})