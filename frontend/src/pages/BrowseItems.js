import React, { useState } from 'react';
import { Search, Filter, Heart, MapPin, Star, Grid, List, SlidersHorizontal, Eye, MessageCircle, Coins } from 'lucide-react';

const BrowseItems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Mock items data
  const [items] = useState([
    {
      id: 1,
      title: 'Vintage Denim Jacket',
      description: 'Classic blue denim jacket in excellent condition. Perfect for layering.',
      category: 'Outerwear',
      size: 'M',
      condition: 'Excellent',
      points: 150,
      images: ['/api/placeholder/300/300'],
      location: 'New York',
      uploader: 'Sarah Johnson',
      uploaderRating: 4.8,
      uploadDate: '2024-07-10',
      tags: ['vintage', 'denim', 'casual'],
      available: true,
      likes: 24
    },
    {
      id: 2,
      title: 'Floral Summer Dress',
      description: 'Beautiful floral maxi dress, worn only once. Perfect for summer events.',
      category: 'Dresses',
      size: 'S',
      condition: 'Like New',
      points: 120,
      images: ['/api/placeholder/300/300'],
      location: 'Los Angeles',
      uploader: 'Emma Rodriguez',
      uploaderRating: 4.9,
      uploadDate: '2024-07-09',
      tags: ['floral', 'summer', 'maxi'],
      available: true,
      likes: 18
    },
    {
      id: 3,
      title: 'Designer Leather Boots',
      description: 'Authentic leather boots from premium brand. Slight wear but still stylish.',
      category: 'Shoes',
      size: '8',
      condition: 'Good',
      points: 200,
      images: ['/api/placeholder/300/300'],
      location: 'Chicago',
      uploader: 'Michael Chen',
      uploaderRating: 4.7,
      uploadDate: '2024-07-08',
      tags: ['leather', 'boots', 'designer'],
      available: false,
      likes: 32
    },
    {
      id: 4,
      title: 'Cozy Knit Sweater',
      description: 'Soft wool blend sweater in cream color. Perfect for fall and winter.',
      category: 'Tops',
      size: 'L',
      condition: 'Good',
      points: 80,
      images: ['/api/placeholder/300/300'],
      location: 'Seattle',
      uploader: 'David Wilson',
      uploaderRating: 4.6,
      uploadDate: '2024-07-07',
      tags: ['knit', 'sweater', 'cozy'],
      available: true,
      likes: 15
    },
    {
      id: 5,
      title: 'Silk Blouse',
      description: 'Elegant silk blouse suitable for work or special occasions.',
      category: 'Tops',
      size: 'M',
      condition: 'Excellent',
      points: 100,
      images: ['/api/placeholder/300/300'],
      location: 'Miami',
      uploader: 'Lisa Park',
      uploaderRating: 4.9,
      uploadDate: '2024-07-06',
      tags: ['silk', 'elegant', 'work'],
      available: true,
      likes: 21
    },
    {
      id: 6,
      title: 'Casual Jeans',
      description: 'Comfortable straight-leg jeans, barely worn. Great for everyday wear.',
      category: 'Bottoms',
      size: '32',
      condition: 'Like New',
      points: 90,
      images: ['/api/placeholder/300/300'],
      location: 'Denver',
      uploader: 'Alex Johnson',
      uploaderRating: 4.5,
      uploadDate: '2024-07-05',
      tags: ['jeans', 'casual', 'comfortable'],
      available: true,
      likes: 12
    }
  ]);

  const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Shoes', 'Accessories'];
  const sizes = ['All', 'XS', 'S', 'M', 'L', 'XL', '6', '7', '8', '9', '10', '11', '12', '32', '34', '36'];
  const conditions = ['All', 'Like New', 'Excellent', 'Good', 'Fair'];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSize = selectedSize === 'all' || item.size === selectedSize;
    const matchesCondition = selectedCondition === 'all' || item.condition === selectedCondition;
    
    return matchesSearch && matchesCategory && matchesSize && matchesCondition;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      case 'oldest':
        return new Date(a.uploadDate) - new Date(b.uploadDate);
      case 'points-low':
        return a.points - b.points;
      case 'points-high':
        return b.points - a.points;
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const handleSwapRequest = (itemId) => {
    console.log(`Swap request for item ${itemId}`);
  };

  const handleRedeemPoints = (itemId) => {
    console.log(`Redeem points for item ${itemId}`);
  };

  const toggleLike = (itemId) => {
    console.log(`Toggle like for item ${itemId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900">Browse Items</h1>
              <p className="text-gray-600 mt-1">Discover amazing clothing items from our community</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-[#d5cabd] bg-[#d5cabd] text-[#436369] rounded-lg hover:bg-[#c5b8a9] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </button>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-[#436369] text-white' 
                      : 'bg-[#d5cabd] text-[#436369] hover:bg-[#c5b8a9]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-[#436369] text-white' 
                      : 'bg-[#d5cabd] text-[#436369] hover:bg-[#c5b8a9]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items, descriptions, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 w-full border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369]"
            />
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369]"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full p-2 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369]"
                >
                  {sizes.map(size => (
                    <option key={size} value={size.toLowerCase()}>{size}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                <select
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  className="w-full p-2 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369]"
                >
                  {conditions.map(condition => (
                    <option key={condition} value={condition.toLowerCase()}>{condition}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-[#d5cabd] rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-[#436369]"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="points-low">Points: Low to High</option>
                  <option value="points-high">Points: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-sm text-gray-600">
            Showing {sortedItems.length} of {items.length} items
          </div>
        </div>

        {/* Items Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {sortedItems.map((item) => (
            <div key={item.id} className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
              {/* Image */}
              <div className={`${viewMode === 'list' ? 'w-48 h-48' : 'w-full h-64'} bg-[#d5cabd] flex items-center justify-center relative`}>
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {!item.available && (
                  <div className="absolute inset-0 bg-[#436369] bg-opacity-70 flex items-center justify-center">
                    <span className="text-white font-semibold">Not Available</span>
                  </div>
                )}
                <button
                  onClick={() => toggleLike(item.id)}
                  className="absolute top-3 right-3 p-2 bg-[#d5cabd] text-[#436369] rounded-full shadow-md hover:shadow-lg hover:bg-[#c5b8a9] transition-all"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 truncate">{item.title}</h3>
                  <div className="flex items-center text-[#436369] font-bold">
                    <Coins className="w-4 h-4 mr-1" />
                    {item.points}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-[#d5cabd] text-[#436369] text-xs rounded-full">
                    {item.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-[#436369] text-xs rounded-full">
                    Size {item.size}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-[#436369] text-xs rounded-full">
                    {item.condition}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-sm text-[#436369]">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <div className="flex items-center text-sm text-[#436369]">
                    <Heart className="w-4 h-4 mr-1" />
                    {item.likes}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#d5cabd] rounded-full mr-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{item.uploader}</p>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500 ml-1">{item.uploaderRating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSwapRequest(item.id)}
                    disabled={!item.available}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      item.available
                        ? 'bg-[#436369] text-white hover:bg-[#3a5660]'
                        : 'bg-[#d5cabd] text-[#436369] cursor-not-allowed opacity-50'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Swap Request
                  </button>
                  <button
                    onClick={() => handleRedeemPoints(item.id)}
                    disabled={!item.available}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      item.available
                        ? 'bg-[#d5cabd] text-[#436369] hover:bg-[#c5b8a9]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <Coins className="w-4 h-4 inline mr-2" />
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-[#d5cabd] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-[#436369]" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseItems;