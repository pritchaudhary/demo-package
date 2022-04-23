export const transformNullToString = (value) => {
  if (typeof value === "number") return value.toString();
  if (!value || value === ".") return "";
  return value.toString();
};
