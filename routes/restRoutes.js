const express = require('express');
const router = express.Router();
const restController = require('../controllers/restController');

router.get('/periodos', restController.obterTodosPeriodos);
router.get('/disciplinas', restController.obterTodasDisciplinas);
router.get('/disciplinas/:id', restController.obterDisciplinaPorId);
router.post('/disciplinas', restController.criarDisciplina);
router.put('/disciplinas/:id', restController.atualizarDisciplina);
router.delete('/disciplinas/:id', restController.removerDisciplina);

module.exports = router;