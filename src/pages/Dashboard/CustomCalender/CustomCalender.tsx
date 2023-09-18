import React, { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { Tooltip } from '@chakra-ui/react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaCalendarDay, FaCalendarWeek, FaCalendarAlt, FaCalendar } from 'react-icons/fa';
import { EventClickArg } from '@fullcalendar/core';

// import './calendar.css'; // Import your CSS file for custom styling

interface Task {
  title: string;
  start: string;
  end: string;
  description: string;
  location: string;
}

const MyCalendar: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleAddTask = () => {
    const newTask: Task = {
      title: 'Task 1',
      start: '2023-07-23',
      end: '2023-07-25',
      description: 'This is task 1 description',
      location: 'Task Location',
    };
    setTasks([...tasks, newTask]);
  };

  const renderEventContent = (eventInfo: any) => {
    const { event } = eventInfo;

    return (
      <Tooltip label={event.extendedProps.description} placement="top">
        <div>{event.title}</div>
      </Tooltip>
    );
  };

  const handleEventClick = (arg: EventClickArg) => {
    const clickedEvent = arg.event;
    console.log(clickedEvent.extendedProps);
    // Handle event click
  };

  const handleDatesSet = (arg: any) => {
    console.log(arg.start, arg.end);
    // Handle dates set
  };

  const handleViewChange = (view: string) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().changeView(view);
    }
  };

  const handleCellClick = (arg: DateClickArg) => {
    setSelectedDate(arg.dateStr);
  };

  const handleCellSelectionComplete = () => {
    // Perform actions with the selected cells
    console.log(selectedDate);
  };

  const calendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: tasks.map(task => ({
      title: task.title,
      start: task.start,
      end: task.end,
      extendedProps: {
        description: task.description,
        location: task.location,
      },
    })),
    eventContent: renderEventContent,
    eventClick: handleEventClick,
    datesSet: handleDatesSet,
    dateClick: handleCellClick, // Use custom cell click event
    selectable: true, // Enable cell selection
    select: handleCellSelectionComplete, // Trigger function when cell selection is complete
    eventRender: function(info : any) {
      if (selectedDate && info.event.startStr === selectedDate) {
        info.el.classList.add('selected-date');
      }
    },
    // Add more options as per your requirements
  };

  return (
    <div>
      <ButtonGroup>
        <IconButton
          aria-label="Month View"
          icon={<FaCalendarAlt />}
          onClick={() => handleViewChange('dayGridMonth')}
        />
        <IconButton
          aria-label="Week View"
          icon={<FaCalendarWeek />}
          onClick={() => handleViewChange('timeGridWeek')}
        />
        <IconButton
          aria-label="Day View"
          icon={<FaCalendarDay />}
          onClick={() => handleViewChange('timeGridDay')}
        />
        <IconButton
          aria-label="Year View"
          icon={<FaCalendar />}
          onClick={() => handleViewChange('dayGridYear')}
        />
      </ButtonGroup>
      <button onClick={handleAddTask}>Add Task</button>
      <FullCalendar {...calendarOptions} ref={calendarRef} />
    </div>
  );
};

export default MyCalendar;
