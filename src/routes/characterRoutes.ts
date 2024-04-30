import express from 'express';
import CharacterController from '../controllers/characterController';
import CharacterService from '../services/characterService'; 

const router = express.Router();
const characterService = new CharacterService();
const characterController = new CharacterController(characterService);

router.get('/', characterController.getAllCharacters);
router.get('/:id', characterController.getCharacterById);

export default router;
