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
        // Configura o comando PutObject
        const command = new PutObjectCommand({
          Bucket: process.env.CLOUDFLARE_BUCKET,
          Key: key,
          ContentType: contentType,
        });

        // Gera a URL assinada
        const signedUrl = await getSignedUrl(r2, command, { expiresIn: 3600 }); // Expira em 1 hora
        return signedUrl;
      } catch (error) {
        console.error('Erro ao gerar URL assinada:', error);
        throw new Error('Não foi possível gerar a URL assinada.');
      }
    },

}}
