import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./Calender.css";

export default function DateCalendarViews() {
    return (
        <div className='calender'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
                    <DemoItem >
                        <DateCalendar
                            defaultValue={dayjs('2022-04-17')}
                            views={['year', 'month', 'day']}
                        />
                    </DemoItem>
                </DemoContainer>
            </LocalizationProvider>
        </div>
    );
}
