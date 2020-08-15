const getDateTime = () => {
  let now = dayjs();
  let month = now.format("MMM");
  let date = now.format("D");
  let time = now.format("h:mma");
  return {
    month: month,
    date: date,
    time: time,
  };
};

const showDateTime = (dateTime) => {
  const monthContainer = document.getElementById("clock-month");
  const dateContainer = document.getElementById("clock-date");
  const timeContainer = document.getElementById("clock-time");
  monthContainer.innerText = dateTime.month;
  dateContainer.innerText = dateTime.date;
  timeContainer.innerText = dateTime.time;
};

showDateTime(getDateTime());
