import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Users, Recycle, Heart, Menu, X } from 'lucide-react';

const ReWearLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
      category: "Outerwear",
      condition: "Excellent",
      points: 45,
      uploader: "Sarah M."
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=300&fit=crop",
      category: "Dresses",
      condition: "Good",
      points: 35,
      uploader: "Emma L."
    },
    {
      id: 3,
      title: "Classic White Sneakers",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
      category: "Footwear",
      condition: "Very Good",
      points: 40,
      uploader: "Mike R."
    },
    {
      id: 4,
      title: "Wool Sweater",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
      category: "Knitwear",
      condition: "Excellent",
      points: 50,
      uploader: "Anna K."
    }
  ];

  const testimonials = [
    {
      name: "Jessica Chen",
      text: "ReWear has completely transformed my wardrobe! I've found amazing pieces while giving my old clothes new life.",
      rating: 5,
      swaps: 23
    },
    {
      name: "David Park",
      text: "The point system is genius. I can swap items even when direct exchanges don't work out.",
      rating: 5,
      swaps: 15
    },
    {
      name: "Maria Rodriguez",
      text: "Love the sustainable approach. I've reduced my fashion footprint significantly!",
      rating: 5,
      swaps: 31
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d5cabd' }}>
      {/* Header */}
      <header className="shadow-lg" style={{ backgroundColor: '#436369' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Recycle className="h-8 w-8 text-white mr-2" />
              <span className="text-2xl font-bold text-white">ReWear</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">Browse</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">How It Works</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">About</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors">Login</button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-600">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-white hover:text-gray-200 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">Browse</a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">How It Works</a>
                <a href="#" className="text-white hover:text-gray-200 transition-colors">About</a>
                <div className="pt-4 border-t border-gray-600">
                  <button className="text-white hover:text-gray-200 transition-colors block mb-2">Login</button>
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    Sign Up
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#436369' }}>
            Sustainable Fashion Through Community Exchange
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-3xl mx-auto">
            Give your unused clothes a second life while discovering amazing pre-loved fashion. 
            Swap directly or use our point system to find your next favorite piece.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity transform hover:scale-105"
              style={{ backgroundColor: '#436369' }}
            >
              Start Swapping
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 hover:bg-white hover:bg-opacity-20 transition-colors"
              style={{ borderColor: '#436369', color: '#436369' }}
            >
              Browse Items
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#436369' }}>2,847</div>
              <div className="text-gray-600">Items Swapped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#436369' }}>1,234</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#436369' }}>89%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#436369' }}>
            Featured Items
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: '#436369' }}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{item.category} • {item.condition}</p>
                        <p className="text-sm text-gray-500 mb-4">by {item.uploader}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold" style={{ color: '#436369' }}>
                            {item.points} points
                          </span>
                          <button 
                            className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#436369' }}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              style={{ color: '#436369' }}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
              style={{ color: '#436369' }}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  style={{ backgroundColor: index === currentSlide ? '#436369' : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#436369' }}>
            How ReWear Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#436369' }}>
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#436369' }}>1. List Your Items</h3>
              <p className="text-gray-600">Upload photos and details of clothing items you no longer wear. Set your swap preferences or point values.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#436369' }}>
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#436369' }}>2. Find & Request</h3>
              <p className="text-gray-600">Browse through community listings and request swaps for items you love. Use points for flexible exchanges.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#436369' }}>
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#436369' }}>3. Swap & Enjoy</h3>
              <p className="text-gray-600">Complete the exchange and enjoy your new-to-you clothing while promoting sustainable fashion practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#436369' }}>
            What Our Community Says
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold" style={{ color: '#436369' }}>
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {testimonial.swaps} swaps
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#436369' }}>
            Our Environmental Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#436369' }}>15,420</div>
              <div className="text-gray-600">Clothing Items Rescued</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#436369' }}>8.2 tons</div>
              <div className="text-gray-600">Textile Waste Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#436369' }}>12,450</div>
              <div className="text-gray-600">Gallons Water Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2" style={{ color: '#436369' }}>3.1 tons</div>
              <div className="text-gray-600">CO2 Emissions Reduced</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#436369' }}>
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 text-gray-700">
            Join thousands of fashion-conscious individuals making a positive impact on the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-opacity transform hover:scale-105"
              style={{ backgroundColor: '#436369' }}
            >
              Start Swapping Today
            </button>
            <button 
              className="px-8 py-4 rounded-lg font-semibold text-lg border-2 hover:bg-white hover:bg-opacity-20 transition-colors"
              style={{ borderColor: '#436369', color: '#436369' }}
            >
              List Your First Item
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#436369' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Recycle className="h-8 w-8 text-white mr-2" />
                <span className="text-2xl font-bold text-white">ReWear</span>
              </div>
              <p className="text-gray-300">
                Sustainable fashion through community-driven clothing exchange.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browse Items</a></li>
                <li><a href="#" className="hover:text-white transition-colors">List an Item</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Points System</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Rules</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 ReWear. All rights reserved. Making fashion sustainable, one swap at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReWearLanding;