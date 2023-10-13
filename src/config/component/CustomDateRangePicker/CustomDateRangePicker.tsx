import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import "./CustomDateRangePicker.scss";

import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import format from "date-fns/format";
import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

interface CustomDatePickerProps {
  onStartDateChange: (startDate: Date) => void;
  onEndDateChange: (endDate: Date) => void;
  months: number;
}

export default function CustomDateRangePicker({
  onStartDateChange,
  onEndDateChange,
  months,
}: CustomDatePickerProps): JSX.Element {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <Popover placement="bottom-start">
      <>
        <PopoverTrigger>
          <Input
            name="datePicker"
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            width={{ lg: "18rem" }}
            textAlign="center"
          />
        </PopoverTrigger>
        <PopoverContent width="auto">
          <PopoverBody>
            <DateRangePicker
              onChange={(item: any) => {
                setRange([item.selection]);
                onStartDateChange(item.selection.startDate);
                onEndDateChange(item.selection.endDate);
              }}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={months}
              direction="horizontal"
              className="calendarElement"
              rangeColors={["#38B2AC"]}
            />
          </PopoverBody>
        </PopoverContent>
      </>
    </Popover>
  );
}
