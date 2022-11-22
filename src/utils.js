const hexPattern = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;

export const hex2rgb = (hex) => {
  const result = hex.match(hexPattern);
  if (result == null) {
    return null;
  }
  console.log(result);
  const red = parseInt(result[1], 16);
  const green = parseInt(result[2], 16);
  const blue = parseInt(result[3], 16);
  return `rgb(${red}, ${green}, ${blue})`;
};
