import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import mongoose from 'mongoose'
import resolvers from './graphql/resolvers.js'
import typeDefs from './graphql/typeDefs.js'
import 'dotenv/config'

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4zesnox.mongodb.net/?retryWrites=true&w=majority`,
      { dbName: process.env.DB_NAME }
    )
    console.log('MongoDB conectado com sucesso!')
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error)
    process.exit(1)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  status400ForVariableCoercionErrors: true,
})

async function startServer() {
  await connectDB()

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: process.env.PORT || 4000 },
  })

  console.log(`🚀  Server pronto em: ${url}`)
}

startServer()
