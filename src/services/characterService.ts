export default class CharacterService {
    constructor(){}

    getAllCharacters = () => {
        return {
            title: 'My Hero Academia',
            synopsis: 'Un mundo donde casi toda la población tiene superpoderes, y sigue a un chico llamado Izuku Midoriya que sueña con convertirse en un héroe a pesar de no tener poderes.',
            episodes: 113,
            ongoing: true
        };
    };

    getCharacterById = () => {
        return {
            title: 'My Hero Academia',
            synopsis: 'Un mundo donde casi toda la población tiene superpoderes, y sigue a un chico llamado Izuku Midoriya que sueña con convertirse en un héroe a pesar de no tener poderes.',
            episodes: 113,
            ongoing: true
        };
    };
}