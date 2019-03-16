export interface PokemonOptions {
    id: number;
    name: string;
    order: number;
    weight: string;
    height: string;
    base_experience: number;
    sprites: SpriteDetail;
}

interface SpriteDetail {
    front_default: string;
}
