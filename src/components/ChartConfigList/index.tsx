import { Divider, List } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    createChart,
    deleteChart,
    updateChart
} from '../../store/redusers/chart';
import { getChartsConfigWithId } from '../../store/redusers/selectors';
import {
    ChartConfig,
    CreateChartForm,
    UpdateChartForm
} from '../../store/redusers/types';
import ChartForm from '../ChartForm';
import ConfirmDialog from '../ConfirmDialog';
import { createSetup, FORM_ID, updateSetup } from './utils/constants';
import ConfigListItem from './views/ConfigListItem';
import ListHeader from './views/ListHeader';

const ChartConfigList = () => {
    const dispatch = useDispatch();
    const charts = useTypedSelector(getChartsConfigWithId);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [presetFormData, setPresetFormData] = useState<
        CreateChartForm | undefined
    >();
    const [updatedId, setUpdatedId] = useState(0);

    const showDialog = () => setIsDialogOpen(true);
    const hideDialog = () => setIsDialogOpen(false);

    const onCreateClick = useCallback(() => {
        setPresetFormData(undefined);
        showDialog();
    }, []);
    const handleCreate = useCallback(
        (chartForm: CreateChartForm) => dispatch(createChart(chartForm)),
        [dispatch]
    );
    const onUpdateClick = useCallback(
        (updatedConfig: UpdateChartForm) => () => {
            const { id, ...rest } = updatedConfig;
            setUpdatedId(id);
            setPresetFormData(rest);
            showDialog();
        },
        []
    );
    const handleUpdate = useCallback(
        (chartForm: CreateChartForm) =>
            dispatch(updateChart({ id: updatedId, ...chartForm })),
        [dispatch, updatedId]
    );
    const onDeleteClick = useCallback(
        (id: number) => () => dispatch(deleteChart(id)),
        [dispatch]
    );

    return (
        <>
            <List>
                <ListHeader onCreate={onCreateClick} key="list_header" />
                <Divider />
                {charts.map(config => (
                    <ConfigListItem
                        key={config.id}
                        {...config}
                        onUpdate={onUpdateClick(config)}
                        onDelete={onDeleteClick(config.id)}
                    />
                ))}
            </List>
            <ConfirmDialog
                isOpen={isDialogOpen}
                {...(presetFormData ? updateSetup : createSetup)}
                onOk={hideDialog}
                onCancel={hideDialog}
            >
                <ChartForm
                    formId={FORM_ID}
                    presetConfig={presetFormData}
                    onSubmit={presetFormData ? handleUpdate : handleCreate}
                />
            </ConfirmDialog>
        </>
    );
};

export default ChartConfigList;
