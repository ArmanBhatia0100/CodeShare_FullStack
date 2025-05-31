import * as React from 'react';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from 'prop-types';

export default function BasicButtons({ buttonLable }) {
    return (
        <Button variant="contained" startIcon={<ContentCopyIcon />}>
            {buttonLable}
        </Button>
    );
}

BasicButtons.propTypes = {
    buttonLable: PropTypes.string.isRequired,
};