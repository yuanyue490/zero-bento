export function getCurrentTimeInBeijing(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Convert the UTC time to Beijing time (UTC+8)
  const offsetBeijing = 8;
  now.setHours(now.getUTCHours() + offsetBeijing);

  return now;
}

export function formatTimeForBeijing(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // 使用24小时制，更符合中国习惯
    timeZone: "Asia/Shanghai",
  };

  let formattedTime = new Intl.DateTimeFormat("zh-CN", options).format(date);

  // 添加时区标识
  formattedTime += " CST"; // China Standard Time

  return formattedTime;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
