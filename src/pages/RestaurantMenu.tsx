import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, MapPin, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Mock Data for individual Restaurant Menus
// In a real app, this would be fetched by ID
const MENU_DATA: Record<string, any> = {
    "1": { // Meghana Foods
        name: "Meghana Foods",
        rating: 4.5,
        deliveryTime: "30-35 mins",
        costForTwo: "₹500 for two",
        cuisines: "Biryani, Andhra, South Indian",
        location: "Residency Road",
        items: [
            { id: "101", name: "Chicken Boneless Biryani", price: 330, isVeg: false, desc: "Signature dish with boneless chicken pieces and aromatic rice.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80" },
            { id: "102", name: "Paneer Biryani", price: 280, isVeg: true, desc: "Perfectly cooked basmati rice with marinated paneer cubes.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80" },
            { id: "103", name: "Chicken 65", price: 290, isVeg: false, desc: "Spicy, deep-fried chicken dish originating from Hotel Buhari, Chennai.", image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50c91?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    "2": { // Kannur Food Point
        name: "Kannur Food Point",
        rating: 3.9,
        deliveryTime: "25-30 mins",
        costForTwo: "₹300 for two",
        cuisines: "Kerala, Chinese",
        location: "SG Palya",
        items: [
            { id: "201", name: "Kerala Parotta", price: 25, isVeg: true, desc: "Flaky, layered flatbread.", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=300&q=80" },
            { id: "202", name: "Chicken Curry", price: 180, isVeg: false, desc: "Spicy Kerala style chicken curry.", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=300&q=80" },
            { id: "203", name: "Beef Fry", price: 220, isVeg: false, desc: "Kerala style dry beef fry with coconut slices.", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=300&q=80" }
        ]
    },
    // Default fallback for others
    "default": {
        name: "Generic Restaurant",
        rating: 4.0,
        deliveryTime: "40 mins",
        costForTwo: "₹400 for two",
        cuisines: "North Indian, Chinese",
        location: "Bangalore",
        items: [
            { id: "901", name: "Veg Fried Rice", price: 150, isVeg: true, desc: "Classic wok tossed rice with veggies.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=300&q=80" },
            { id: "902", name: "Chicken Manchurian", price: 200, isVeg: false, desc: "Indo-Chinese favorite.", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=300&q=80" }
        ]
    }
};

const RestaurantMenu = () => {
    const { id } = useParams();
    const { addToCart, items, message } = useCart();

    const restaurant = MENU_DATA[id || "1"] || MENU_DATA["default"];

    // Calculate distinct items count in cart from this restaurant to show "Added" state visual
    const getQuantity = (itemId: string) => {
        return items.find(i => i.id === itemId)?.quantity || 0;
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Toast Notification */}
            {message && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-dark text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
                    {message}
                </div>
            )}

            {/* Breadcrumb / Header Mock */}
            <div className="max-w-4xl mx-auto px-4 pt-8 pb-4">
                <div className="text-xs text-gray-400 mb-4">Home / Bangalore / {restaurant.name}</div>

                {/* Restaurant Info Card */}
                <div className="bg-white rounded-[20px] p-6 shadow-sm mb-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-2xl font-bold text-dark mb-2">{restaurant.name}</h1>
                            <p className="text-gray-500 text-sm">{restaurant.cuisines}</p>
                            <p className="text-gray-500 text-sm mb-4">{restaurant.location}</p>

                            <div className="flex items-center gap-4 text-dark font-bold text-sm">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> {restaurant.deliveryTime}
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>{restaurant.costForTwo}</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-2 flex flex-col items-center shadow-sm">
                            <div className="flex items-center gap-1 text-green-600 font-bold border-b border-gray-200 pb-1 mb-1">
                                <Star className="w-4 h-4 fill-current" />
                                <span>{restaurant.rating}</span>
                            </div>
                            <span className="text-[10px] text-gray-500 font-bold">1K+ ratings</span>
                        </div>
                    </div>
                </div>

                {/* Menu Header */}
                <div className="text-center mb-8">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase"> - Menu - </span>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                    <h2 className="text-xl font-bold text-dark">Recommended ({restaurant.items.length})</h2>

                    {restaurant.items.map((item: any) => (
                        <div key={item.id} className="bg-white rounded-lg p-4 flex justify-between items-center group hover:shadow-md transition-shadow">
                            <div className="max-w-[70%]">
                                <div className={`w-4 h-4 border ${item.isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center mb-2`}>
                                    <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                                </div>
                                <h3 className="font-bold text-dark text-lg">{item.name}</h3>
                                <span className="text-dark font-medium block mt-1">₹{item.price}</span>
                                <p className="text-gray-400 text-sm mt-3 line-clamp-2">{item.desc}</p>
                            </div>

                            <div className="relative w-[118px] h-[96px]">
                                {/* Placeholder Food Image */}
                                <div className="w-full h-full bg-gray-200 rounded-lg object-cover" />

                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                    <button
                                        onClick={() => addToCart({ ...item, restaurantId: parseInt(id || '0') })}
                                        className="bg-white text-green-600 font-extrabold border border-gray-300 rounded px-8 py-2 shadow uppercase hover:shadow-lg transition-all"
                                    >
                                        Add
                                        {getQuantity(item.id) > 0 && <span className="ml-1 text-xs">({getQuantity(item.id)})</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Cart Button */}
            {items.length > 0 && (
                <div className="fixed bottom-0 w-full bg-[#60b246] text-white p-4 font-bold flex justify-between items-center cursor-pointer hover:bg-[#539b3d] transition-colors z-[100]" onClick={() => window.location.href = '/cart'}>
                    <div className="flex items-center gap-2">
                        <span>{items.length} Items</span>
                        <span>|</span>
                        <span>₹{items.reduce((acc, i) => acc + (i.price * i.quantity), 0)}</span>
                    </div>
                    <div className="flex items-center gap-1 uppercase text-sm tracking-wide">
                        View Cart <ShoppingBagIcon />
                    </div>
                </div>
            )}
        </div>
    );
};

// Simple Icon helper
const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);

export default RestaurantMenu;
