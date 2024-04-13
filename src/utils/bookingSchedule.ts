interface Option {
  value: string;
  label: string;
}

export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  return date.toLocaleDateString("en-US", options);
}

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

function isTomorrow(date: Date): boolean {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    date.getDate() === tomorrow.getDate() &&
    date.getMonth() === tomorrow.getMonth() &&
    date.getFullYear() === tomorrow.getFullYear()
  );
}

export function generateDayOptions(delivery: string = "") {
  const options: Array<Option> = [];
  const today = new Date();
  const startIndex = delivery ? 1 : 0;
  const endIndex = delivery ? 8 : 7;

  for (let i = startIndex; i < endIndex; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const dateString = formatDate(date);

    let label: string;
    if (isToday(date)) {
      label = "Today";
    } else if (isTomorrow(date)) {
      label = "Tomorrow";
    } else {
      label = dateString;
    }

    options.push({ value: dateString, label: label });
  }
  return options;
}

export function generateTimeOptions(selectedDate: Date): Array<Option> {
  const options: Array<Option> = [];
  const today = new Date();
  const currentHour = today.getHours();
  let startTime: Date;

  // Set the start time based on whether the selected date is today or not
  if (
    selectedDate.getDate() === today.getDate() &&
    selectedDate.getMonth() === today.getMonth() &&
    selectedDate.getFullYear() === today.getFullYear()
  ) {
    // If selected date is today, start from the current hour
    startTime = new Date(today);
    startTime.setHours(currentHour, 0, 0, 0);
  } else {
    // If selected date is not today, start from 09:00
    startTime = new Date(selectedDate);
    startTime.setHours(9, 0, 0, 0);
  }

  // Generate options for each hour until 22:00
  while (startTime.getHours() <= 19) {
    const endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 3); // Interval of 3 hours

    options.push({
      value: `${formatTime(startTime)} - ${formatTime(endTime)}`,
      label: `${formatTime(startTime)} - ${formatTime(endTime)}`,
    });

    startTime.setHours(startTime.getHours() + 1); // Next hour
  }

  return options;
}

export function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return date.toLocaleTimeString("en-US", options);
}

export const collectionOption: Array<Option> = [
  { value: "Collect from me in person", label: "Collect from me person" },
  { value: "Collect from outside", label: "Collect from outside" },
  {
    value: "Collect from reception/porter",
    label: "Collect from reception/porter",
  },
];
export const deliveryOption: Array<Option> = [
  { value: "Deliver to me in person", label: "Deliver to me in person" },
  { value: "Leave at door", label: "Leave at door" },
  {
    value: "Deliver to reception/porter",
    label: "Deliver to reception/porter",
  },
];
