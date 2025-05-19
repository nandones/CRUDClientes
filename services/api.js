import axios from 'axios';

const api = axios.create({
  baseURL: 'https://caa8222e65b978592fc4.free.beeceptor.com/api/clientes/',
});

export const getClients = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    throw error;
  }
};

export const createClient = async (client) => {
  try {
    const response = await api.post('/', client);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    throw error;
  }
};

export const updateClient = async (id, client) => {
  try {
    const response = await api.put(`/${id}`, client);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await api.delete(`https://caa8222e65b978592fc4.free.beeceptor.com/api/clientes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
    throw error;
  }
};