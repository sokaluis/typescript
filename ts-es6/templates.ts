let name1 = "Bruce";
let name2 = "Ricardo";

function getNames(): string {
  return `${name1} ${name2}`
}

let menssage: string = `
1. Linea normal
2. Robin es: ${name2}
3. Hola ${name1}
4. Los nombres son: ${getNames()}
5. ${name1.length + name2.length}
`;