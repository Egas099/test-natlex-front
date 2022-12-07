import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormEvent, useRef, memo } from 'react';
import {
    ChartConfig,
    ChartType,
    CreateChartForm
} from '../../store/reducers/charts/types';
import styles from './index.module.css';
import { DEFAULT_CONFIG, PRESET_INPUT_PROPS } from './utils/constants';

type Props = {
    formId: string;
    onSubmit: (chartForm: CreateChartForm) => void;
    presetConfig?: ChartConfig;
};

const ChartForm = ({
    formId,
    onSubmit,
    presetConfig = DEFAULT_CONFIG
}: Props) => {
    const chartTitle = useRef(presetConfig.title);
    const chartType = useRef(presetConfig.type);
    const chartColor = useRef(presetConfig.color);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            title: chartTitle.current || presetConfig.title,
            type: chartType.current,
            color: chartColor.current
        });
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit} id={formId}>
            <TextField
                label="Title"
                defaultValue={presetConfig.title}
                onChange={e => {
                    chartTitle.current = e.target.value;
                }}
                {...PRESET_INPUT_PROPS}
            />
            <TextField
                select
                label="Type"
                defaultValue={presetConfig.type}
                onChange={e => {
                    chartType.current = e.target.value as ChartType;
                }}
                {...PRESET_INPUT_PROPS}
            >
                {Object.values(ChartType).map(type => (
                    <MenuItem key={type} value={type}>
                        {type}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                type="color"
                label="Color"
                defaultValue={presetConfig.color}
                onChange={e => {
                    chartColor.current = e.target.value;
                }}
                {...PRESET_INPUT_PROPS}
            />
        </form>
    );
};

export default memo(ChartForm);
