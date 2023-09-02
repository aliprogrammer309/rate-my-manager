import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, RadioGroup, FormControlLabel, Radio, TextField } from '@mui/material';

export default function ReportDialog({ open, onClose, onSubmit }) {
    const [selectedReason, setSelectedReason] = useState('');
    const [customReason, setCustomReason] = useState('');

    const handleSubmit = () => {
        if (selectedReason === 'Other') {
            onSubmit(customReason);
        } else {
            onSubmit(selectedReason);
        }
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Report Comment</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please select a reason for reporting this comment:
                </DialogContentText>
                <RadioGroup value={selectedReason} onChange={(e) => setSelectedReason(e.target.value)}>
                    <FormControlLabel value="Spam" control={<Radio />} label="Spam" />
                    <FormControlLabel value="Hate Speech" control={<Radio />} label="Hate Speech" />
                    <FormControlLabel value="False Information" control={<Radio />} label="False Information" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    {selectedReason === 'Other' && <TextField fullWidth variant="outlined" label="Specify Reason" value={customReason} onChange={(e) => setCustomReason(e.target.value)} />}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">Cancel</Button>
                <Button onClick={handleSubmit} color="primary">Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
