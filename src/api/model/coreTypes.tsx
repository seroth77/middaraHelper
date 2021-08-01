import type { GroupTypes } from './types';

interface Passive {
    die: number | null,
    flavor: string,
}

interface CoreTypes {
    exhaust: Array<string>,
    defense: number,
    flip: string | null,
    group: GroupTypes,
    health: number,
    id: number,
    isUnique: boolean,
    movement: number,
    passive: Array<Passive>,
}