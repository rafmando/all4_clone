import React from 'react'
import PagesStyles from '../pages_styles/Pages.styles'
import { useSelector } from 'react-redux'

const {
    StyledPageContainer,
    StyledPageHeading
} = PagesStyles

const My4 = () => {
    const shows = useSelector((state) => state.watchLaterReducer.watchLater)
    console.log(shows)
    return (
        <StyledPageContainer>
            <StyledPageHeading>Page not finished :(</StyledPageHeading>
            <p>{shows.map((show) => show.name)}</p>
        </StyledPageContainer>
    )
}

export default My4
