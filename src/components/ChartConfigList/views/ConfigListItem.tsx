import { Box, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC, memo } from 'react';
import EditIcon from '@mui/icons-material/Edit';

interface ChartConfig {
    id: number;
    color: string;
    title: string;
    type: 'line' | 'spline' | 'area';
    onUpdate: () => void;
    onDelete: () => void;
}

const ConfigListItem: FC<ChartConfig> = ({
    id,
    color,
    title,
    type,
    onDelete,
    onUpdate
}) => {
    return (
        <ListItem>
            <ListItemText primary={title} />
            <Box sx={{ height: '10xp', p: '5px', background: color }}>
                {color}
            </Box>
            <ListItemText primary={type} />
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
