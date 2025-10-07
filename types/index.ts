export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  specifications: string[];
  price: number;
  originalPrice?: number;
  category: string;
  categoryId: string;
  images: string[];
  sizes?: string[];
  inStock: boolean;
  stockQuantity: number;
  isFeatured: boolean;
  isOnSale: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  author: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
  orders: Order[];
}

export interface Address {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: Address;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  sortBy: 'name' | 'price-low' | 'price-high' | 'newest';
}