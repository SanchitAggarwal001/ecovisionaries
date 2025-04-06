import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { SellerDashboard } from './components/SellerDashboard';

// Types
interface User {
  id: string;
  email: string;
  role: 'seller' | 'customer';
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  status: 'active' | 'inactive';
  category: string;
}

interface ShopProduct extends Product {
  category: string;
  brand: string;
  sustainability_features: string[];
  materials: string[];
  sizes: string[];
  colors: string[];
}

const shopProducts: ShopProduct[] = [
  {
    id: '1',
    name: 'Organic Cotton Relaxed Fit T-Shirt',
    description: 'Made from 100% GOTS-certified organic cotton, this breathable t-shirt features a relaxed fit and natural dyes.',
    price: 39.99,
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Tops',
    brand: 'EcoBasics',
    sustainability_features: ['Organic Cotton', 'Natural Dyes', 'Water-Saving Production'],
    materials: ['100% Organic Cotton'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Natural White', 'Earth Brown', 'Sage Green']
  },
  {
    id: '2',
    name: 'Recycled Denim High-Waisted Jeans',
    description: 'Classic high-waisted jeans made from recycled denim and organic cotton blend. Features a comfortable stretch fit.',
    price: 89.99,
    image_url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Bottoms',
    brand: 'GreenDenim',
    sustainability_features: ['Recycled Materials', 'Water-Saving Process', 'Eco-Friendly Wash'],
    materials: ['80% Recycled Cotton', '20% Organic Cotton'],
    sizes: ['24', '26', '28', '30', '32', '34'],
    colors: ['Light Wash', 'Medium Wash', 'Dark Wash']
  },
  {
    id: '3',
    name: 'Hemp-Blend Oversized Sweater',
    description: 'Cozy oversized sweater made from a sustainable hemp and organic cotton blend. Perfect for layering.',
    price: 79.99,
    image_url: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Knitwear',
    brand: 'HempStyle',
    sustainability_features: ['Hemp Blend', 'Low Impact Dyes', 'Biodegradable'],
    materials: ['55% Hemp', '45% Organic Cotton'],
    sizes: ['XS/S', 'M/L', 'XL/XXL'],
    colors: ['Oatmeal', 'Forest Green', 'Navy']
  },
  {
    id: '4',
    name: 'Tencel™ Wrap Dress',
    description: 'Elegant wrap dress made from Tencel™ Lyocell, featuring adjustable waist tie and flowy silhouette.',
    price: 129.99,
    image_url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Dresses',
    brand: 'EcoLuxe',
    sustainability_features: ['Tencel™ Lyocell', 'Closed-Loop Production', 'Zero Waste Design'],
    materials: ['100% Tencel™ Lyocell'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Dusty Rose', 'Sage', 'Black']
  },
  {
    id: '5',
    name: 'Cork Leather Crossbody Bag',
    description: 'Versatile crossbody bag made from sustainable cork leather, featuring adjustable strap and multiple compartments.',
    price: 99.99,
    image_url: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Accessories',
    brand: 'CorkStyle',
    sustainability_features: ['Vegan Cork Leather', 'Biodegradable', 'Handcrafted'],
    materials: ['Cork Leather', 'Organic Cotton Lining'],
    sizes: ['One Size'],
    colors: ['Natural Cork', 'Black Cork']
  },
  {
    id: '6',
    name: 'Recycled Cashmere Scarf',
    description: 'Luxuriously soft scarf made from recycled cashmere, perfect for adding warmth and style to any outfit.',
    price: 69.99,
    image_url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Accessories',
    brand: 'ReCashmere',
    sustainability_features: ['Recycled Cashmere', 'Zero Waste Production', 'Local Craftsmanship'],
    materials: ['100% Recycled Cashmere'],
    sizes: ['One Size'],
    colors: ['Camel', 'Grey Melange', 'Navy']
  },
  {
    id: '7',
    name: 'Bamboo Fiber Lounge Set',
    description: 'Ultra-comfortable lounge set made from bamboo fiber, including top and bottom. Perfect for home or casual wear.',
    price: 119.99,
    image_url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Loungewear',
    brand: 'BambooBasics',
    sustainability_features: ['Bamboo Fiber', 'Biodegradable', 'Anti-bacterial'],
    materials: ['95% Bamboo Fiber', '5% Elastane'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cloud Grey', 'Soft Pink', 'Sage Green']
  },
  {
    id: '8',
    name: 'Recycled Ocean Plastic Swimsuit',
    description: 'One-piece swimsuit made from recycled ocean plastic, featuring a classic cut and UV protection.',
    price: 89.99,
    image_url: 'https://images.unsplash.com/photo-1615383176880-c5f3ee7fb4c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    status: 'active',
    category: 'Swimwear',
    brand: 'OceanWear',
    sustainability_features: ['Recycled Ocean Plastic', 'UV Protection', 'Chlorine Resistant'],
    materials: ['78% Recycled Polyamide', '22% Elastane'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ocean Blue', 'Coral', 'Black']
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = ['All', ...new Set(shopProducts.map(product => product.category))];
  const brands = [...new Set(shopProducts.map(product => product.brand))];
  
  const filteredProducts = shopProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => !selectedFilter || product.brand === selectedFilter)
    .filter(product => 
      searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    selectedCategory === category
                      ? 'bg-emerald-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <div className="space-y-2">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedFilter(selectedFilter === brand ? '' : brand)}
                  className={`block w-full text-left px-4 py-2 rounded-md ${
                    selectedFilter === brand
                      ? 'bg-emerald-600 text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[100%]">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-emerald-600 font-medium mb-1">{product.brand}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                  
                  {/* Sustainability Features */}
                  <div className="mt-2">
                    <div className="flex flex-wrap gap-1">
                      {product.sustainability_features.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>

                  {/* Additional Details */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium">Sizes:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.sizes.map((size, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 border border-gray-200 rounded-md text-xs"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">Colors:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.colors.map((color, index) => (
                            <span
                              key={index}
                              className="inline-block px-2 py-1 border border-gray-200 rounded-md text-xs"
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/shop" element={<Shop />} />
          {user?.role === 'seller' && (
            <Route path="/seller/products" element={<SellerDashboard />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;