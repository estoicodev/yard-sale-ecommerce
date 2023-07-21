export function formatNumberWithComma(number) {
  if (!number) {
    // console.error("formatNumberWithComma: number is not defined");
    return "";
  }
  
  const parts = String(number).split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1] ? parts[1].padEnd(2, "0") : "00";
  return `${integerPart},${decimalPart}`;
}
