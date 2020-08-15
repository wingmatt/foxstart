const getDateTime = () => {
  let dateTime = new Date();
  let date = dateTime.toDateString();
  let time = dateTime.toTimeString();
  return {
    date: date,
    time: time,
  };
};

