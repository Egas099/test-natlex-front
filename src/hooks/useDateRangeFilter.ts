import { useState, useCallback } from 'react';
import { DEFAULT_RANGE } from '../components/ChartList/utils/constants';

type Range = {
    from: number;
    to: number;
};

export function useDateRangeFilter(defaultRange: Range) {
    const [dateRange, setDateRange] = useState<Range>(defaultRange);
    const handleFilterChanging = useCallback(
        (from: number, to: number) => setDateRange({ from, to }),
        []
    );

    return {
        dateRange,
        defaultRange: DEFAULT_RANGE,
        onChange: handleFilterChanging
    };
}
