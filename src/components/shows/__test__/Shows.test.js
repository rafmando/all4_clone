import { fireEvent, render } from '@testing-library/react';
import Shows from '../Shows'
import renderer from 'react-test-renderer'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'

let getByTestId;

const mockShowsData = [
    {id:1, category:'Comedy', name:'Gogglebox', description:"What do Britain's sharpest armchair critics think of our biggest and best TV programmes",img:'/images/gogglebox.jpeg'},
    {id:2, category:'Drama', name:'Hollyoaks', description:"Hollyoaks: the village in Chester where it all happens",img:'/images/hollyoaks.jpeg'},
    {id:3, category:'Entertainment', name:'Made in chelsea', description:"Reality series following the lives, loves and awks of SW3's bright young things",img:'/images/made_in_chelsea.jpeg'},
    {id:4, category:'Entertainment', name:'Married at first sight', description:"Aussie singles get hitched to spouses who they see for the first time on their wedding day",img:'/images/married_at_first_sight.jpeg'},
    {id:5, category:'Documentry', name:'Fraiser', description:"Classic comedy. Dr Frasier Crane is bright and successful. So what could go wrong? Well...",img:'/images/fraiser.jpeg'},
    {id:6, category:'Drama', name:'Close to Me', description:"Drama about a woman who forgets the last year of her life following a brain trauma",img:'/images/close_to_me.jpeg'},
    {id:7, category:'Comedy', name:'Young Sheldon', description:"US comedy prequel to The Big Bang Theory about gifted but eccentric nine-year-old Sheldon Cooper, who doesn't find it easy growing up in East Texas",img:'/images/young_sheldon.jpeg'},
    {id:8, category:'Comedy', name:'The Inbetweeners', description:"Smash-hit adolescent comedy about lads behaving sadly. Welcome to a world of futile crushes, getting drunk too quickly and casting constant aspersions about your friends' sexuality.",img:'/images/the_inbetweeners.jpeg'},
    {id:9, category:'Comedy', name:'Friday Night Dinner', description:"Sitcom from Robert Popper about the gloriously idiosyncratic Goodman family. Starring Simon Bird, Tamsin Greig, Paul Ritter, Tom Rosenthal and guest star Mark Heap.",img:'/images/friday_night_dinner.jpeg'},
    {id:10, category:'Lifestyle', name:'Escape to the Chateau', description:"Can Dick Strawbridge and his wife Angel bring an abandoned French chateau back to life?",img:'/images/escape_to_chateau.jpeg'},
    {id:11, category:'Sports', name:'Formula 1', description:"Welcome to F1 2021. This twisting, turning season is nearing a nail-biting climax, with Max Verstappen and Lewis Hamilton neck and neck. Thrills are guaranteed.",img:'/images/formula_1.jpeg'},
    {id:12, category:'Lifestyle', name:'One Tree Hill', description:"Love, life and basketball in Tree Hill, a small town in North Carolina that sees far more than its fair share of teen drama",img:'/images/one_tree_hill.jpeg'},
]


it("renders the shows data", () => {
    const tree = renderer.create(
        <Provider store={store}>
             <Shows data={mockShowsData}/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})

it("returns a show when filter button clicked ", () => {
    const filterGenreButton = getByTestId('filter-genre')
    expect(filterGenreButton.textContent).toBe('Comedy')
})
