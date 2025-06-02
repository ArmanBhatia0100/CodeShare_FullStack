import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useCodeStore } from '../../store/codeStore';
import { shareCode } from '../../services/Sharecode';
export default function BasicButtons({ buttonLable }) {
    const { code } = useCodeStore();

    const handleShare = async () => {
        const sharableLink = await shareCode(code);
        console.log(sharableLink);
    }
    return (
        <Button variant="contained" onClick={handleShare}>
            {buttonLable}
        </Button>
    );
}

BasicButtons.propTypes = {
    buttonLable: PropTypes.string.isRequired,
};