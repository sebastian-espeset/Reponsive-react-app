import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Investors from '../Investors';

afterEach(()=>{
    cleanup();
});

test('investors section headline should render',()=>{
    //Arrange
    render(<Investors/>)
    //Act
    const investorsHeadline = screen.getByTestId('investors-headline-test-id');
    //Assert
    expect(investorsHeadline).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('investors component to match snapshot',()=>{
    const tree = renderer.create(<Investors/>).toJSON();
    expect(tree).toMatchSnapshot();
})