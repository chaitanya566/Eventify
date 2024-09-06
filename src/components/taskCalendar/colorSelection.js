import colorOptions  from "src/utils/colorOptions"

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorOptions.length);
  return colorOptions[randomIndex];
}
