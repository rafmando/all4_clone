import {useState} from 'react'
import { IoIosSearch } from 'react-icons/io'
import { MdLockOpen } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import NavbarStyles from './Navbar.styles'
import navbarData from '../../data/NavbarData'


const {
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
} = NavbarStyles

const Navbar = () => {

    const [links] = useState(navbarData)

    return (
        <>
            <StyledNavbar>
                <StyledNavbarWrapper>
                    <StyledNavbarLogo>
                        <svg width="28" height="39" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M18.331 0l-.463.578v5.021l2.894-3.61L18.332 0zM12.73 6.99v13.88h3.128V3.087L12.73 6.989zm5.139 1.838v12.044h3.128V4.925l-3.128 3.902zM1.602 20.871h4.025l5.091-6.351V9.498L1.602 20.871zM17.87 33.737h3.128v-5.643H17.87v5.643zm-5.14 5.192h3.128V28.094H12.73V38.93zm5.139 0h7.82v-3.16h-7.82v3.16zm-10.277 0h3.128v-3.16H7.59v3.16z" fill="#fff"/><path fill="#00E1C3" d="M20.744 22.903l-2.533 3.16h10.11v-3.16z"/><path fill="#FADC00" d="M.44 26.063h15.417v-3.16H.441z"/></g></svg>
                    </StyledNavbarLogo>
                    <StyledNavbarListItems>
                        <span>
                            <StyledNavbarListItem>Home</StyledNavbarListItem>
                        </span>
                        {links.map((link)=>{
                            return (
                                <StyledLink to={link.path} key={link.id}>
                                    <StyledNavbarListItem>{link.link}</StyledNavbarListItem>
                                </StyledLink>
                            )
                        })}
                    </StyledNavbarListItems>
                    <StyledNavbarWatchAndSearch>
                        <StyledNavbarWSItem>
                            <StyledNavbarIconMobile>
                            <AiOutlineUser style={{width:"22px",height:"22px"}}/>
                                <StyledNavbarIconMobileText to="/my4">My4</StyledNavbarIconMobileText>
                            </StyledNavbarIconMobile>
                        </StyledNavbarWSItem>
                        <StyledNavbarWSItem>
                            <StyledNavbarIcon>
                                    <MdLockOpen style={{width:"22px",height:"22px"}}/>
                            </StyledNavbarIcon>
                            <span>Parent Controls: </span><p>Off</p>
                            <StyledNavbarIconMobile>
                                <IoIosSearch style={{width:"22px",height:"22px"}}/>
                                <StyledNavbarIconMobileText>Search</StyledNavbarIconMobileText>
                            </StyledNavbarIconMobile>
                        </StyledNavbarWSItem>
                        <StyledNavbarWSItem>
                            <StyledNavbarIcon>
                                <IoIosSearch style={{width:"22px",height:"22px"}}/>
                            </StyledNavbarIcon>
                            <span>Search</span>
                            <StyledNavbarIconMobile>
                            <MdMenu style={{width:"22px",height:"22px"}}/>
                                <StyledNavbarIconMobileText>Menu</StyledNavbarIconMobileText>
                            </StyledNavbarIconMobile>
                        </StyledNavbarWSItem>
                    </StyledNavbarWatchAndSearch>
                </StyledNavbarWrapper>
            </StyledNavbar>
            <StyledNavbarDropDown>
                {links.map((link) => {
                    return(
                        <StyledNavbarDropDownItem key={link.id}>{link.link}</StyledNavbarDropDownItem>
                    )
                })}
            </StyledNavbarDropDown>
        </>
         
    )
}

export default Navbar
