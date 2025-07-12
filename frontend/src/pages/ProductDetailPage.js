import React, { useState } from 'react';
import { Search, ArrowLeft, Heart, Share2, Star, MapPin, Clock, Tag, Shirt, Package, Ruler, CheckCircle } from 'lucide-react';

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Sample product data
  const product = {
    id: 1,
    title: "Vintage Denim Jacket",
    description: "Beautiful vintage denim jacket in excellent condition. Perfect for layering and adding a classic touch to any outfit. Features original brass buttons and minimal wear. Smoke-free home.",
    category: "Outerwear",
    type: "Jacket",
    size: "Medium",
    condition: "Excellent",
    tags: ["Vintage", "Denim", "Classic", "Layering"],
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=400&h=400&fit=crop"
    ],
    uploader: {
      name: "Sarah Johnson",
      rating: 4.8,
      location: "San Francisco, CA",
      joinDate: "2023"
    },
    pointsRequired: 25,
    isAvailable: true
  };

  const previousListings = [
    {
      id: 1,
      title: "Floral Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop",
      status: "Available"
    },
    {
      id: 2,
      title: "Leather Boots",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=150&h=150&fit=crop",
      status: "Swapped"
    },
    {
      id: 3,
      title: "Wool Sweater",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=150&h=150&fit=crop",
      status: "Available"
    },
    {
      id: 4,
      title: "Silk Scarf",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5c?w=150&h=150&fit=crop",
      status: "Pending"
    }
  ];

  const handleSwapRequest = () => {
    alert("Swap request sent to Sarah Johnson!");
  };

  const handlePointsRedeem = () => {
    alert("Item redeemed for 25 points!");
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ backgroundColor: '#f8f7f5' }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2" style={{ borderColor: '#d5cabd' }}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-5 h-5" style={{ color: '#436369' }} />
              </button>
              <h1 className="text-xl font-bold" style={{ color: '#436369' }}>Product Detail</h1>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white px-4 py-3 border-b" style={{ borderColor: '#d5cabd' }}>
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-20"
              style={{ focusRingColor: '#436369' }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#436369' }}>
                    {product.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {product.category}
                    </span>
                    <span className="flex items-center">
                      <Shirt className="w-4 h-4 mr-1" />
                      {product.type}
                    </span>
                    <span className="flex items-center">
                      <Ruler className="w-4 h-4 mr-1" />
                      Size {product.size}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.isAvailable 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.isAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>

              {/* Product Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#436369' }}>
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#436369' }}>Condition</h4>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{product.condition}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: '#436369' }}>Points Required</h4>
                  <span className="text-2xl font-bold" style={{ color: '#436369' }}>
                    {product.pointsRequired}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2" style={{ color: '#436369' }}>Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ backgroundColor: '#d5cabd', color: '#436369' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Uploader Info */}
              <div className="border-t pt-6 mb-6" style={{ borderColor: '#d5cabd' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#436369' }}>Listed by</h4>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold" style={{ color: '#436369' }}>
                      {product.uploader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#436369' }}>
                      {product.uploader.name}
                    </p>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        {product.uploader.rating}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {product.uploader.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Member since {product.uploader.joinDate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleSwapRequest}
                  disabled={!product.isAvailable}
                  className="flex-1 py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#436369' }}
                >
                  Request Swap
                </button>
                <button
                  onClick={handlePointsRedeem}
                  disabled={!product.isAvailable}
                  className="flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ 
                    backgroundColor: '#d5cabd', 
                    color: '#436369',
                    border: '2px solid #436369'
                  }}
                >
                  Redeem for {product.pointsRequired} Points
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Listings */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#436369' }}>
            Previous Listings from {product.uploader.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {previousListings.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <p className="text-sm font-medium text-gray-800 mb-1">{item.title}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : item.status === 'Swapped'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}