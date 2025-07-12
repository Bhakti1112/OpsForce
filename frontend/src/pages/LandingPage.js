import React, { useState } from 'react';
import { Search, ShoppingBag, Recycle, Users, Star, ArrowRight, Heart, Filter } from 'lucide-react';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: '👕' },
    { id: 'tops', name: 'Tops', icon: '👚' },
    { id: 'bottoms', name: 'Bottoms', icon: '👖' },
    { id: 'dresses', name: 'Dresses', icon: '👗' },
    { id: 'outerwear', name: 'Outerwear', icon: '🧥' },
    { id: 'accessories', name: 'Accessories', icon: '👜' }
  ];

  const featuredItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Outerwear",
      size: "M",
      condition: "Like New",
      points: 120,
      image: "/api/placeholder/300/400",
      likes: 24,
      owner: "Sarah M."
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      category: "Dresses",
      size: "S",
      condition: "Good",
      points: 85,
      image: "/api/placeholder/300/400",
      likes: 18,
      owner: "Emma L."
    },
    {
      id: 3,
      title: "Designer Handbag",
      category: "Accessories",
      size: "One Size",
      condition: "New",
      points: 200,
      image: "/api/placeholder/300/400",
      likes: 31,
      owner: "Jessica K."
    },
    {
      id: 4,
      title: "Casual Sneakers",
      category: "Shoes",
      size: "8",
      condition: "Good",
      points: 75,
      image: "/api/placeholder/300/400",
      likes: 12,
      owner: "Mike R."
    }
  ];

  const heroImages = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d5cabd' }}>
      {/* Header */}
      <header className="shadow-lg" style={{ backgroundColor: '#436369' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Recycle className="text-white w-8 h-8" />
              <h1 className="text-white text-2xl font-bold">ReWear</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#browse" className="text-white hover:opacity-80 transition-opacity">Browse</a>
              <a href="#how-it-works" className="text-white hover:opacity-80 transition-opacity">How It Works</a>
              <a href="#community" className="text-white hover:opacity-80 transition-opacity">Community</a>
            </nav>
            <div className="flex space-x-3">
              <button className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#436369] transition-colors">
                Login
              </button>
              <button className="bg-white text-[#436369] px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#436369] mb-4">
              Sustainable Fashion Exchange
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Give your clothes a second life. Swap, trade, and discover unique pieces while reducing textile waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#436369] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Start Swapping
              </button>
              <button className="border-2 border-[#436369] text-[#436369] px-8 py-3 rounded-lg hover:bg-[#436369] hover:text-white transition-colors">
                Browse Items
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for clothes, accessories, or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#436369] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#436369] hover:text-opacity-80"
              >
                <Search className="w-6 h-6" />
              </button>
            </form>
          </div>

          {/* Hero Images Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 md:h-80 bg-gradient-to-r from-[#436369] to-[#5a7a82] flex items-center justify-center">
                <div className="text-center text-white">
                  <Recycle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-xl font-medium">Featured Items Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-[#436369] text-center mb-8">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                  selectedCategory === category.id
                    ? 'border-[#436369] bg-[#436369] text-white'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-[#436369]'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <p className="font-medium text-sm">{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#436369]">Featured Items</h3>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-[#436369] hover:text-opacity-80">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 text-[#436369] hover:text-opacity-80">
                View All
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-gray-400" />
                  </div>
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <div className="absolute top-3 left-3 bg-[#436369] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {item.points} pts
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>{item.category}</span>
                    <span>Size {item.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{item.condition}</span>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-red-500" />
                      <span className="text-xs text-gray-500">{item.likes}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-500">by {item.owner}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ backgroundColor: '#436369' }}>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sustainable Journey?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion-conscious individuals who are making a difference, one swap at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#436369] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium">
              List an Item
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#436369] transition-colors font-medium">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#436369] mb-2">10,000+</div>
              <div className="text-gray-600">Items Swapped</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#436369] mb-2">5,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-[#436369] mb-2">2,500kg</div>
              <div className="text-gray-600">Textile Waste Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Recycle className="w-6 h-6 text-[#436369]" />
            <span className="text-xl font-bold text-[#436369]">ReWear</span>
          </div>
          <p className="text-gray-600 mb-4">
            Sustainable fashion for a better tomorrow
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#436369]">Privacy Policy</a>
            <a href="#" className="hover:text-[#436369]">Terms of Service</a>
            <a href="#" className="hover:text-[#436369]">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;