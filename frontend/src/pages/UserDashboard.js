import React, { useState } from 'react';
import { User, Bell, Settings, Plus, Star, TrendingUp, Package, Heart, MessageCircle, Calendar, Award, Edit3 } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const userProfile = {
    name: "Sarah Mitchell",
    username: "@sarah_m",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    joinedDate: "March 2023",
    location: "San Francisco, CA",
    bio: "Sustainable fashion enthusiast 🌱 Love finding unique pieces and giving clothes a second life. Always happy to swap and help reduce textile waste!",
    stats: {
      totalSwaps: 23,
      points: 156,
      rating: 4.8,
      itemsListed: 12,
      completedSwaps: 18,
      savedItems: 34
    },
    badges: [
      { name: "Eco Warrior", icon: "🌱", description: "Completed 20+ swaps" },
      { name: "Community Star", icon: "⭐", description: "4.5+ average rating" },
      { name: "Early Adopter", icon: "🚀", description: "Member since beta" }
    ]
  };

  const myListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop",
      points: 45,
      status: "Active",
      views: 127,
      likes: 15,
      datePosted: "3 days ago"
    },
    {
      id: 2,
      title: "Floral Summer Dress",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop",
      points: 35,
      status: "Pending",
      views: 89,
      likes: 12,
      datePosted: "1 week ago"
    },
    {
      id: 3,
      title: "Wool Sweater",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=200&fit=crop",
      points: 50,
      status: "Active",
      views: 203,
      likes: 28,
      datePosted: "2 weeks ago"
    },
    {
      id: 4,
      title: "Black Leather Boots",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200&h=200&fit=crop",
      points: 60,
      status: "Swapped",
      views: 156,
      likes: 22,
      datePosted: "1 month ago"
    }
  ];

  const myPurchases = [
    {
      id: 1,
      title: "Vintage Band T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      pointsSpent: 30,
      status: "Delivered",
      seller: "Mike R.",
      dateSwapped: "2 days ago"
    },
    {
      id: 2,
      title: "Designer Handbag",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200&h=200&fit=crop",
      pointsSpent: 85,
      status: "In Transit",
      seller: "Emma L.",
      dateSwapped: "1 week ago"
    },
    {
      id: 3,
      title: "Casual Sneakers",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      pointsSpent: 40,
      status: "Delivered",
      seller: "Anna K.",
      dateSwapped: "2 weeks ago"
    },
    {
      id: 4,
      title: "Silk Scarf",
      image: "https://images.unsplash.com/photo-1601112761811-6256c98a2de5?w=200&h=200&fit=crop",
      pointsSpent: 25,
      status: "Completed",
      seller: "Lisa P.",
      dateSwapped: "1 month ago"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-100';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'Swapped':
        return 'text-blue-600 bg-blue-100';
      case 'Delivered':
        return 'text-green-600 bg-green-100';
      case 'In Transit':
        return 'text-yellow-600 bg-yellow-100';
      case 'Completed':
        return 'text-gray-600 bg-gray-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d5cabd' }}>
      {/* Header */}
      <header className="shadow-lg sticky top-0 z-50" style={{ backgroundColor: '#436369' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-xl font-semibold text-white">User Dashboard</h1>
            
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-200 transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              <button className="text-white hover:text-gray-200 transition-colors">
                <Settings className="h-6 w-6" />
              </button>
              <button className="text-white hover:text-gray-200 transition-colors">
                <User className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt={userProfile.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow" style={{ color: '#436369' }}>
                <Edit3 className="h-4 w-4" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: '#436369' }}>
                    {userProfile.name}
                  </h2>
                  <p className="text-gray-600">{userProfile.username}</p>
                  <p className="text-sm text-gray-500">
                    {userProfile.location} • Joined {userProfile.joinedDate}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#436369' }}>
                      {userProfile.stats.points}
                    </div>
                    <div className="text-sm text-gray-500">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#436369' }}>
                      {userProfile.stats.totalSwaps}
                    </div>
                    <div className="text-sm text-gray-500">Swaps</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                      <span className="text-2xl font-bold" style={{ color: '#436369' }}>
                        {userProfile.stats.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mt-4 max-w-2xl">
                {userProfile.bio}
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Package className="h-8 w-8 mx-auto mb-2" style={{ color: '#436369' }} />
              <div className="text-xl font-bold">{userProfile.stats.itemsListed}</div>
              <div className="text-sm text-gray-500">Items Listed</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" style={{ color: '#436369' }} />
              <div className="text-xl font-bold">{userProfile.stats.completedSwaps}</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2" style={{ color: '#436369' }} />
              <div className="text-xl font-bold">{userProfile.stats.savedItems}</div>
              <div className="text-sm text-gray-500">Saved Items</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Award className="h-8 w-8 mx-auto mb-2" style={{ color: '#436369' }} />
              <div className="text-xl font-bold">{userProfile.badges.length}</div>
              <div className="text-sm text-gray-500">Badges</div>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#436369' }}>
              Achievements
            </h3>
            <div className="flex flex-wrap gap-3">
              {userProfile.badges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
                  <span className="text-lg">{badge.icon}</span>
                  <span className="text-sm font-medium">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* My Listings Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold" style={{ color: '#436369' }}>
              My Listings
            </h2>
            <button 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#436369' }}
            >
              <Plus className="h-5 w-5" />
              <span>Add New Item</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myListings.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 truncate">{item.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold" style={{ color: '#436369' }}>
                      {item.points} points
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.views} views</span>
                    <span>{item.likes} likes</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{item.datePosted}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Purchases Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#436369' }}>
            My Purchases
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {myPurchases.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 truncate">{item.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold" style={{ color: '#436369' }}>
                      {item.pointsSpent} points
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">From {item.seller}</p>
                  <p className="text-xs text-gray-400">{item.dateSwapped}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;