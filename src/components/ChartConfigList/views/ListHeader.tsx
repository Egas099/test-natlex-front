import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FC } from 'react';

interface Props {
    onCreate: () => void;
}

const ListHeader: FC<Props> = ({ onCreate }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onCreate}>
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Add new chart" />
            </ListItemButton>
        </ListItem>
    );
};

export default ListHeader;
