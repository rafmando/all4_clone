import { useState, useEffect }from 'react'
import ShowsStyles from './Shows.styles'
import { IoIosArrowDown } from 'react-icons/io'
import showsData from '../../data/ShowsData'
import { useDispatch } from 'react-redux'
import { addToWatchLater } from '../../redux/watchLaterSlice'


const {
    StyledShowsContainer,
    StyledShowsWrapper,
    StyledShowsHeader,
    StyledShowsTitleWrapper,
    StyledShowsTitle,
    StyledShowCount,
    StyledShowsRefine,
    StyledShowsRefineIcon,
    StyledShowsGenresWrapper,
    StyledShowsGenre,
    StyledShowsMoreBox,
    StyledShows,
    StyledShowsCard,
    StyledShowsCardOverlay,
    StyledShowsCardOverlayText,
} = ShowsStyles

const Shows = () => {
    
    const [showsTotal,setShowsTotal] = useState([])
    const [shows,setShows] = useState(showsData)
    const dispatch = useDispatch()
    
    useEffect(() => {
        updateShowTotal()
    });

    const genres = [
        {id:1,genre:'Comedy'},
        {id:2,genre:'Documentries'},
        {id:3,genre:'Drama'},
        {id:4,genre:'Entertainment'},
        {id:5,genre:'Film'},
        {id:6,genre:'Lifestyle'},
        {id:7,genre:'News & Current Affairs'},
        {id:8,genre:'Sports'},
        {id:9,genre:'World Drama'},
        {id:10,genre:'On Tv: Yesterday'},
        {id:11,genre:'On Tv: Last 7 Days'},
        {id:12,genre:'Box Sets'},
    ]

    const handleToWatchLater = (show) => {
        dispatch(addToWatchLater(show))
    }

    const updateShowTotal = () => {
        setShowsTotal(shows.length)
    }
    
    return (
        <StyledShowsContainer>
            <StyledShowsWrapper>
                <StyledShowsHeader>
                    <StyledShowsTitleWrapper>
                        <StyledShowsTitle>All Shows</StyledShowsTitle>
                        <StyledShowCount>({showsTotal} shows)</StyledShowCount>
                    </StyledShowsTitleWrapper>
                    <StyledShowsRefine>
                        Refine: Popular
                        <StyledShowsRefineIcon>
                            <IoIosArrowDown/>
                        </StyledShowsRefineIcon>
                    </StyledShowsRefine>
                </StyledShowsHeader>
                <StyledShowsGenresWrapper>
                    {genres.map((genre) => {
                        return (
                        <StyledShowsGenre key={genre.id} >
                            {genre.genre}
                        </StyledShowsGenre>
                        )
                    })}
                    <StyledShowsMoreBox>
                        More...
                    </StyledShowsMoreBox>
                </StyledShowsGenresWrapper>
                <StyledShows>
                    {shows.map((show)=> {
                        return (
                            <StyledShowsCard onClick={() => handleToWatchLater(show)} key={show.id}>
                                <StyledShowsCardOverlay>
                                    <img src={show.img} alt="show"/>
                                </StyledShowsCardOverlay>
                                <p>{show.name}</p>
                            </StyledShowsCard>
                        )
                        
                    })}
                </StyledShows>
            </StyledShowsWrapper>
        </StyledShowsContainer>
    )
}

export default Shows
