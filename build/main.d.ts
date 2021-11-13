declare abstract class XmenModel {
    name: string;
    realName: string;
    constructor(name: string, realName: string);
}
declare class XmenCo extends XmenModel {
}
declare let wolverine3: XmenCo;
declare class HeroreAvenger {
    name: string;
    protected team: string | undefined;
    private realName;
    private canFight;
    private wins;
    constructor(name: string, team: string, realName: string);
    bio(): void;
    changePublicTeam(newTeam: string): boolean;
    private changeTeam;
}
declare let antman: HeroreAvenger;
declare class MasterAvenger {
    name: string;
    private realName;
    constructor(name: string, realName: string);
    protected getNameAvenger(): string;
}
declare class Xmen extends MasterAvenger {
    constructor(a: string, b: string);
    getXmenName(): string;
}
declare let ciclope: Xmen;
declare class AvengerExtend {
    name: string;
    realName: string;
    constructor(name: string, realName: string);
    protected getFullName(): void;
}
declare class XmenExtend extends AvengerExtend {
    isMutand: boolean;
    constructor(isMutand: boolean, name: string, realName: string);
    getXmenName(): void;
}
declare const xmen: XmenExtend;
declare class GetAvenger {
    private _name;
    constructor(name?: string);
    get name(): string;
    set name(name: string);
}
declare let ciclopes: GetAvenger;
declare class RealApocalipsis {
    name: string;
    static instance: RealApocalipsis;
    private constructor();
    static llamarApocalipsis(): RealApocalipsis;
    changeName(newName: string): void;
}
declare let real: RealApocalipsis;
declare let apocalips1: void;
declare class StaticXmen {
    static xmenName: string;
    constructor();
    static createXmen(): StaticXmen;
}
declare let wolverine: string;
declare let wolverine2: StaticXmen;
declare let vengador: any;
declare let existe: any;
declare let derrotas: any;
declare let arreglo: number[];
declare let vil: string[];
declare let cualquierValor: any;
declare let largoDelString: number;
declare let esSuperman: boolean;
declare let esBatman: boolean;
declare let esAquaman: boolean;
declare function convertirClark(): boolean;
declare enum Volumen {
    min = 1,
    medium = 5,
    max = 10
}
declare let audio: number;
declare function errores(mensaje: string): never;
declare let avengers: number;
declare let villanos: number;
declare let otros: number;
declare let batman: string;
declare let linternaVerde: string;
declare let volcanNegro: string;
declare let concatenar: string;
declare let concat: string;
declare let heroes: [string, number, boolean];
declare function llamar_batman(): void;
declare let mensaje: void;
declare let heroe: string;
declare function hereo_name(): string;
declare let signal_batman: () => string;
declare function sumar(a: number, b: number): number;
declare let contar: (heroes: string[]) => number;
declare let superHeroes: string[];
declare function llamarBatman(llamar?: boolean): void;
declare function unirheroes(nombre: string, ...personas: any[]): string;
interface Nothing {
    numero: number;
    texto: string;
    booleano: boolean;
    arreglo: string[];
}
declare function noHaceNada(numero: number, texto: string, booleano: boolean, arreglo: string[]): Nothing;
declare let noHaceNadaTampoco: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => Nothing;
declare function nombreObligatorio(nombre: string, apellido: string, capitalize?: boolean): string;
declare function nombreOpcional(nombre: string, apellido?: string): string;
declare function toCapitalize(word: string): string;
declare function nombreRest(nombre: string, ...rest: string[]): string;
declare let nombreCompleto: string;
declare let nombre: string;
declare let apiNames: string;
declare function plus(a: number, b: number): number;
declare function saludar(nombre: string): string;
declare function salvarMundo(): void;
declare let myFuction: any;
declare let myFuction2: (a: number, b: number) => number;
declare let myFuction3: () => void;
declare namespace Validation {
    const validateText: (text: string) => boolean;
    const validateDate: (myDate: Date) => boolean;
}
declare type Heroe = {
    name: string;
    age: number;
    powers: string[];
    getName: () => string;
};
declare let flash: Heroe;
declare let superman: Heroe;
declare let villano: string | number | Heroe;
declare let cosa: any;
declare let cosa2: any;
declare type Auto = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
};
declare let batimovil: Auto;
declare let bumblebee: Auto;
declare type Villano = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
};
declare let villanos1: Villano[];
declare type Charles = {
    poder: string;
    estatura: number;
};
declare type Apocalipsis = {
    lider: boolean;
    miembros: string[];
};
declare let charles: Charles;
declare let apocalipsis: Apocalipsis;
declare let mystique: Charles | Apocalipsis;
declare function sumar1(a: number, b: number): number;
declare let sumar2: (a: number, b: number) => number;
declare function giveOrder(order: string): string;
declare let giveOrder2: (order: string) => string;
declare let captain_america: {
    name: string;
    order: () => void;
};
declare class AvengerModel {
    nombre: string;
    poder: string;
    constructor(nombre: string, poder: string);
}
declare class AvengerVolador extends AvengerModel {
    volar: boolean;
    constructor(nombre: string, poder: string);
}
declare let hulk: AvengerModel;
declare let falcon: AvengerVolador;
declare type Avenger = {
    ironman: string;
    nick: string;
    vision: string;
};
declare let avengers1: Avenger;
declare let warmachine: string, nick: string, vision: string;
declare let avengers2: string[];
declare let avenger1: string;
declare let avenger2: string;
declare let avenger3: string;
declare const HEROE = "Spiderman";
declare let spiderman: string;
declare let venom: string;
declare let versiones: string[];
declare let spiderman2099: string, spidergirl: string, ultimate: string;
declare var villanos12: {
    venom: string;
    carnage: string;
    sandman: string;
};
declare let spidermanBlack: string, carnage: string, sandman: string;
declare type AvengerType = {
    name: string;
    weapon: string;
};
declare let iroman: AvengerType;
declare let thor: AvengerType;
declare let capitan: AvengerType;
declare let avengersArray: AvengerType[];
declare let name1: string;
declare let name2: string;
declare function getNames(): string;
declare let menssage: string;
declare var nombre1: string;
declare let nombre4: string;
declare let nombre5: string;
declare const OPCIONES: string;
declare const AUDIO: {
    status: boolean;
    audio: number;
    last: string;
};
declare module "ts-node/generics/generics" {
    export const printObject: (argument: any) => void;
    export function genericFunct<T>(argument: T): T;
    export const genericFunctArrow: <T>(argument: T) => T;
}
declare module "ts-node/backup/generics" { }
declare module "ts-node/decorators/PokemonClass" {
    export class PokemonClass {
        name: string;
        publicAPI: string;
        constructor(name: string);
    }
}
declare module "ts-node/interfaces/pokemon" {
    export interface PokemonResponse {
        abilities: Ability[];
        base_experience: number;
        forms: Species[];
        game_indices: GameIndex[];
        height: number;
        held_items: any[];
        id: number;
        is_default: boolean;
        location_area_encounters: string;
        moves: Move[];
        name: string;
        order: number;
        past_types: any[];
        species: Species;
        sprites: Sprites;
        stats: Stat[];
        types: Type[];
        weight: number;
    }
    export interface Ability {
        ability: Species;
        is_hidden: boolean;
        slot: number;
    }
    export interface Species {
        name: string;
        url: string;
    }
    export interface GameIndex {
        game_index: number;
        version: Species;
    }
    export interface Move {
        move: Species;
        version_group_details: VersionGroupDetail[];
    }
    export interface VersionGroupDetail {
        level_learned_at: number;
        move_learn_method: Species;
        version_group: Species;
    }
    export interface GenerationV {
        "black-white": Sprites;
    }
    export interface GenerationIv {
        "diamond-pearl": Sprites;
        "heartgold-soulsilver": Sprites;
        platinum: Sprites;
    }
    export interface Versions {
        "generation-i": GenerationI;
        "generation-ii": GenerationIi;
        "generation-iii": GenerationIii;
        "generation-iv": GenerationIv;
        "generation-v": GenerationV;
        "generation-vi": {
            [key: string]: Home;
        };
        "generation-vii": GenerationVii;
        "generation-viii": GenerationViii;
    }
    export interface Sprites {
        back_default: string;
        back_female: null;
        back_shiny: string;
        back_shiny_female: null;
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
        other?: Other;
        versions?: Versions;
        animated?: Sprites;
    }
    export interface GenerationI {
        "red-blue": RedBlue;
        yellow: RedBlue;
    }
    export interface RedBlue {
        back_default: string;
        back_gray: string;
        front_default: string;
        front_gray: string;
    }
    export interface GenerationIi {
        crystal: Crystal;
        gold: Crystal;
        silver: Crystal;
    }
    export interface Crystal {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    }
    export interface GenerationIii {
        emerald: Emerald;
        "firered-leafgreen": Crystal;
        "ruby-sapphire": Crystal;
    }
    export interface Emerald {
        front_default: string;
        front_shiny: string;
    }
    export interface Home {
        front_default: string;
        front_female: null;
        front_shiny: string;
        front_shiny_female: null;
    }
    export interface GenerationVii {
        icons: DreamWorld;
        "ultra-sun-ultra-moon": Home;
    }
    export interface DreamWorld {
        front_default: string;
        front_female: null;
    }
    export interface GenerationViii {
        icons: DreamWorld;
    }
    export interface Other {
        dream_world: DreamWorld;
        home: Home;
        "official-artwork": OfficialArtwork;
    }
    export interface OfficialArtwork {
        front_default: string;
    }
    export interface Stat {
        base_stat: number;
        effort: number;
        stat: Species;
    }
    export interface Type {
        slot: number;
        type: Species;
    }
}
declare module "ts-node/generics/getPokemons" {
    export const getPokemons: (id: number) => Promise<number>;
}
declare module "ts-node/interfaces/heroe" {
    export interface Heroe {
        name: string;
        realName: string;
    }
}
declare module "ts-node/interfaces/villain" {
    export interface Villain {
        name: string;
        dangerLVL: number;
    }
}
declare module "ts-node/interfaces/index" {
    export { Villain } from "ts-node/interfaces/villain";
    export { Heroe } from "ts-node/interfaces/heroe";
}
declare module "ts-node/src/index" { }
declare module "ts-node/src/classes/Heroe" {
    export class Heroe {
        name: string;
        powerID: number;
        age: number;
        constructor(name: string, powerID: number, age: number);
    }
}
//# sourceMappingURL=main.d.ts.map