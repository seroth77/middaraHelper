import type { GroupTypes } from './types';

interface ArmorTypes {
    armor: number,
    defense: number,
    exhaust: Array<string>,
    flip: string | null,
    group: GroupTypes,
    health: number,
    id: number,
    isUnique: boolean,
    movement: number,
    perEncounter: Array<string>,
    passive: Array<string>
}