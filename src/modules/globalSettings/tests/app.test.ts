import Fastify, { FastifyInstance } from 'fastify';
import { globalSettingsRoutes } from '../../../routes/globalSettingsRoutes';

describe('Fastify App', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = Fastify({
      logger: false,  // Desativa o logger durante os testes
    });
    await globalSettingsRoutes(app);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  test('Deve obter configurações globais com sucesso', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/global-settings',
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual(expect.any(Array)); // Supondo que retorna uma lista
  });

  test('Criar item', async () => {
    const newSetting = {
      key: 'new-key',
      value: 'new-value',
    };

    const response = await app.inject({
      method: 'POST',
      url: '/global-settings',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify(newSetting), // Envia o objeto JSON como corpo
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toEqual(expect.objectContaining(newSetting)); // Verifica se o objeto retornado contém os dados enviados
  });
});
