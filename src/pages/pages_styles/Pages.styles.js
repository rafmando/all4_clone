import styled from 'styled-components'

const StyledPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;


`
const StyledPageHeading = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: white;
    margin-top: 100px;
    
`
///My4 styles

const StyledMy4Nav = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
    
    
`
const StyledMy4NavWrapper = styled.div`
    background-color: #454d58;
    font-family: 'Open Sans', sans-serif;
    color: white;
    display: flex;
    justify-content: space-between;
    width: 1160px;
    padding: 15px;
    h1 {
        font-size: 30px;
    }
`
const StyledMy4Links = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    width: 300px;
    margin-left: 50px;
    justify-content: space-between;
    div {
        background-color: #373e46;
        padding: 7px;
        padding-left: 10px;
        font-size: 15px;
        padding-right: 10px;
        border-radius: 20px;
    }
`

const StyledMy4AccountSettings = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
`


export default{
    StyledPageContainer,
    StyledPageHeading,
    //my4 styles
    StyledMy4Nav,
    StyledMy4NavWrapper,
    StyledMy4Links,
    StyledMy4AccountSettings,

}