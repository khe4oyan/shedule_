export default function timerFormat(inputSeconds) {
  if (inputSeconds < 60) {
    return inputSeconds;
  }

  let result = "";

  const hours = Math.floor(inputSeconds / 3600);
  const minutes = Math.floor((inputSeconds % 3600) / 60);
  const seconds = inputSeconds % 60;

  if (hours > 0) result += `${hours}:`;
  if (minutes > 0) result += `${minutes < 10 ? `0${minutes}` : minutes}:`;
  result += `${seconds < 10 ? `0${seconds}` : seconds}`;

  return result;
}