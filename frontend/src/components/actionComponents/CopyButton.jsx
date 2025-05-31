import * as React from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from 'prop-types';

export default function BasicButtons({ code }) {
    return (
        <Button startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(code)}>
             {"www.xx.....com"}
        </Button>
    );
}

BasicButtons.propTypes = {
    code: PropTypes.string.isRequired,
};