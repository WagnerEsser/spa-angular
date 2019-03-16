export interface PokemonOptions {
    id: number;
    name: string;
    order: number;
    weight: string;
    height: string;
    base_experience: number;
    sprites: SpriteDetail;
    stats: StatsDetail[];
}

interface SpriteDetail {
    front_default: string;
}

interface StatsDetail {
    stat: StatDetail;
}

interface StatDetail {
    name: string;
}
