function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockProtype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Factory Decorator
function CheckValidPokemonID(): Function {
  return function (
    target: any,
    propertyKey: string,
    desc: PropertyDescriptor // Only is return with Methods not properties
  ) {
    // console.log({ target, propertyKey, desc });
    // desc.value = () => console.log(`HolaMundo`);
    const originalMethod = desc.value;
    desc.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El ID debe de estar entre 1 a 800");
      } else {
        originalMethod(id);
      }
    };
  };
}

// Factory Decorator
function readOnly(isWritable: boolean = true): Function {
  return function (
    target: any,
    propertyKey: string,
    desc: PropertyDescriptor // Only is return with Methods not properties
  ) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Luis Azocar";
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@blockProtype
@printToConsoleConditional(false)
export class PokemonClass {
  @readOnly()
  public publicAPI: string = "https://pokeapi.co/api/v2/";
  constructor(public name: string) {}

  @CheckValidPokemonID()
  savePokemonToDB(id: number) {
    console.log(`Pokemon saved ${id}`);
  }
}
