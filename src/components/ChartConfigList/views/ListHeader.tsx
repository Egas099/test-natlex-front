import {
    Divider,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FC } from 'react';

interface Props {
    onCreate: () => void;
}

const ListHeader: FC<Props> = ({ onCreate }) => {
    return (
        <ListSubheader>
            <ListItemButton onClick={onCreate}>
                <ListItemIcon>
                    <AddCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Add new chart" />
            </ListItemButton>
            <Divider />
        </ListSubheader>
    );
};

export default ListHeader;
