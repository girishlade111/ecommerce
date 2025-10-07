'use client';

import { Star, Award, Palette, Heart } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Happy Customers', value: '500+' },
    { label: 'Unique Creations', value: '1000+' },
    { label: 'Art Categories', value: '4' },
  ];

  const values = [
    {
      icon: Palette,
      title: 'Authentic Artistry',
      description: 'Every piece is hand-crafted with traditional techniques and modern creativity.'
    },
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Art is not just work for us—it\'s a way of expressing love and emotion.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only the finest materials and maintain the highest standards.'
    },
    {
      icon: Star,
      title: 'Customer-Centered',
      description: 'Your satisfaction and experience matter most to us.'
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4">About KalaKriti</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Where Art Meets
              <span className="text-primary"> Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Founded by an independent artist with a vision to bring unique, handmade creations to art lovers worldwide. 
              Every piece tells a story of dedication, creativity, and traditional craftsmanship.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    KalaKriti began as a small studio in 2016, born from a deep passion for traditional art forms and 
                    a desire to preserve handmade craftsmanship in our modern world. What started as a personal journey 
                    of artistic expression has grown into a celebration of creativity and cultural heritage.
                  </p>
                  <p>
                    Our founder, inspired by ancient art techniques passed down through generations, combines traditional 
                    methods with contemporary designs to create pieces that resonate with today's art enthusiasts while 
                    honoring the past.
                  </p>
                  <p>
                    Every piece in our collection is more than just art—it's a labor of love, crafted with meticulous 
                    attention to detail and an unwavering commitment to quality. We believe that handmade art carries 
                    a soul that mass-produced items simply cannot replicate.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artist at work"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">8+</div>
                    <div className="text-sm">Years Creating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our creative process and define our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-br from-accent/20 via-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                "To create beautiful, meaningful art that connects people with the timeless beauty of handmade craftsmanship. 
                We strive to preserve traditional techniques while embracing contemporary aesthetics, ensuring that each piece 
                not only decorates a space but also tells a story and evokes emotion."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-3">Preserve Tradition</h3>
                    <p className="text-sm text-muted-foreground">
                      Keeping ancient art forms alive through modern practice and appreciation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-3">Inspire Creativity</h3>
                    <p className="text-sm text-muted-foreground">
                      Encouraging others to appreciate and support independent artists and makers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-3">Build Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Creating connections between artists, collectors, and art enthusiasts.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}