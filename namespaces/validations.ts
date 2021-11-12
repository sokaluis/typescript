namespace Validation {
  export const validateText = (text: string) => {
    if (text.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  export const validateDate = (myDate: Date) => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

Validation.validateText("Fernando");
Validation.validateDate(new Date());
