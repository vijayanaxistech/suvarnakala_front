// import { Product } from '@/types/product';
// import { Category } from '@/types/category'; // Optional, if needed

// const BASE_URL = 'https://your-api.com/api';

// async function fetchJson<T>(url: string): Promise<T> {
//   const res = await fetch(url, { cache: 'no-store' });

//   if (!res.ok) {
//     const text = await res.text();
//     throw new Error(`API error: ${res.status} ${res.statusText} - ${text}`);
//   }

//   return res.json();
// }

// export const api = {
//   // 🛍️ Product APIs
//   getProducts: (): Promise<Product[]> => fetchJson(`${BASE_URL}/products`),
//   getProductById: (id: string): Promise<Product> =>
//     fetchJson(`${BASE_URL}/products/${id}`),

//   // 📂 Category APIs (example)
//   getCategories: (): Promise<Category[]> => fetchJson(`${BASE_URL}/categories`),
//   getCategoryById: (id: string): Promise<Category> =>
//     fetchJson(`${BASE_URL}/categories/${id}`),
// };
