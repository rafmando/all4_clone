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
} = ShowsStyles

const Shows = () => {
    
    const [showsTotal,setShowsTotal] = useState([])
    const [shows,setShows] = useState(showsData)
    const dispatch = useDispatch()
   

    
    useEffect(() => {
        updateShowTotal()
        
    });

    
    const handleToWatchLater = (show) => {
        dispatch(addToWatchLater(show))
    }

    const updateShowTotal = () => {
        setShowsTotal(shows.length)
    }

    const filterGenre = (show) => {
        
        const filterResult = showsData.filter((showData) => {
            return showData.category === show;
        })
        setShows(filterResult)
        
       
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
                        <StyledShowsGenre onClick={() => filterGenre('Comedy')}>Comedy</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Documentries')}>Documentries</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Entertainment')}>Entertainment</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Film')}>Film</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Lifestyle')}>Lifestyle</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('News & Current Affairs')}>News & Current Affairs</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Sports')}>Sports</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('World Drama')}>World Drama</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('On Tv: Yesterday')}>On Tv: Yesterday</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('On Tv: Last 7 Days')}>On Tv: Last 7 Days</StyledShowsGenre>
                        <StyledShowsGenre onClick={() => filterGenre('Box Sets')}>Box Sets</StyledShowsGenre>
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
