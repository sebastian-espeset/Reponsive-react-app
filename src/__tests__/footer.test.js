import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

afterEach(()=>{
    cleanup();
});

test('footer section headline should render',()=>{
    //Arrange
    render(<Footer/>)
    //Act
    const footerBeamLogo = screen.getByTestId('beam-logo-footer-test-id');
    //Assert
    expect(footerBeamLogo).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('footer component to match snapshot',()=>{
    const tree = renderer.create(<Footer/>).toJSON();
    expect(tree).toMatchSnapshot();
})