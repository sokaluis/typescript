export const printObject = (argument: any) => {
  console.log(argument);
};

export function genericFunct<T>(argument: T): T {
  return argument;
}

export const genericFunctArrow = <T>(argument: T): T => {
  return argument;
};
