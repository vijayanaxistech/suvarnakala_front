import axios from 'axios';

export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
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
  return (res.data.bachatMahotsavs || []).map((item: any) => {
    const imagePath = item.imagePath;
    return imagePath.startsWith('http') ? imagePath : `${BASE_URL}/${imagePath}`;
  });
};

export const getTrendingDesigns = async () => {
  const res = await API.get('/api/trendingdesigns');
  return Array.isArray(res.data) ? res.data : res.data.data || [];
};

export const getProducts = async () => {
  try {
    const res = await API.get('/api/products');
    return Array.isArray(res.data) ? res.data : [];
  } catch (err) {
    console.error('Error fetching products:', err);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const res = await API.get(`/api/products/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching product by ID:', err);
    return null;
  }
};

export const getEvents = async () => {
  try {
    const res = await API.get('/api/events');
    return Array.isArray(res.data) ? res.data : [];
  } catch (err) {
    console.error('Error fetching events:', err);
    return [];
  }
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const res = await API.post('/api/contact', formData);
  return res.data;
};

export const sendAppointment = async (formData: {
  name: string;
  email: string;
  mobile: string;
  city: string;
  store: string;
  date: string;
  time: string;
  jewelry: string;
  message: string;
}) => {
  try {
    const res = await API.post('/api/sendappointment', formData);
    return res.data;
  } catch (err) {
    console.error('Error sending appointment request:', err);
    throw err;
  }
};

export default API;
