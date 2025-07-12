import React, { useState } from 'react';
import { Search, User, ArrowLeft, Heart, Share2, MapPin, Calendar, Tag, Star, MessageCircle } from 'lucide-react';

const ItemListing = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const itemImages = [
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop"
  ];

  const itemDetails = {
    name: "Vintage Denim Jacket",
    description: "Beautiful vintage denim jacket from the 90s. Features classic stonewashed finish with minimal wear. Perfect for layering or as a statement piece. Has been well-maintained and comes from a smoke-free home. The jacket has a relaxed fit and would suit various body types. Great for casual outings or adding a vintage touch to your wardrobe.",
    category: "Outerwear",
    size: "Medium",
    condition: "Excellent",
    brand: "Levi's",
    color: "Blue",
    points: 45,
    uploader: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face",
      rating: 4.8,
      totalSwaps: 23,
      joinedDate: "March 2023"
    },
    tags: ["vintage", "denim", "casual", "layering", "90s"],
    location: "San Francisco, CA",
    postedDate: "3 days ago",
    views: 127,
    likes: 15
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d5cabd' }}>
      {/* Header */}
      <header className="shadow-lg sticky top-0 z-50" style={{ backgroundColor: '#436369' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-semibold text-white">Item Listing</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search items, brands, categories..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
              style={{ focusRingColor: '#436369' }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={itemImages[selectedImage]}
                alt={itemDetails.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full ${isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-600'} shadow-lg hover:shadow-xl transition-all`}
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full bg-white text-gray-600 shadow-lg hover:shadow-xl transition-all">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {itemImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-opacity-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ ringColor: selectedImage === index ? '#436369' : undefined }}
                >
                  <img
                    src={image}
                    alt={`${itemDetails.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold" style={{ color: '#436369' }}>
                  {itemDetails.name}
                </h2>
                <div className="text-right">
                  <div className="text-2xl font-bold" style={{ color: '#436369' }}>
                    {itemDetails.points} points
                  </div>
                  <div className="text-sm text-gray-500">
                    {itemDetails.views} views • {itemDetails.likes} likes
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Brand</span>
                  <p className="font-medium">{itemDetails.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Size</span>
                  <p className="font-medium">{itemDetails.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Condition</span>
                  <p className="font-medium">{itemDetails.condition}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Category</span>
                  <p className="font-medium">{itemDetails.category}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#436369' }}>
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {itemDetails.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {itemDetails.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100"
                      style={{ color: '#436369' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Location and Date */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {itemDetails.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Posted {itemDetails.postedDate}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button 
                  className="flex-1 py-3 px-6 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#436369' }}
                >
                  Request Swap
                </button>
                <button 
                  className="flex-1 py-3 px-6 rounded-lg font-semibold border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#436369', color: '#436369' }}
                >
                  Redeem with Points
                </button>
              </div>
            </div>

            {/* Uploader Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#436369' }}>
                Listed by
              </h3>
              <div className="flex items-center space-x-4">
                <img
                  src={itemDetails.uploader.avatar}
                  alt={itemDetails.uploader.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{itemDetails.uploader.name}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {itemDetails.uploader.rating}
                    </div>
                    <span>•</span>
                    <span>{itemDetails.uploader.totalSwaps} swaps</span>
                    <span>•</span>
                    <span>Joined {itemDetails.uploader.joinedDate}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button 
                    className="px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#436369' }}
                  >
                    View Profile
                  </button>
                  <button 
                    className="px-4 py-2 rounded-lg font-medium border-2 hover:bg-gray-50 transition-colors"
                    style={{ borderColor: '#436369', color: '#436369' }}
                  >
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Similar Items */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#436369' }}>
                Similar Items
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-square bg-gray-200 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium text-gray-800">Similar Item {item}</p>
                    <p className="text-xs text-gray-500">30 points</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListing;