import { faker, fakerEL } from '@faker-js/faker'
import { execute } from 'graphql'

const mock = {
  createRDO: {
    dataAtual: faker.date.recent().toLocaleDateString('pt-BR'),
    projeto: `UFV ${faker.location.city()}`,
    local: faker.location.city(),
    encarregado: faker.person.firstName(),
    observacoes: faker.hacker.phrase(),
    clima: {
      manha: faker.helpers.arrayElement(['Bom', 'Nublado', 'Chuvoso']),
      tarde: faker.helpers.arrayElement(['Bom', 'Nublado', 'Chuvoso']),
    },
    dataDaProducao: faker.date.recent().toLocaleDateString('pt-BR'),
    atividades: [
      {
        atividade: `${faker.hacker.verb()} ${faker.hacker.noun()}`,
        duracao: `${faker.number.int({ min: 1, max: 6 })}:00`,
        executante: faker.person.firstName(),
        valor: `${faker.commerce.price(1, 1000, 2)}`,
      },
    ],
    maoDeObra: [
      {
        nome: faker.person.firstName(),
        funcao: faker.person.jobType(),
        inicio: `${faker.number.int({ min: 7, max: 11 })}:00`,
        fim: `${faker.number.int({ min: 13, max: 17 })}:00`,
      },
    ],
  },

  createActivity: {
    name : "MOCK Limpeza",
    description: "MOCK impar ao redor do conteiro",
    price: 100,
  }
}

export default mock
