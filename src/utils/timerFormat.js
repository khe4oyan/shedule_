export default function timerFormat(inputSeconds) {
  if (inputSeconds < 1) {
    return '0 sec.';
  }

  let result = "";

  const hours = Math.floor(inputSeconds / 3600);
  const minutes = Math.floor((inputSeconds % 3600) / 60);
  const seconds = inputSeconds % 60;

  if (hours > 0) result += `${hours}h. `;
  if (minutes > 0) result += `${minutes}min. `;
  if (seconds > 0) result += `${seconds}sec.`;

  return result;
}