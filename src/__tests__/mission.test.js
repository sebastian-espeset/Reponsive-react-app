import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Mission from '../Mission';

afterEach(()=>{
    cleanup();
});

test('Missions section headline should render',()=>{
    //Arrange
    render(<Mission/>)
    //Act
    const missionHeadline = screen.getByTestId('mission-headline-test-id');
    //Assert
    expect(missionHeadline).toBeInTheDocument();
});

// test will create a 'snapshot' of the html file, and then compare it to potential changes made    
test('mission component to match snapshot',()=>{
    const tree = renderer.create(<Mission/>).toJSON();
    expect(tree).toMatchSnapshot();
})