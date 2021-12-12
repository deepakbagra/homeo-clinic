import { React, useState } from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const DatePickers = () => {

    const [selectDate, setSelectDate] = useState(new Date())

    const handleDateChange = (date) => {
        setSelectDate(date)
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker              
                format='MMM/dd/yyyy'
                variant='dialog'
                margin='normal'
                id='date-picker'
                label='DoB'
                value={selectDate}
                required
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    "aria-label": 'change date'
                }}
                />
        </MuiPickersUtilsProvider>
    )
}

export default DatePickers
