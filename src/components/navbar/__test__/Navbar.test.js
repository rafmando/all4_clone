import { fireEvent, render } from '@testing-library/react';
import Navbar from '../Navbar'
import renderer from 'react-test-renderer'
import {BrowserRouter as Router} from 'react-router-dom'


const mockNavbarData = [
    {id:1,link:'My4',path:'/my4'},
    {id:2,link:'Live TV',path:'/live_tv'},
    {id:3,link:'Categories',path:'/'},
    {id:4,link:'Box Sets',path:'/box_sets'},
]

it("renders the navbar data", () => {

    const tree = renderer.create(
    <Router>
        <Navbar data={mockNavbarData}/>
    </Router>).toJSON();

    expect(tree).toMatchSnapshot();
})

