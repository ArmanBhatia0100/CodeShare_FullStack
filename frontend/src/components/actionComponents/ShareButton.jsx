import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function BasicButtons({ buttonLable }) {
    return (
        <Button variant="contained">
            {buttonLable}
        </Button>
    );
}

BasicButtons.propTypes = {
    buttonLable: PropTypes.string.isRequired,
};