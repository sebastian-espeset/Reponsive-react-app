import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Leadership from '../Leadership';

afterEach(()=>{
    cleanup();
});

test('Leaderships section headline should render',()=>{
    //Arrange
    render(<Leadership/>)
    //Act
    const leadershipHeadline = screen.getByTestId('leadership-headline-test-id');
    //Assert
    expect(leadershipHeadline).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('leadership component to match snapshot',()=>{
    const tree = renderer.create(<Leadership/>).toJSON();
    expect(tree).toMatchSnapshot();
})