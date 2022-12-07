import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import styles from './index.module.css';

const PageLayout = () => {
    return (
        <>
            <Header />
            <Container id={styles.container} maxWidth="lg">
                <Outlet />
            </Container>
        </>
    );
};

export default PageLayout;
