const fs = require('fs');
const path = require('path');
const caminhoDados = path.join('E:', 'eng_soft', 'prova2', 'data', 'disciplinas.json');

const obterDados = () => {
  const jsonData = fs.readFileSync(caminhoDados);
  return JSON.parse(jsonData);
};

const salvarDados = (dados) => {
  const stringifyData = JSON.stringify(dados, null, 2);
  fs.writeFileSync(caminhoDados, stringifyData);
};

const obterTodosPeriodos = (req, res) => {
  const dados = obterDados();
  res.json(dados);
};

const obterTodasDisciplinas = (req, res) => {
  const dados = obterDados();
  const disciplinas = dados.flatMap(periodo => periodo.disciplinas);
  res.json(disciplinas);
};

const obterDisciplinaPorId = (req, res) => {
  const dados = obterDados();
  const disciplina = dados.flatMap(periodo => periodo.disciplinas).find(d => d.id === req.params.id);
  if (disciplina) {
    res.json(disciplina);
  } else {
    res.status(404).json({ mensagem: 'Disciplina não encontrada' });
  }
};

const criarDisciplina = (req, res) => {
  const dados = obterDados();
  const { periodo, nome, descricao } = req.body;
  const periodoEncontrado = dados.find(p => p.periodo === periodo);
  if (periodoEncontrado) {
    const novaDisciplina = {
      id: (Math.max(...dados.flatMap(p => p.disciplinas.map(d => parseInt(d.id)))) + 1).toString(),
      nome,
      descricao
    };
    periodoEncontrado.disciplinas.push(novaDisciplina);
    salvarDados(dados);
    res.status(201).json(novaDisciplina);
  } else {
    res.status(400).json({ mensagem: 'Período não encontrado' });
  }
};

const atualizarDisciplina = (req, res) => {
  const dados = obterDados();
  const { nome, descricao } = req.body;
  const disciplina = dados.flatMap(periodo => periodo.disciplinas).find(d => d.id === req.params.id);
  if (disciplina) {
    disciplina.nome = nome || disciplina.nome;
    disciplina.descricao = descricao || disciplina.descricao;
    salvarDados(dados);
    res.json(disciplina);
  } else {
    res.status(404).json({ mensagem: 'Disciplina não encontrada' });
  }
};

const removerDisciplina = (req, res) => {
  const dados = obterDados();
  let disciplinaRemovida;
  dados.forEach(periodo => {
    const index = periodo.disciplinas.findIndex(d => d.id === req.params.id);
    if (index !== -1) {
      disciplinaRemovida = periodo.disciplinas.splice(index, 1)[0];
    }
  });
  if (disciplinaRemovida) {
    salvarDados(dados);
    res.json(disciplinaRemovida);
  } else {
    res.status(404).json({ mensagem: 'Disciplina não encontrada' });
  }
};

module.exports = {
  obterDados,
  salvarDados,
  obterTodosPeriodos,
  obterTodasDisciplinas,
  obterDisciplinaPorId,
  criarDisciplina,
  atualizarDisciplina,
  removerDisciplina
};