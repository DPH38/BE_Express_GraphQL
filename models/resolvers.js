const { obterDados, salvarDados } = require('../controllers/restController');

const resolvers = {
  Query: {
    periodos: () => obterDados(),
    disciplinas: () => obterDados().flatMap(period => period.disciplinas),
    disciplina: (_, { id }) => obterDados().flatMap(period => period.disciplinas).find(d => d.id === id),
  },
  Mutation: {
    criarDisciplina: (_, { periodo, nome, descricao }) => {
      const data = obterDados();
      const period = data.find(p => p.periodo === periodo);
      if (period) {
        const newDiscipline = {
          id: (Math.max(...data.flatMap(p => p.disciplinas.map(d => parseInt(d.id)))) + 1).toString(),
          nome,
          descricao
        };
        period.disciplinas.push(newDiscipline);
        salvarDados(data);
        return newDiscipline;
      } else {
        throw new Error('Período não encontrado');
      }
    },
    atualizarDisciplina: (_, { id, nome, descricao }) => {
      const data = obterDados();
      const discipline = data.flatMap(period => period.disciplinas).find(d => d.id === id);
      if (discipline) {
        discipline.nome = nome || discipline.nome;
        discipline.descricao = descricao || discipline.descricao;
        salvarDados(data);
        return discipline;
      } else {
        throw new Error('Disciplina não encontrada');
      }
    },
    removerDisciplina: (_, { id }) => {
      const data = obterDados();
      let deletedDiscipline;
      data.forEach(period => {
        const index = period.disciplinas.findIndex(d => d.id === id);
        if (index !== -1) {
          deletedDiscipline = period.disciplinas.splice(index, 1)[0];
        }
      });
      if (deletedDiscipline) {
        salvarDados(data);
        return deletedDiscipline;
      } else {
        throw new Error('Disciplina não encontrada');
      }
    }
  }
};

module.exports = resolvers;