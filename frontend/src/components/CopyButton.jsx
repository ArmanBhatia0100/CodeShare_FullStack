import * as React from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from 'prop-types';

export default function BasicButtons({ buttonLable, code }) {
    return (
        <Button variant="outlined" startIcon={<ContentCopyIcon />} onClick={() => alert(code)}>
            {buttonLable}
        </Button>
    );
}

BasicButtons.propTypes = {
    buttonLable: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
};