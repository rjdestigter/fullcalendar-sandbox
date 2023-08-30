import React from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventInput } from '@fullcalendar/core';

const plugins = [timeGridPlugin, dayGridPlugin];

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:30:00",
    end: todayStr + "T01:00:00",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
    end: todayStr + "T02:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

function App() {
  return (
    <div className="App">
      <header></header>
      <FullCalendar
        ref={(ref) => {
          // ref?.getApi().select('2021-05-01')
        }}
        plugins={plugins}
        initialView="timeGridWeek"
        dayHeaders
        initialEvents={INITIAL_EVENTS}
        eventContent={renderEventContent}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek,timeGridDay,dayGridMonth",
        }}
      />
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <div>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

export default App;
