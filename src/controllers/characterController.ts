import { Request, Response } from 'express';
import CharacterService from '../services/characterService';

export default class CharacterController {
    private characterService: CharacterService;

    constructor(characterService: CharacterService) {
        this.characterService = characterService;
    }

    getAllCharacters = (req: Request, res: Response) => {
        console.log('req', req);
        const animeInfo = this.characterService.getAllCharacters()
        res.json(animeInfo);
    }

    getCharacterById = (req: Request, res: Response) => {
        console.log('req', req);
        const animeInfo = this.characterService.getCharacterById()
        res.json(animeInfo);
    };
}

