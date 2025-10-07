import { Product, Category, Testimonial, BlogPost } from '@/types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Paintings',
    slug: 'paintings',
    image: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Original handmade paintings in various styles and mediums'
  },
  {
    id: '2',
    name: 'Pottery',
    slug: 'pottery',
    image: 'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Handcrafted ceramic pots and decorative items'
  },
  {
    id: '3',
    name: 'Jewelry',
    slug: 'jewelry',
    image: 'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Unique handmade jewelry pieces'
  },
  {
    id: '4',
    name: 'Crafts',
    slug: 'crafts',
    image: 'https://images.pexels.com/photos/6956351/pexels-photo-6956351.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Various handcrafted decorative items'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Abstract Sunset Canvas',
    slug: 'abstract-sunset-canvas',
    description: 'A beautiful abstract painting capturing the essence of a sunset',
    fullDescription: 'This stunning abstract canvas painting captures the warm, vibrant colors of a sunset through fluid brushstrokes and dynamic composition. Created with high-quality acrylic paints on premium canvas, this piece adds warmth and sophistication to any space.',
    specifications: ['Canvas: 16" x 20"', 'Medium: Acrylic', 'Frame: Not included', 'Style: Abstract'],
    price: 150,
    originalPrice: 200,
    category: 'Paintings',
    categoryId: '1',
    images: [
      'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    stockQuantity: 5,
    isFeatured: true,
    isOnSale: true,
    tags: ['abstract', 'sunset', 'canvas', 'acrylic']
  },
  {
    id: '2',
    name: 'Ceramic Garden Pot',
    slug: 'ceramic-garden-pot',
    description: 'Handcrafted ceramic pot perfect for indoor plants',
    fullDescription: 'This elegant ceramic garden pot is handcrafted with attention to detail and glazed with earth-friendly materials. Perfect for housing your favorite plants, it features drainage holes and comes in multiple sizes.',
    specifications: ['Material: High-fired ceramic', 'Drainage: Yes', 'Finish: Glazed', 'Care: Easy to clean'],
    price: 45,
    category: 'Pottery',
    categoryId: '2',
    images: [
      'https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4505454/pexels-photo-4505454.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    sizes: ['Small', 'Medium', 'Large'],
    inStock: true,
    stockQuantity: 12,
    isFeatured: true,
    isOnSale: false,
    tags: ['ceramic', 'pot', 'garden', 'plants']
  },
  {
    id: '3',
    name: 'Silver Moon Necklace',
    slug: 'silver-moon-necklace',
    description: 'Delicate silver necklace with crescent moon pendant',
    fullDescription: 'This delicate silver necklace features a beautifully crafted crescent moon pendant. Made from sterling silver and finished with a protective coating, this piece combines elegance with durability.',
    specifications: ['Metal: Sterling silver', 'Chain length: 18"', 'Pendant size: 0.8"', 'Closure: Lobster clasp'],
    price: 75,
    category: 'Jewelry',
    categoryId: '3',
    images: [
      'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1454157/pexels-photo-1454157.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    stockQuantity: 8,
    isFeatured: true,
    isOnSale: false,
    tags: ['silver', 'necklace', 'moon', 'pendant']
  },
  {
    id: '4',
    name: 'Woven Dream Catcher',
    slug: 'woven-dream-catcher',
    description: 'Traditional handwoven dream catcher with feathers',
    fullDescription: 'This beautiful dream catcher is handwoven using traditional techniques. Adorned with natural feathers and beads, it serves both as a spiritual item and a decorative piece for your home.',
    specifications: ['Diameter: 8"', 'Materials: Natural fibers, feathers, beads', 'Origin: Handmade', 'Style: Traditional'],
    price: 35,
    originalPrice: 50,
    category: 'Crafts',
    categoryId: '4',
    images: [
      'https://images.pexels.com/photos/6956351/pexels-photo-6956351.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7005108/pexels-photo-7005108.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    stockQuantity: 15,
    isFeatured: false,
    isOnSale: true,
    tags: ['dream-catcher', 'woven', 'traditional', 'feathers']
  },
  {
    id: '5',
    name: 'Floral Watercolor Set',
    slug: 'floral-watercolor-set',
    description: 'Set of 3 delicate floral watercolor paintings',
    fullDescription: 'This beautiful set consists of three complementary floral watercolor paintings that work perfectly together or individually. Each piece showcases different wildflowers painted with translucent watercolors on quality paper.',
    specifications: ['Set of: 3 paintings', 'Size: 8" x 10" each', 'Medium: Watercolor', 'Paper: 140lb watercolor paper'],
    price: 120,
    category: 'Paintings',
    categoryId: '1',
    images: [
      'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    stockQuantity: 6,
    isFeatured: false,
    isOnSale: false,
    tags: ['watercolor', 'floral', 'set', 'wildflowers']
  },
  {
    id: '6',
    name: 'Handmade Brass Earrings',
    slug: 'handmade-brass-earrings',
    description: 'Geometric brass earrings with intricate patterns',
    fullDescription: 'These stunning brass earrings feature geometric patterns hand-etched by skilled artisans. Lightweight yet durable, they add a touch of bohemian elegance to any outfit.',
    specifications: ['Metal: Brass', 'Weight: 5g per earring', 'Length: 2"', 'Style: Drop earrings'],
    price: 40,
    category: 'Jewelry',
    categoryId: '3',
    images: [
      'https://images.pexels.com/photos/1454157/pexels-photo-1454157.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    inStock: true,
    stockQuantity: 10,
    isFeatured: false,
    isOnSale: false,
    tags: ['brass', 'earrings', 'geometric', 'handmade']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    message: 'The attention to detail in every piece is incredible. My ceramic pot is not only beautiful but also perfectly functional.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '2',
    name: 'Michael Chen',
    message: 'I ordered a custom painting and was blown away by the result. The artist truly captured what I envisioned.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: '3',
    name: 'Emma Davis',
    message: 'The jewelry pieces are unique and well-crafted. I get compliments every time I wear them.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Ceramic Glazing',
    slug: 'art-of-ceramic-glazing',
    excerpt: 'Discover the intricate process behind creating beautiful glazed ceramics and the techniques that make each piece unique.',
    image: 'https://images.pexels.com/photos/4505454/pexels-photo-4505454.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-01-15',
    author: 'KalaKriti Artist'
  },
  {
    id: '2',
    title: 'Choosing the Perfect Handmade Gift',
    slug: 'choosing-perfect-handmade-gift',
    excerpt: 'Tips and ideas for selecting meaningful handmade gifts that show you care about quality and uniqueness.',
    image: 'https://images.pexels.com/photos/6956351/pexels-photo-6956351.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-01-10',
    author: 'KalaKriti Artist'
  },
  {
    id: '3',
    title: 'Behind the Canvas: My Artistic Journey',
    slug: 'behind-the-canvas-artistic-journey',
    excerpt: 'A personal reflection on the journey of becoming an independent artist and the inspiration behind each creation.',
    image: 'https://images.pexels.com/photos/1143758/pexels-photo-1143758.jpeg?auto=compress&cs=tinysrgb&w=800',
    publishedAt: '2024-01-05',
    author: 'KalaKriti Artist'
  }
];