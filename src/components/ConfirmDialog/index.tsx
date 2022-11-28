import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type Props = {
    title: string;
    isOpen: boolean;
    onCancel: () => void;
    onOk: () => void;
    formId?: string;
};

const ConfirmDialog: FC<PropsWithChildren<Props>> = ({
    title,
    isOpen,
    onCancel,
    onOk,
    formId,
    children
}) => {
    return (
        <Dialog disableEscapeKeyDown open={isOpen} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onOk} type="submit" form={formId}>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
