import * as React from 'react';
import TextField from '@mui/material/TextField';
import { getCode } from '../../services/Sharecode';
import { useState } from 'react';
import { useCodeStore } from '../../store/codeStore';
/**
 * TODO: Result is not updating when the URL is pasted
 * URLInput component
 * @returns {React.Component}
 */




export default function BasicTextFields() {
  const [codeID, setCodeID] = useState('');
  const {setUpdatedCode} = useCodeStore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
  
    const codeFromDB = await getCode(codeID);
    setUpdatedCode(codeFromDB);
  };

    return ( 
      <form onSubmit={handleSubmit}>
      <TextField id="filled-basic"label="Paste shared URL.." color="secondary"  onChange={(e)=>setCodeID(e.target.value)}
      />
      </form>
  );
}
