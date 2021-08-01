import type { GroupTypes } from './types';

enum ComboClass {
    Archery = "Archery",
    Spellcraft = "Spellcraft",
}

enum ComboItemType {
    Exhaust = "Exhaust",
    PerEncounter = "Per Encounter",
}

interface ComboItem {
    itemType: ComboItemType | null,
    flavor: string,
}

interface Combo {
    ComboClass: ComboClass,
    ComboList: Array<ComboItem>
}

interface Passive {
    die: number,
    flavor: string,
}

interface RelicTypes {
    combo: Combo | null,
    exhaust: Array<string> | null,
    flip: string,
    group: GroupTypes,
    id: number,
    isUnique: boolean,
    passive: Array<Passive> | null,
    perEncounter: Array<string> | null,
}