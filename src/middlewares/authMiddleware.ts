import { FastifyRequest, FastifyReply } from 'fastify';

// Middleware simples de log
export const testMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(`Request method: ${request.method}, Request URL: ${request.url}`);
  
  // Não há necessidade de chamar 'next()', o Fastify continua automaticamente.
};
