import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
const Header = () => {
    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `${styles.link} ${isActive ? styles.activeLink : ''}`;

    return (
        <AppBar position="sticky">
            <Toolbar id={styles.header}>
                <Container maxWidth="lg" id={styles.navBar}>
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
