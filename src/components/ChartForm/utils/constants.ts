import { ChartType } from '../../../store/reducers/charts/types';

export const DEFAULT_CONFIG = {
    title: 'New chart',
    type: ChartType.Line,
    color: '#1976D2'
};

export const PRESET_INPUT_PROPS = {
    fullWidth: true,
    InputLabelProps: { shrink: true }
};
