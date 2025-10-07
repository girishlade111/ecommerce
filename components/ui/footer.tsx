'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="font-heading text-xl font-semibold">KalaKriti</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Discover unique handmade art and crafts from independent artists. Each piece tells a story of creativity and passion.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white" asChild>
                  <a href="#" aria-label="Facebook">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white" asChild>
                  <a href="#" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-white" asChild>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
                <Link href="/custom-design" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Design
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Categories</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="/products?category=paintings" className="text-muted-foreground hover:text-primary transition-colors">
                  Paintings
                </Link>
                <Link href="/products?category=pottery" className="text-muted-foreground hover:text-primary transition-colors">
                  Pottery
                </Link>
                <Link href="/products?category=jewelry" className="text-muted-foreground hover:text-primary transition-colors">
                  Jewelry
                </Link>
                <Link href="/products?category=crafts" className="text-muted-foreground hover:text-primary transition-colors">
                  Crafts
                </Link>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to get updates on new products and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
                <Button type="submit" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 KalaKriti Online. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}