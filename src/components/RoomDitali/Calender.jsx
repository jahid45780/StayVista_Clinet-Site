/* eslint-disable no-undef */
import { DateRange } from 'react-date-range';
const Calender = ({value}) => {
    // console.log(value);
    return (
     <DateRange
         rangeColors={[ "#6e67da" ]}  
         ranges={[value]}
        direction='vertical'
        showDateDisplay={false}
   
     ></DateRange>
     
    );
};

export default Calender;