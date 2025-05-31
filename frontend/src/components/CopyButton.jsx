import * as React from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from 'prop-types';

export default function BasicButtons({ buttonLable, code }) {
    return (
        <Button startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(code)}>
             {"www.xx.....com"}
        </Button>
    );
}

BasicButtons.propTypes = {
    buttonLable: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
};