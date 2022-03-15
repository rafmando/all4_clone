import React from 'react'
import PagesStyles from '../pages_styles/Pages.styles'
import { useSelector } from 'react-redux'

const {
    StyledPageContainer,
    StyledPageHeading,
    StyledMy4Nav,
    StyledMy4NavWrapper,
    StyledMy4Links,
    StyledMy4AccountSettings,
    StyledShows,
    StyledShowsCard,
    StyedShowsImageContainer,
    StyledShowsCardImg,
} = PagesStyles

const My4 = () => {
    const shows = useSelector((state) => state.watchLaterReducer.watchLater)
   
    console.log(shows)
    return (
        <StyledPageContainer>
            <StyledMy4Nav>
                <StyledMy4NavWrapper>
                    <h1>My4</h1>
                    <StyledMy4Links>
                        <div>Watching</div>
                        <div>My List</div>
                        <div>History</div>
                    </StyledMy4Links>
                    <StyledMy4AccountSettings>
                        Account Settings
                    </StyledMy4AccountSettings>
                </StyledMy4NavWrapper>
            </StyledMy4Nav>
            <StyledShows>
                    {shows.map((show)=> {
                        return (
                            <StyledShowsCard  key={show.id}>
                                    <StyedShowsImageContainer>
                                            <StyledShowsCardImg src={show.img} alt="show"/>
                                    </StyedShowsImageContainer>
                                <p>{show.name}</p>
                            </StyledShowsCard>
                        )
                        
                    })}
                </StyledShows>
        </StyledPageContainer>
    )
}

export default My4
