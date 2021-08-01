import type { GroupTypes } from './types';

enum SymbolType {
    Book = "book",
    Shield = "shield",
    Star = "star",
}

enum DamageType {
    Physical = "physical",
}

enum WeaponType {
    Melee = "melee",
    Range = "range",
}

enum ItemType {
    Exhaust = "Exhaust",
    PerEncounter = "Per Encounter",
    Finesse = "Finesse",
}

interface Combo {
    damage: number,
    die: number | null,
    flavor: Array<string>,
    itemType: ItemType | null,
    requirement: string,
}

interface Exhaust {
    flavor: string,
    requirement: string,
}

interface Symbols {
    count: number,
    damage: number,
    symbol: SymbolType,
    type: DamageType,
}

interface Passive {
    flavor: string,
    itemType: ItemType | null,
}

export interface IWeaponsTypes {
    armor: number,
    combo: Combo | null,
    die: Array<number> | null,
    exhaust: Array<Exhaust> | null,
    group: GroupTypes,
    id: number,
    isUnique: boolean,
    name: string,
    passive: Array<Passive> | null,
    perEncounter: Array<string> | null,
    slot: number,
    symbols: Array<Symbols> | null,
    tags: Array<string>,
    type: WeaponType,
    use: string,
}


