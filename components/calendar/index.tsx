import classNames from 'classnames';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';

// I am going to come back and clean this later. I feel like it can be simplified.
export const Calendar = (props: {}) => {
  const [selecting, setSelecting] = useState<boolean>(false);
  const [month, setMonth] = useState(dayjs().month() + 1);
  const [year, setYear] = useState(dayjs().year());
  const [selectedDate, setSelectedDate] = useState<Dayjs>(null);
  const [done, setDone] = useState<boolean>(false);
  const [daysInMonth, setDaysInMonth] = useState(dayjs(`${year}-${month}-1`).daysInMonth());

  useEffect(() => {
    if (month > 12) {
      setMonth(1);
      setYear(year + 1);
    }

    if (month === 0) {
      setMonth(12);
      setYear(year - 1);
    }

    setDaysInMonth(dayjs(`${year}-${month}-1`).daysInMonth());
  }, [month]);

  const currentDateSelected = dayjs(`${year}-${month}-1`);

  let daysArray = new Array(daysInMonth).fill(0);
  daysArray.unshift(...new Array(dayjs(`${year}-${month}-1`).day()).fill('-'));
  daysArray = daysArray.map((_: any, index: number) => {
    if (_ !== '-') {
      return index + 1 - daysArray.filter((i) => i === '-').length;
    }
  });

  const dayArray = [].concat.apply(
    [],
    daysArray.map((elem, i) => {
      return i % 7 ? [] : [daysArray.slice(i, i + 7)];
    })
  );

  return (
    <div className={'flex flex-col'}>
      <div className={'flex justify-center'}>
        <span className={'mr-2 flex text-cool-gray-600'}>
          <a onClick={() => setMonth(month - 1)}>&lt;</a>
        </span>
        <p className={'font-bold text-lg'}>{currentDateSelected.format('MMMM YYYY')}</p>
        <span className={'ml-2 flex text-cool-gray-600'}>
          <a onClick={() => setMonth(month + 1)}>&gt;</a>
        </span>
      </div>
      <div key="days" className={'flex mt-1 justify-center'}>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Sunday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Monday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Tuesday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Wensday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Thursday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Friday
        </p>
        <p
          className={classNames(
            'px-2 w-48 flex justify-center items-center h-8 py-1 font-medium text-cool-gray-700 border-b border-purple-500'
          )}
        >
          Saturday
        </p>
      </div>
      {dayArray.map((w: number[], weekIndex: number) => {
        const week: number[] =
          w.length === 6 ? w : [...w, ...new Array(7 - w.length).fill(undefined)];
        return (
          <div key={weekIndex} className={'flex mt-1 justify-center'}>
            {week.map((day: number, index: number) => {
              const today = dayjs().toDate().getDate();
              // const isInvalid =
              //   dayjs(`${year}-${month}-${day}`).isBefore(dayjs().subtract(1, 'd')) ||
              //   dayjs(`${year}-${month}-${day}`).isAfter(dayjs(endDate)) ||
              //   dayjs(`${year}-${month}-${day}`).isBefore(dayjs(startDate));
              return (
                <a
                  key={index}
                  className={classNames(
                    day ? 'hover:bg-primary hover:text-white cursor-pointer' : '',
                    day === today ? 'bg-bg' : '',
                    index % 2 === 0 ? 'text-primary' : '',
                    'border-r border-b border-purple-500 px-2 w-48 flex h-48 py-1 font-medium text-cool-gray-700'
                  )}
                  onClick={() => {
                    setSelecting(true);
                    setSelectedDate(dayjs(`${year}-${month}-${day}`));
                  }}
                >
                  {day}
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
