import File from '../../../models/File'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { r2 } from '../../../lib/r2'
import 'dotenv/config'

export default {
  Query: {
    file: async (_, { _id }) => {
      try {
        return await File.findById(_id)
      } catch (error) {
        console.error('Error fetching file:', error)
        throw new Error('Failed to fetch file')
      }
    },
  },

  Mutation: {
    generateSignedUrl: async (_, { key, contentType }) => {
      try {
        const command = new PutObjectCommand({
          Bucket: process.env.CLOUDFLARE_BUCKET,
          Key: key,
          ContentType: contentType,
        })

        const signedUrl = await getSignedUrl(r2, command, { expiresIn: 600 }) //10min
        return signedUrl
      } catch (error) {
        console.error('Erro ao gerar URL assinada:', error)
        throw new Error('Não foi possível gerar a URL assinada.')
      }
    },

    createdFile: async (_, { data }) => {
      try {
        return await File.create(data)
      } catch (error) {
        console.error('Error creating file:', error)
        throw new Error('Failed to create file')
      }
    },
  },
}
