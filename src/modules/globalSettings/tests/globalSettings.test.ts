import Fastify, { FastifyInstance } from 'fastify';
import { globalSettingsRoutes } from '../../../routes/globalSettingsRoutes';

describe('Fastify App', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    app = Fastify({
      logger: false, // Desativa o logger durante os testes
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

  test('Criar item com sucesso', async () => {
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
      payload: JSON.stringify(newSetting),
    });

    expect(response.statusCode).toBe(201);
    expect(response.json()).toEqual(expect.objectContaining(newSetting)); // Verifica se o objeto retornado contém os dados enviados
  });

  test('Deve falhar ao criar item com "key" inválida (menos de 12 caracteres)', async () => {
    const newSetting = {
      key: 'shortsssssssssssssssssssssssssssssssssssssssssssssssssssss',
      value: 'valid-value',
    };

    const response = await app.inject({
      method: 'POST',
      url: '/global-settings',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify(newSetting),
    });

    expect(response.statusCode).toBe(400);
    expect(response.json()).toEqual({
      error: 'O campo "key" deve ter menos de 12 caracteres e não pode estar vazio.',
    });
  });

  test('Deve falhar ao criar item com "value" inválido (mais de 12 caracteres)', async () => {
    const newSetting = {
      key: 'valid-key',
      value: 'shoreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeet',
    };

    const response = await app.inject({
      method: 'POST',
      url: '/global-settings',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify(newSetting),
    });

    expect(response.statusCode).toBe(400);
    expect(response.json()).toEqual({
      error: 'O campo "value" deve ter menos de 12 caracteres e não pode estar vazio.',
    });
  });
});
