import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

console.log(process.env.GRAPHQL_TOKEN)
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
