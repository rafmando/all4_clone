import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.div`
    background-color: #1e1e1e;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
   
`
const StyledNavbarWrapper = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    background-color: #292929;
    height: 64px;
    width: 1160px;
    padding: 30px;
    @media (max-width:1132px) {
        padding: 20px;
        span {
            display: none;
        }
    }
    @media (max-width:1160px) {
        width: 100%;
    }
    @media (max-width:720px) {
        padding: 10px;
        
        
    }
    
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`
const StyledNavbarLogo = styled.div`
    

`
const StyledNavbarListItems = styled.ul`
    display: flex;
    position: absolute;
    margin-left: 80px;
    margin-bottom: 5px;
    list-style: none;
    gap: 23px;
    @media (max-width:720px) {
        display: none;
    }

`
const StyledNavbarListItem = styled.li`
    padding: 25px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #333333;
        color: #08e7b4;
    }
`
const StyledNavbarWatchAndSearch = styled.div`
    display: flex;
    margin-bottom: 5px;
    list-style: none;
    gap: 23px;
    @media (max-width:720px) {
        gap: 5px;
        
    }
    
`
const StyledNavbarWSItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 22px 10px;
    @media (max-width:720px) {
        padding: 15px 10px;
        span {
            display: none;
        }
        p {
            display: none;
        }
        
    }
    @media (max-width:1132px) {
        span {
            display: none;
        }
    }
    &:hover {
        background-color: #333333;
        color: #08e7b4;
    }
`
const StyledNavbarIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    @media (max-width:720px) {
        display: none;
    }

`
const StyledNavbarIconMobile = styled.div`
    display: none;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    @media (max-width:720px) {
        display: flex;
    }
    
`
const StyledNavbarIconMobileText = styled.div`
    margin-top: 2px;
`

const StyledNavbarDropDown = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   background-color: white;
   width: 100%;
   z-index: 1;
   font-weight: 400;
   font-family: 'Open Sans', sans-serif;
  
`
const StyledNavbarDropDownItem = styled.div`
    height: 45px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 16px;
    color: white;
    background-color: #333333;
    border-bottom: 0.3px solid #292929;
    display: none;
    &:hover {
        background-color: #3e3e3e;
    }

    

`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    StyledNavbar,
    StyledNavbarWrapper,
    StyledNavbarLogo,
    StyledNavbarListItems,
    StyledNavbarListItem,
    StyledNavbarWatchAndSearch,
    StyledNavbarWSItem,
    StyledNavbarIcon,
    StyledNavbarIconMobile,
    StyledNavbarIconMobileText,
    StyledLink,
    StyledNavbarDropDown,
    StyledNavbarDropDownItem,
}