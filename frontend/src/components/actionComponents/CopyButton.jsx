import * as React from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useCodeStore } from '../../store/codeStore';

export default function BasicButtons() {
    const { publicLink} = useCodeStore();
    return (
        <Button startIcon={<ContentCopyIcon />} onClick={() => { navigator.clipboard.writeText(publicLink) }}>
            {publicLink.slice(6, 20)}
        </Button>
    );
}
