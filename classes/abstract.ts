abstract class XmenModel {
  constructor(public name: string, public realName: string) { }
}

class XmenCo extends XmenModel { } // By default it will be call the extended constructor

let wolverine3 = new XmenCo("Wolverine", "Logan");

console.log(wolverine3);