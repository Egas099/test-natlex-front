import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC, memo } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../index.module.css';

interface ChartConfig {
    id: number;
    color: string;
    title: string;
    type: 'line' | 'spline' | 'area';
    onUpdate: () => void;
    onDelete: () => void;
}

const ConfigListItem: FC<ChartConfig> = ({
    color,
    title,
    type,
    onDelete,
    onUpdate
}) => {
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
            <IconButton aria-label="edit" onClick={onUpdate}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
    );
};

export default memo(ConfigListItem);
