import { Pagination, Divider } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import styles from './index.module.css';

type Props = {
    onChange: (value: number) => void;
    count: number;
};

const PaginationWrapper: FC<PropsWithChildren<Props>> = ({
    onChange,
    children,
    ...restProps
}) => {
    const handleChange = (event: unknown, value: number) => {
        onChange(value);
    };

    const PaginationComponent = (
        <Pagination
            id={styles.container}
            onChange={handleChange}
            siblingCount={0}
            {...restProps}
            shape="rounded"
        />
    );

    return (
        <>
            {PaginationComponent}
            <Divider />
            {children}
            <Divider />
            {PaginationComponent}
        </>
    );
};

export default PaginationWrapper;
