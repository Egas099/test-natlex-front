import { Divider, List } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTypedDispatch } from '../../hooks/useTypedDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getChartsConfigWithId } from '../../store/reducers/charts/selectors';
import {
    createChartThunk,
    deleteChartThunk,
    fetchChartsThunk,
    updateChartThunk
} from '../../store/reducers/charts/thunks';
import {
    ChartStatus,
    CreateChartForm,
    UpdateChartForm
} from '../../store/reducers/charts/types';
import ChartForm from '../ChartForm';
import ConfirmDialog from '../ConfirmDialog';
import { CREATE_SETUP, FORM_ID, UPDATE_SETUP } from './utils/constants';
import ConfigListItem from './views/ConfigListItem';
import ListHeader from './views/ListHeader';
import { LoadingListItem } from './views/LoadingListItem';

const ChartConfigList = () => {
    const dispatch = useTypedDispatch();
    const { loading, charts } = useTypedSelector(getChartsConfigWithId);
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
        (chartForm: CreateChartForm) => dispatch(createChartThunk(chartForm)),
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
            dispatch(updateChartThunk({ id: updatedId, ...chartForm })),
        [dispatch, updatedId]
    );
    const onDeleteClick = useCallback(
        (id: number) => () => dispatch(deleteChartThunk(id)),
        [dispatch]
    );
    
    useEffect(() => {
        if (loading === ChartStatus.idle) dispatch(fetchChartsThunk());
    }, [loading, dispatch]);

    return (
        <>
            <List>
                <ListHeader onCreate={onCreateClick} key="list_header" />
                <Divider />
                {charts.length ? (
                    charts.map(config => (
                        <ConfigListItem
                            key={config.id}
                            {...config}
                            onUpdate={onUpdateClick(config)}
                            onDelete={onDeleteClick(config.id)}
                        />
                    ))
                ) : (
                    <LoadingListItem />
                )}
            </List>
            <ConfirmDialog
                isOpen={isDialogOpen}
                {...(presetFormData ? UPDATE_SETUP : CREATE_SETUP)}
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
