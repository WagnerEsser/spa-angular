export interface PokemonOptions {
    id: number;
    name: string;
    order: number;
    weight: string;
    height: string;
    base_experience: number;
    abilities: AbilitiesList[];
    sprites: SpriteDetail;
}

interface AbilitiesList {
    ability: AbilityDetail;
}

interface AbilityDetail {
    name: string;
}
interface SpriteDetail {
    front_default: string;
}
