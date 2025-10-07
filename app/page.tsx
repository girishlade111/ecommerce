'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { products, categories, testimonials, blogPosts } from '@/lib/data';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredProducts = products.filter(product => product.isFeatured);
  const saleProducts = products.filter(product => product.isOnSale);

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div className="animate-fade-in">
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-balance max-w-4xl mx-auto">
                Discover Unique
                <span className="text-primary"> Handmade </span>
                Art & Crafts
              </h1>
            </div>
            <div className="animate-fade-in-delayed">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Each piece tells a story of creativity, passion, and traditional craftsmanship. 
                Support independent artists and bring unique beauty to your home.
              </p>
            </div>
            <div className="animate-fade-in-delayed flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-medium">
                <Link href="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="font-medium">
                <Link href="/custom-design">
                  Custom Design
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-pulse delay-500"></div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Explore Categories
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From vibrant paintings to delicate jewelry, discover our diverse collection of handmade treasures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link key={category.id} href={`/products?category=${category.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="font-heading text-xl font-semibold mb-2">{category.name}</h3>
                          <p className="text-sm opacity-90">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Carousel */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Featured Creations
              </h2>
              <p className="text-muted-foreground text-lg">
                Carefully selected pieces that showcase exceptional artistry and craftsmanship
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sale Products */}
        {saleProducts.length > 0 && (
          <section className="py-16 bg-accent/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge variant="destructive" className="mb-4">
                  Limited Time Offer
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Special Prices
                </h2>
                <p className="text-muted-foreground text-lg">
                  Don't miss these amazing deals on selected handmade pieces
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {saleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Preview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  From the Blog
                </h2>
                <p className="text-muted-foreground text-lg">
                  Stories, techniques, and inspiration from the world of handmade crafts
                </p>
              </div>
              <Button variant="outline" asChild className="hidden sm:inline-flex">
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>{post.author}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-lg line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Real feedback from real customers who love handmade art
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {testimonials.length > 0 ? (
                <div className="relative">
                  <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="p-8">
                      <div className="text-center space-y-6">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl font-medium text-balance">
                          "{testimonials[currentTestimonial].message}"
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                          <img
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                            <div className="text-sm text-muted-foreground">Verified Customer</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Navigation */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <p className="text-muted-foreground">No testimonials available</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}