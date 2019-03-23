export interface PokemonListOptions {
    next: string;
    previous: string;
    results: PokemonListItemOptions[];
}

export interface PokemonListItemOptions {
    name: string;
    url: string;
}
