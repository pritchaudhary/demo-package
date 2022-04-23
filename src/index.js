const transformNullToString = (value) => {
  if (typeof value === "number") return value.toString();
  if (!value || value === ".") return "";
  return value.toString();
};

const amountToThousandSeparator = (value) => {
  const result = transformNullToString(value)
    .replace(/\D/g, "")
    .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1, ");

  return result;
};

export default { transformNullToString, amountToThousandSeparator };
