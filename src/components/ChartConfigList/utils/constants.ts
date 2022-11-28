import { ChartType } from "../../../store/redusers/types";

export const FORM_ID = 'chart_form';

export const createSetup = {
    title: 'Create chart',
    formId: FORM_ID
};

export const updateSetup = {
    title: 'Update chart',
    formId: FORM_ID
};


export const DEFAULT_VALUES = {
    title: 'New chart',
    type: ChartType.Line,
    color: '#1976D2'
};
