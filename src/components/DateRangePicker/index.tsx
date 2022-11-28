import { Box, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';
import { FC, useEffect, useState, useCallback } from 'react';
import styles from './index.module.css';
import { INNER_DEFAULT_FROM, INNER_DEFAULT_TO } from './utils/constants';
import { parseDateValueToMs } from './utils/parseDateValueToMs';

type Props = {
    defaultFrom?: number;
    defaultTo?: number;
    onChange: (from: number, to: number) => void;
};

const DateRangePicker: FC<Props> = ({
    onChange,
    defaultFrom = INNER_DEFAULT_FROM,
    defaultTo = INNER_DEFAULT_TO
}: Props) => {
    const [from, setFrom] = useState<number>(defaultFrom);
    const [to, setTo] = useState<number>(defaultTo);

    const handleFromChange = useCallback(
        (v: string | null) => {
            const newFrom = parseDateValueToMs(v) || defaultFrom;
            setFrom(newFrom);
        },
        [defaultFrom]
    );
    const handleToChange = useCallback(
        (v: string | null) => {
            const newTo = parseDateValueToMs(v) || defaultTo;
            setTo(newTo);
        },
        [defaultTo]
    );

    useEffect(() => onChange(from, to), [from, to, onChange]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box className={styles.container}>
                <DesktopDatePicker
                    label="Date from"
                    inputFormat="DD/MM/YYYY"
                    value={from}
                    onChange={handleFromChange}
                    renderInput={params => <TextField {...params} />}
                />
                <DesktopDatePicker
                    label="Date to"
                    inputFormat="DD/MM/YYYY"
                    value={to}
                    onChange={handleToChange}
                    renderInput={params => <TextField {...params} />}
                />
            </Box>
        </LocalizationProvider>
    );
};

export default DateRangePicker;
