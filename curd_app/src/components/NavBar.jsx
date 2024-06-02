import {AppBar, Toolbar, Typography, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #111111;
`

const Ptag = styled(NavLink)`
    font-size: 25px;
    margin-right: 20px;
    color : inherit;
    text-decoration: none;

`
const NavBar = () => {
    return (
        <Header position='static' >    
            <Toolbar>

                <Ptag to='/'>
                    All Users 
                </Ptag>

                <Ptag to = '/add'>
                    Add User 
                </Ptag>

            </Toolbar>
        </Header> 
    )
}

export default NavBar;