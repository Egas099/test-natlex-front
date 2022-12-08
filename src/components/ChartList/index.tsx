import { Grid, Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getChartsOptionsWithId } from '../../store/reducers/charts/selectors';
import { fetchChartsThunk } from '../../store/reducers/charts/thunks';
import { ChartStatus } from '../../store/reducers/charts/types';
import ChartComponent from '../ChartComponent';
import { DEFAULT_RANGE, MAX_LIST_COUNT } from './utils/constants';
import { EmptyBox } from './views/EmptyBox';
import Filter from './views/Filter';
import { LoadingBox } from './views/LoadingBox';
import PaginationWrapper from '../PaginationWrapper';

const ChartList = () => {
    const dispatch = useTypedDispatch();
    const { loading, charts } = useTypedSelector(getChartsOptionsWithId);
    const [dateRange, setDateRange] = useState(DEFAULT_RANGE);

    const handleFilterChanging = useCallback(
        (from: number, to: number) => setDateRange({ from, to }),
        []
    );

    useEffect(() => {
        if (loading === ChartStatus.idle) dispatch(fetchChartsThunk());
    }, [loading, dispatch]);

    const { listRange, ...paginationProps } = usePagination(
        charts.length,
        MAX_LIST_COUNT
    );

    if (loading === ChartStatus.pending || loading === ChartStatus.idle) {
        return <LoadingBox />;
    }

    return (
        <>
            {charts.length ? (
                <>
                    <Filter
                        defaultRange={DEFAULT_RANGE}
                        onChange={handleFilterChanging}
                    />
                    <PaginationWrapper {...paginationProps}>
                        <Grid container spacing={3}>
                            {charts.slice(...listRange).map(chart => (
                                <ChartComponent
                                    key={chart.id}
                                    options={chart.options}
                                    range={dateRange}
                                />
                            ))}
                        </Grid>
                    </PaginationWrapper>
                </>
            ) : (
                <EmptyBox />
            )}
        </>
    );
};

export default ChartList;
