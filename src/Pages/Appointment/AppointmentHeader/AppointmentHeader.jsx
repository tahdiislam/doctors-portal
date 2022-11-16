import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';

const AppointmentHeader = ({ dateSelected, setDateSelected }) => {
    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='max-w-sm md:w-1/2'>
                        <DayPicker
                            mode='single'
                            selected={dateSelected}
                            onSelect={setDateSelected}
                        />;
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentHeader;