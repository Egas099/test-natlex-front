import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC, memo, useCallback } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../index.module.css';
import {
    ChartType,
    UpdateChartForm
} from '../../../store/reducers/charts/types';

interface ChartConfig {
    id: number;
    color: string;
    title: string;
    type: ChartType;
    onUpdate: (chartForm: UpdateChartForm) => void;
    onDelete: (id: number) => void;
}

const ConfigListItem: FC<ChartConfig> = ({
    id,
    color,
    title,
    type,
    onDelete,
    onUpdate
}) => {
    const handleDelete = useCallback(() => {
        onDelete(id);
    }, [onDelete, id]);

    const handleUpdate = useCallback(() => {
        onUpdate({ id, color, title, type });
    }, [onUpdate, id, color, title, type]);

    return (
        <ListItem sx={{ gap: '10px' }}>
            <ListItemText primary={title} className={styles.titleColumn} />
            <ListItemText
                className={styles.colorColumn}
                sx={{
                    backgroundColor: color
                }}
            >
                {color}
            </ListItemText>
            <ListItemText primary={type} className={styles.typeColumn} />
            <IconButton aria-label="edit" onClick={handleUpdate}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default memo(ConfigListItem);
