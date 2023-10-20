function calculatingRemainingTime(date = new Date()) {
  const currentTime = new Date().getTime();
  const ms = date.getTime() - currentTime;

  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    milliseconds: Math.floor(ms) % 1000,
  };
}

function addTimeToDate(params: AddTimeToDateParams) {
  const currentDate = new Date();

  if (params.days) {
    currentDate.setDate(currentDate.getDate() + params.days);
  }

  if (params.months) {
    currentDate.setMonth(currentDate.getMonth() + params.months);
  }

  if (params.hours) {
    currentDate.setHours(currentDate.getHours() + params.hours);
  }

  if (params.minutes) {
    currentDate.setMinutes(currentDate.getMinutes() + params.minutes);
  }

  if (params.seconds) {
    currentDate.setSeconds(currentDate.getSeconds() + params.seconds);
  }

  if (params.milliseconds) {
    currentDate.setMilliseconds(
      currentDate.getMilliseconds() + params.milliseconds
    );
  }

  return currentDate;
}

export { calculatingRemainingTime, addTimeToDate };
