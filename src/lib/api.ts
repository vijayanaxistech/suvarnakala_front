// utils/api.ts
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const getHeroes = async () => {
  const res = await API.get('/api/heroes');
  return res.data.heroes || [];
};

export const getTestimonials = async () => {
  const res = await API.get('/api/testimonials');
  return res.data.testimonials || [];
};

export const getCategories = async () => {
  const res = await API.get('/api/productscategories');
  return Array.isArray(res.data) ? res.data : [];
};

export const getMoments = async () => {
  const res = await API.get('/api/moments');
  return res.data.moments || [];
};

export const getBachatMahotsavImages = async (): Promise<string[]> => {
  const res = await API.get('/api/bachatMahotsav');
  return (res.data.bachatMahotsavs || []).map((item: any) => `${BASE_URL}/${item.imagePath}`);
};

export const getTrendingDesigns = async () => {
  const res = await API.get('/api/trendingdesigns');
  return Array.isArray(res.data) ? res.data : res.data.data || [];
};

export default API;
