import styled from 'styled-components'

const StyledShowsContainer = styled.div`
    background-color: #1e1e1e;
`
const StyledShowsWrapper = styled.div`
    max-width: 1160px;
    margin: auto;
    padding-left: 30px;
    padding-right: 30px;
    @media (max-width:720px) {
        padding-left: 10px;
        padding-right: 10px;
        
    }
`
const StyledShowsHeader = styled.div`
    display: flex;
    justify-content: space-between;

`
const StyledShowsTitleWrapper = styled.div`
    display: flex;
    padding-top: 35px;
    @media (max-width:500px) {
        padding-top: 30px;
    }
`
const StyledShowCount = styled.p`
    padding-left: 15px;
    padding-top: 30px;
    font-size: 15px;
    color: #b3b3b3;
    @media (max-width:500px) {
        padding-top: 15px;
    }

`
const StyledShowsTitle = styled.h1`
    font-size: 46px;
    font-weight: 900;
    color: white;
    font-family: 'Source Sans Pro', sans-serif;
    @media (max-width:500px) {
        font-size: 30px;
    }
`
const StyledShowsRefine = styled.div`
    display: flex;
    padding: 0 10px;
    align-items: center;
    color: white;
    margin-top: 40px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    margin-right: 10px;
    @media (max-width:500px) {
        display: none;
    }
    &:hover {
        background-color: #333333;
       
    }

`
const StyledShowsRefineIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-top: 5px;
`
const StyledShowsGenresWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 10px;
    font-size: 16px;
    color: white;
    margin-top: 15px;
    @media (max-width:860px) {
        & :nth-child(11){
            display: none;
        }
        & :nth-child(12){
            display: none;
        }
    }
    @media (max-width:665px) {
        margin-top: 5px;
        font-size: 14px;
        & :nth-child(10){
            display: none;
        }
        
    }
    @media (max-width:420px) {
        margin-top: 5px;
        font-size: 14px;
        & :nth-child(9){
            display: none;
        }
        & :nth-child(8){
            display: none;
        }
        & :nth-child(7){
            display: none;
        }
        & :nth-child(6){
            display: none;
        }
        
    }
`
const StyledShowsGenre = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    background-color: #292929;
    font-family: 'Open Sans', sans-serif;
`
const StyledShowsMoreBox = styled.div`
    display: none;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    font-family: 'Open Sans', sans-serif;
    @media (max-width:860px) {
       display: flex;
    }

`
const StyledShows = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 25px;
    @media (max-width:810px) {
        gap: 5px;
        
     }
    
 
`
const StyledShowsCard = styled.div`
    width: 24%;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    img {
        width: 100%;
    }
    @media (max-width:810px) {
        width: 49%;
    }
`
// eslint-disable-next-line import/no-anonymous-default-export
export default {
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
}