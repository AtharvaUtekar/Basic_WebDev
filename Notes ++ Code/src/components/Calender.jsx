
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import TodaySharpIcon from '@material-ui/icons/TodaySharp';

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <button
    
      readOnly
      ref={ref} // necessary
      style={{
        position: 'absolute',
        textAlign: 'center',
        padding: '1rem 1rem',
        margin: '0',
        fontSize: '1.5rem',
        border: '1px solid #9c88ff',
        borderRadius: '2rem',
        boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
        color: '#9c88ff',
        outline: 'none',
      }}
      className="my-custom-input-class" // a styling class
    >
        <TodaySharpIcon /> CALENDAR
    </button>
  )

  return (
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      renderInput={renderCustomInput} 
      shouldHighlightWeekends
    />
  );
};

export default Calendar;