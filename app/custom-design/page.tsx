'use client';

import { useState } from 'react';
import { Upload, Check, MessageCircle } from 'lucide-react';
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/lib/data';
import { toast } from 'sonner';

export default function CustomDesignPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [referenceImage, setReferenceImage] = useState<File | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [showProductDialog, setShowProductDialog] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showJotformDialog, setShowJotformDialog] = useState(false);

  const categoryProducts = products.filter(
    p => selectedCategory && p.category === categories.find(c => c.id === selectedCategory)?.name
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !selectedProduct) {
      toast.error('Please complete all required fields');
      return;
    }
    setIsSubmitted(true);
    toast.success('Custom design request submitted successfully!');
  };

  const openJotform = () => {
    setShowJotformDialog(true);
  };

  const steps = [
    { id: 1, title: 'Select Category', completed: !!selectedCategory },
    { id: 2, title: 'Choose Product', completed: !!selectedProduct },
    { id: 3, title: 'Upload Reference', completed: true }, // Optional step
    { id: 4, title: 'Add Details', completed: !!additionalDetails },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Custom Design Request
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have something specific in mind? Let's create a unique piece just for you. 
            Share your vision and we'll bring it to life.
          </p>
        </section>

        {!isSubmitted ? (
          <>
            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center space-x-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        step.completed ? 'bg-primary border-primary text-white' : 
                        currentStep === step.id ? 'border-primary text-primary' : 
                        'border-muted-foreground text-muted-foreground'
                      }`}>
                        {step.completed ? <Check className="h-4 w-4" /> : step.id}
                      </div>
                      <span className="text-xs font-medium whitespace-nowrap">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-px ${
                        step.completed ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
              {/* Step 1: Category Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center mr-3">1</span>
                    Select Product Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-colors hover:border-primary ${
                          selectedCategory === category.id ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-24 object-cover rounded-md mb-3"
                        />
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Product Selection */}
              {selectedCategory && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center mr-3">2</span>
                      Choose Base Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Select a product as a base for your custom design
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {categoryProducts.map((product) => (
                        <div
                          key={product.id}
                          className={`border rounded-lg p-3 cursor-pointer transition-colors hover:border-primary ${
                            selectedProduct === product.id ? 'border-primary bg-primary/5' : 'border-border'
                          }`}
                          onClick={() => setSelectedProduct(product.id)}
                        >
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-20 object-cover rounded-md mb-2"
                          />
                          <h4 className="font-medium text-sm">{product.name}</h4>
                          <p className="text-xs text-muted-foreground">Starting at ${product.price}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Reference Image */}
              {selectedProduct && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center mr-3">3</span>
                      Upload Reference Image (Optional)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                      <div className="space-y-2">
                        <p className="font-medium">Upload inspiration image</p>
                        <p className="text-sm text-muted-foreground">
                          Share an image that shows what you have in mind
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setReferenceImage(e.target.files?.[0] || null)}
                          className="mx-auto max-w-xs"
                        />
                      </div>
                    </div>
                    {referenceImage && (
                      <p className="text-sm text-primary mt-2">
                        Image uploaded: {referenceImage.name}
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Quantity and Details */}
              {selectedProduct && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center mr-3">4</span>
                      Quantity & Additional Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="details">Additional Details</Label>
                      <Textarea
                        id="details"
                        placeholder="Please describe your vision in detail. Include colors, style preferences, size requirements, or any special requests..."
                        value={additionalDetails}
                        onChange={(e) => setAdditionalDetails(e.target.value)}
                        className="min-h-[100px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Submit Custom Design Request
                    </Button>
                  </CardContent>
                </Card>
              )}
            </form>
          </>
        ) : (
          /* Success State */
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-bold">Request Submitted!</h2>
              <p className="text-muted-foreground">
                Thank you for your custom design request. Our artist will review your requirements and get back to you within 24-48 hours.
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg text-left">
              <h3 className="font-semibold mb-2">Your Request Summary:</h3>
              <div className="space-y-1 text-sm">
                <p><strong>Category:</strong> {categories.find(c => c.id === selectedCategory)?.name}</p>
                <p><strong>Base Product:</strong> {products.find(p => p.id === selectedProduct)?.name}</p>
                <p><strong>Quantity:</strong> {quantity}</p>
                {referenceImage && <p><strong>Reference Image:</strong> Uploaded</p>}
              </div>
            </div>
            <Button onClick={openJotform} className="w-full" size="lg">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Designer Directly
            </Button>
          </div>
        )}

        {/* Jotform Dialog */}
        <Dialog open={showJotformDialog} onOpenChange={setShowJotformDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle>Contact Designer</DialogTitle>
            </DialogHeader>
            <iframe
              src="https://form.jotform.com/252305862627459"
              className="w-full h-[600px] border-0"
              title="Contact Designer Form"
            />
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </div>
  );
}