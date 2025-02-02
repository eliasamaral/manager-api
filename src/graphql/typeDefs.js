import path from 'node:path'
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs
