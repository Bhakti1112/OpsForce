import React, { useState } from 'react';
import { Users, Package, Settings, Eye, Edit, Trash2, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock user data
  const [users] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      joinDate: '2024-01-15',
      itemsListed: 12,
      swapsCompleted: 8,
      points: 340,
      status: 'active',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      joinDate: '2024-02-03',
      itemsListed: 8,
      swapsCompleted: 15,
      points: 520,
      status: 'active',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      email: 'emma.rod@email.com',
      joinDate: '2024-01-28',
      itemsListed: 5,
      swapsCompleted: 3,
      points: 180,
      status: 'inactive',
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.w@email.com',
      joinDate: '2024-03-10',
      itemsListed: 20,
      swapsCompleted: 12,
      points: 450,
      status: 'active',
      avatar: '/api/placeholder/40/40'
    }
  ]);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleAction = (action, userId) => {
    console.log(`${action} action for user ${userId}`);
    // Here you would implement actual actions like suspend, delete, etc.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">Welcome, Admin</div>
              <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-[#436369] text-[#436369]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Users className="inline w-4 h-4 mr-2" />
              Manage Users
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'orders'
                  ? 'border-[#436369] text-[#436369]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Package className="inline w-4 h-4 mr-2" />
              Manage Orders
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-[#436369] text-[#436369]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Settings className="inline w-4 h-4 mr-2" />
              Manage Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'users' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Manage Users</h2>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#436369] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              {/* Users List */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#d5cabd] flex items-center justify-center mr-4">
                      <span className="text-[#436369] font-medium text-lg">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* User Details */}
                    <div className="flex-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-500">Joined: {user.joinDate}</p>
                        </div>
                        <div className="text-sm text-gray-600">
                          <div className="flex justify-between mb-1">
                            <span>Items Listed:</span>
                            <span className="font-medium">{user.itemsListed}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Swaps Completed:</span>
                            <span className="font-medium">{user.swapsCompleted}</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Points:</span>
                            <span className="font-medium text-[#436369]">{user.points}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              user.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {user.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => handleAction('view', user.id)}
                        className="flex items-center justify-center px-3 py-2 bg-[#d5cabd] text-[#436369] rounded-md hover:bg-[#c5b8a9] transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </button>
                      <button
                        onClick={() => handleAction('edit', user.id)}
                        className="flex items-center justify-center px-3 py-2 bg-[#436369] text-white rounded-md hover:bg-[#3a5660] transition-colors"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredUsers.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No users found matching your criteria.
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Manage Orders</h3>
            <p className="text-gray-600">Order management features coming soon...</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="text-center py-16">
            <Settings className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Manage Settings</h3>
            <p className="text-gray-600">Settings management features coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;