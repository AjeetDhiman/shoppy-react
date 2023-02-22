import React from "react";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";

import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 rounded-3xl">
      <Header category="Page" title="Calendar" />
      <ScheduleComponent
        height="650px"
        //  ref={(schedule) => setScheduleObj(schedule)}
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        //  dragStart={onDragStart}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
