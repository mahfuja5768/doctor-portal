
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {


  return (
    <header className="hero my-5">
        <div className="hero-content flex-col  items-center lg:flex-row-reverse">
          <img
            src={chair}
            alt="chair"
            className="lg:w-1/2 rounded-lg shadow-2xl w-80 "
          />
          <div className="mr-6 shadow-xl bg-white p-3 rounded-xl">
          <DayPicker 
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p>You have selected date: {format(selectedDate, 'PP')}</p>
          </div>
        </div>
    </header>
  );
};

export default AppointmentBanner;
