import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import * as monaco from "monaco-editor";
import { useCodeStore } from '../../store/codeStore';


export default function LanguageSelectBtn() {
  /**
   * Get all available languages from monaco editor
   * Slice the first 10 languages
   * if alises is not null/undefines, Map the languages to get the aliases or names
   * Unshift the "HTML", "CSS", "Javascript" languages to the beginning of the array
   */
  const availableLanguagesObjs = monaco.languages.getLanguages().slice(0, 10);
  const programmingLanguages = availableLanguagesObjs.map((lango) => lango.aliases?.[0])
  programmingLanguages.unshift("HTML", "CSS", "Javascript");

  const { language, setLanguage } = useCodeStore();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  /**
   * When the button is clicked, set the language to the selected language
   */
  const handleClick = () => {
    setLanguage(programmingLanguages[selectedIndex]);
  };

  /**
   * When a language is selected, set the language to the selected language
   * and close the menu
   */
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    setLanguage(programmingLanguages[index]);
  };
 

  /**
   * Toggle the menu
   */
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  /**
   * Close the menu when the user clicks away
   */
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
      >
        {/* Language Select Button */}
        <Button variant='outlined'
        onClick={handleClick }
         sx={{
          backgroundColor: "#364153",
          color: "white",
        }} >{language}</Button>

        {/* Language Select Menu */}
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#364153",
            color: "white",
          }}
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          {/* Language Select Icon */}
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="top-start"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'top' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {programmingLanguages.map((lang, index) => (
                    <MenuItem
                      key={lang}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {lang}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}


