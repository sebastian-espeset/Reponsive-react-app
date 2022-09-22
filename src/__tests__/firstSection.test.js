import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import FirstSection from '../FirstSection';

afterEach(()=>{
    cleanup();
});

test('First sections headline should render',()=>{
    //Arrange
    render(<FirstSection/>)
    //Act
    const firstSectionHeadline = screen.getByTestId('first-section-headline-test-id');
    //Assert
    expect(firstSectionHeadline).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('first section component to match snapshot',()=>{
    const tree = renderer.create(<FirstSection/>).toJSON();
    expect(tree).toMatchSnapshot();
})