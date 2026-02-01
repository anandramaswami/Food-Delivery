import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const { items, addToCart, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Empty Cart" className="w-64 h-64 opacity-80" />
                    <h2 className="text-xl font-bold text-gray-700 mt-4">Your cart is empty</h2>
                    <p className="text-gray-500 mb-6">You can go to home page to view more restaurants</p>
                    <Link to="/" className="bg-primary text-white font-bold py-3 px-6 rounded shadow uppercase hover:bg-orange-600 transition-colors">
                        See Restaurants Near You
                    </Link>
                </div>
            </div>
        );
    }

    const handleCheckout = () => {
        navigate('/payment-gateway');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">

                {/* Cart Items Section */}
                <div className="flex-1 bg-white p-6 shadow-sm rounded-lg lg:min-h-[500px]">
                    <h2 className="text-xl font-bold text-dark mb-6">Cart Items</h2>

                    <div className="space-y-6">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
                                <div className="flex items-start gap-3">
                                    <div className={`w-3 h-3 mt-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                                    <div>
                                        <h3 className="font-medium text-dark">{item.name}</h3>
                                        <span className="text-gray-500 text-sm block">₹{item.price * item.quantity}</span>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="mt-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded hover:bg-red-600 transition-colors"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white shadow-sm">
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-500 font-bold px-2 hover:text-primary">-</button>
                                    <span className="text-green-600 font-bold text-sm px-2">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="text-green-600 font-bold px-2 hover:text-primary">+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <textarea
                            placeholder="Any suggestions? We will pass it on..."
                            className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-black border-dashed bg-gray-50"
                        />
                    </div>
                </div>

                {/* Bill Details Section */}
                <div className="w-full md:w-[350px]">
                    <div className="bg-white p-6 shadow-sm rounded-lg sticky top-24">
                        <h3 className="font-bold text-dark mb-4">Bill Details</h3>

                        <div className="space-y-2 text-sm text-gray-600 border-b border-gray-200 pb-4">
                            <div className="flex justify-between">
                                <span>Item Total</span>
                                <span>₹{getCartTotal()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Fee</span>
                                <span>₹40</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Platform Fee</span>
                                <span>₹5</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST and Restaurant Charges</span>
                                <span>₹{(getCartTotal() * 0.05).toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between font-bold text-dark text-lg pt-4 mb-6">
                            <span>TO PAY</span>
                            <span>₹{(getCartTotal() + 45 + (getCartTotal() * 0.05)).toFixed(2)}</span>
                        </div>

                        <div className="bg-green-50 border border-green-200 p-3 rounded mb-4">
                            <p className="text-green-700 text-xs font-bold">You are saving ₹50 on this order!</p>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="w-full bg-green-600 text-white font-bold py-3 rounded shadow hover:bg-green-700 transition-colors uppercase"
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;
