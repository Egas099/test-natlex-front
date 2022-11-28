import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
const Header = () => {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `${styles.link} ${isActive ? styles.activeLink : ''}`;

    return (
        <AppBar position="static">
            <Toolbar>
                <Container maxWidth="lg">
                    <NavLink to="/view_mode" className={linkClasses}>
                        <Typography variant="h6" component="span">
                            View mode
                        </Typography>
                    </NavLink>
                    <NavLink to="/settings" className={linkClasses}>
                        <Typography variant="h6" component="span">
                            Settings
                        </Typography>
                    </NavLink>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
