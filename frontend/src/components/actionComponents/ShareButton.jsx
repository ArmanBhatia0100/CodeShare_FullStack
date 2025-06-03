import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import { useCodeStore } from '../../store/codeStore';
import { shareCode } from '../../services/Sharecode';
export default function BasicButtons({ buttonLable }) {
    const { code, language, setPublicLink } = useCodeStore();

    /**
     * Share the code
     * @returns {Promise<string>}
     * @description Share the code by taking the code and the programming language, and return the sharable link
     */
    const handleShare = async () => {
        const sharableLink = await shareCode(code, language);
        const { publicLink } = sharableLink;
        setPublicLink(publicLink);
        console.log("Shareable Link: ", publicLink);
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