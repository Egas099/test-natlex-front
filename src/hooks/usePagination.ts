import { useCallback, useMemo, useState } from 'react';

const DEFAULT_PAGE = 1;

export function usePagination(listLength: number, maxListCount: number) {
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [listRange, setPagRange] = useState<[number, number]>([
        0,
        maxListCount
    ]);

    const paginationCount = useMemo(
        () => Math.ceil(listLength / maxListCount),
        [listLength, maxListCount]
    );
    const handlePaginationRangeChanging = useCallback(
        (page: number) => {
            setPage(page);
            const from = maxListCount * (page - 1);
            setPagRange([from, from + maxListCount]);
        },
        [maxListCount]
    );

    return {
        listRange,
        page,
        count: paginationCount,
        defaultPage: DEFAULT_PAGE,
        onChange: handlePaginationRangeChanging
    };
}
