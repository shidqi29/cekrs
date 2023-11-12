export function formattedDate(input) {
  const date = new Date(input);
  const formatted = date.toLocaleDateString("id", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Jakarta",
  });
  if (formatted === "Invalid Date") return "-";
  return formatted;
}
