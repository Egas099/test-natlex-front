export interface ChartState {
    entities: Chart[];
    loading: ChartStatus;
}

export interface Chart {
    id: number;
    dataSet: Point[];
    config: ChartConfig;
}

export interface Point {
    date: number;
    value: number;
}

export interface ChartConfig extends CreateChartForm {}

export interface CreateChartForm {
    title: string;
    type: ChartType;
    color: string;
}

export interface UpdateChartForm extends CreateChartForm {
    id: number;
}

export enum ChartType {
    Line = 'line',
    Spline = 'spline',
    Area = 'area'
}

export enum ChartStatus {
    idle,
    pending,
    succeeded,
    failed
}
