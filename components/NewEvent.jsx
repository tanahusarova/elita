import React, {useState} from "react"
import Select from 'react-select'
import makeAnimated from 'react-select/animated';



import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import InputColor from 'react-input-color';

import { TimePicker } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import Plans from "./Plans";
import LongMenu from "./LongMenu";



export const NewEvent = () => {

    //nazov, typ, farba, od, do, poznamka, kto ma vidiet, kto sa ucasti

    const [name, setName] = useState('');
    const [type, setType] = useState(false);
    const [color, setColor] = useState('');
    const [time_from, setFrom] = useState('');
    const [time_to, setTo] = React.useState(new Date(''));
    const [comment, setComment] = useState('');
    const [value, setValue] = React.useState(new Date(''));

    const animatedComponents = makeAnimated();

    const handleSubmit = () => {
        console.log();
    }

    const handleChange = (newValue) => {
        setValue(newValue);
      };

    const options = [
        { value: true, label: 'skola',  },
        { value: true, label: 'hobby' },
        { value: true, label: 'stretnutia' },
        { value: false, label: 'spolocne plany' },
        { value: false, label: 'ine' }


      ]

    const optionsNames = [
        { value: 'jozko', label: 'jozko' },
        { value: 'ferko', label: 'ferko' },
        { value: 'lubka', label: 'lubka' },
        { value: 'kika', label: 'kika' }

      ]

      const handleSelection = (selectedOption) =>{
        setType(selectedOption.value);
      };

    return (
      <div>
        <div className="new-event-container">
        <form onSubmit={handleSubmit} className="new-event-buttons">
            <label htmlFor="name">name </label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="konzultacie so skolitelom" id="name" name="name" />

            <label htmlFor="type"> type </label>
            <Select onChange={handleSelection} options={options} />

            <Select
             isDisabled={type}
             closeMenuOnSelect={true}
             components={animatedComponents}
             isMulti
             options={optionsNames}
             />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <label htmlFor="date">date </label>
            <DatePicker /> 
            
            <label htmlFor="time_from">from </label>            
            <TimePicker 
             value={value}
             onChange={(newValue) => setFrom(newValue)}/>

            <label htmlFor="time_to">to </label>            
            <TimePicker 
            value={value}/>

            </LocalizationProvider>
            <label htmlFor="comment">comment </label>
            <input value={comment} onChange={(e) => setComment(e.target.value)} type="comment" placeholder="comment" id="comment" name="comment" />
           
            <label htmlFor="color">color</label>
            <InputColor
             initialValue="#8ba613"
             onChange={setColor}
             placement="right"
             />
            
        <button className="button-front-page" type="submit" onClick={() => handleSubmit()}>Log In</button>
        </form>
        </div>
        </div>
    )
}