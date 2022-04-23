// export default async function makeDom(tag, props, children) {
//   let el = document.createElement(tag);
//   el.append(...(await children));
//   return Object.assign(el, props);
// }

export const transformNullToString = (value) => {
  if (typeof value === "number") return value.toString();
  if (!value || value === ".") return "";
  return value.toString();
};

export const amountToThousandSeparator = (value) => {
  console.log("PRITAM", value);
  return transformNullToString(value)
    .replace(/\D/g, "")
    .replace(/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g, "$1, ");
};
