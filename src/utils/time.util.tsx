function getNumberStringWithWidth(num: Number, width: number) {
  const str = num.toString();
  if (width > str.length) return "0".repeat(width - str.length) + str;
  return str.substr(0, width);
}

export function getTimestamp() {
  const date = new Date();
  const h = getNumberStringWithWidth(date.getHours(), 2);
  const min = getNumberStringWithWidth(date.getMinutes(), 2);
  const sec = getNumberStringWithWidth(date.getSeconds(), 2);
  const ms = getNumberStringWithWidth(date.getMilliseconds(), 3);
  return `${h}:${min}:${sec}.${ms}`;
}
