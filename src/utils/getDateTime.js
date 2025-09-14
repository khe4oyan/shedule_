export default function getDateTime(time) {
  const currentDate = new Date();
  const dateTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), ...time.split(":")).getTime();
  return dateTime;
}