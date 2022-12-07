import { ChartType } from '../../../store/reducers/charts/types';

export const FORM_ID = 'chart_form';

export const CREATE_SETUP = {
    title: 'Create chart',
    formId: FORM_ID
};

export const UPDATE_SETUP = {
    title: 'Update chart',
    formId: FORM_ID
};

export const DEFAULT_VALUES = {
    title: 'New chart',
    type: ChartType.Line,
    color: '#1976D2'
};
