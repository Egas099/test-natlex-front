export interface CreateChartForm {
    title: string;
    type: ChartType;
    color: string;
}

export interface UpdateChartForm extends CreateChartForm {
    id: number;
}

export interface ChartConfig extends CreateChartForm {}

export interface Point {
    date: number;
    value: number;
}

export interface Chart {
    id: ChartId;
    dataSet: Point[];
    config: ChartConfig;
}

export type ChartId = number;

export enum ChartType {
    Line = 'line',
    Spline = 'spline',
    Area = 'area'
}
