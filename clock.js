const getDateTime = () => {
  let dateTime = new Date();
  let date = dateTime.toDateString();
  let time = dateTime.toTimeString();
  return {
    date: date,
    time: time,
  };
};

const showDateTime = (dateTime) => {
  const dateContainer = document.getElementById("clock-date");
  const timeContainer = document.getElementById("clock-time");
  dateContainer.innerText = dateTime.date;
  timeContainer.innerText = dateTime.time;
};

showDateTime(getDateTime());