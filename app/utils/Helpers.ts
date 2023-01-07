
import moment from "moment";

export const humanizeDate = (date: any, time: boolean = false) => {
  return moment(date).format(`LL${time ? "L" : ""}`);
};

export function formatString(string: string, replacements: string[]): string {
  return string.replace(/{(\d+)}/g, function (match, number) {
    return typeof replacements[number] !== "undefined"
      ? replacements[number]
      : match;
  });
}


export const makeStringFirstLetterUppercase = (string: string) => {
  return string?.charAt(0)?.toUpperCase() + string?.slice(1);
};

export const defaultAvatarWithFistLetter = (string: string) => {
    return string.charAt(0).toUpperCase();
  };

export const checkForDuplicatesArrayValues = (array: string[]) => {
  const results:string[] = array?.filter((element:any) => {
    return element !== '';
  });
  return results?.filter((item:any, index:number) => results?.indexOf(item) === index);
};

export const checkDuplicatesArray = (array: string[]) => {

  for (let i = 0; i < array?.length; i++) {
    if (array.indexOf(array[i]) !== array?.lastIndexOf(array[i])) {
      return true
    }
  }
  return false
 
};


export const isEmptyObject = (obj: object | any) => {
  return Object.keys(obj).length === 0;
};



export const RemoveArrayElementsFromOtherArray = (
  originalArray: any,
  toRemovedArray: any
) => {
  let temp = originalArray.filter((el: never) => !toRemovedArray.includes(el));
  return temp;
};

export const RemoveItemFromArray = (originalArray: any, item: any) => {
  let temp = originalArray.filter((i: any) => i !== item);
  return temp;
};


export const getRoundOffNumbers = (number: number) => {
  let temp = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumSignificantDigits: 4,
  }).format(number);
  return temp;
};


export const InsertArrayElementAtIndex = (
  arr: [],
  index: number,
  newItem: any
) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

export const getNestedPropertyByString = (object:any, firstKey:string | number, secondKey:string | number) => {
  let t: any = object?.[firstKey];
  let p: any = t && t.length > 0 && t?.[secondKey];
  return p;
};