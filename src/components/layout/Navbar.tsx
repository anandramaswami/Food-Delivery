import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, ChefHat, ChevronDown, Percent } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { items } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-[#fc8019] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20 text-white">

                    {/* Left: Logo & Address */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2 group">
                            <ChefHat className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
                            <span className="text-2xl font-bold tracking-tight">SwiggyClone</span>
                        </Link>

                        <div className="hidden md:flex items-center gap-2 text-sm text-white/90 hover:text-white cursor-pointer transition-colors">
                            <span className="font-bold border-b-2 border-white pb-0.5">Other</span>
                            <span className="truncate max-w-[200px] opacity-90">Bangalore, Karnataka, India</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Middle: Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for restaurants and food"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        </div>
                    </div>

                    {/* Right: Navigation */}
                    <nav className="flex items-center gap-8 font-medium">

                        <div className="hidden md:flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity">
                            <div className="relative">
                                <Percent className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                </span>
                            </div>
                            <span>Offers</span>
                        </div>

                        <Link to="/cart" className="flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity relative">
                            <ShoppingBag className="w-5 h-5" />
                            <span>Cart</span>
                            {items.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-white text-[#fc8019] text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                                    {items.length}
                                </span>
                            )}
                        </Link>

                        <div className="hidden md:flex items-center gap-2 hover:opacity-80 cursor-pointer transition-opacity">
                            <User className="w-5 h-5" />
                            {user ? (
                                <span onClick={logout}>Logout</span>
                            ) : (
                                <Link to="/login">Sign In</Link>
                            )}
                        </div>
                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
