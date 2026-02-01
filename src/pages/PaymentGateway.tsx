import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { ShieldCheck, Loader2 } from 'lucide-react';

const PaymentGateway = () => {
    const [pin, setPin] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { clearCart, getCartTotal, items } = useCart();
    const { addOrder } = useOrders();

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (pin.length !== 4) {
            setError('Please enter a valid 4-digit PIN');
            return;
        }

        setLoading(true);

        // Simulate Network Request
        setTimeout(() => {
            setLoading(false);
            if (pin === '1234') { // Mock correct PIN
                addOrder(items, parseFloat(totalAmount), `TXN-${Date.now()}`);
                clearCart();
                navigate('/success');
            } else {
                setError('Incorrect PIN. Please try again.');
            }
        }, 2000);
    };

    const totalAmount = (getCartTotal() + 45 + (getCartTotal() * 0.05)).toFixed(2);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                        <ShieldCheck className="w-8 h-8 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Payment Gateway</h1>
                    <p className="text-gray-500 text-sm mt-1">Secure Transaction</p>
                </div>

                <div className="border-t border-b border-gray-100 py-4 mb-6">
                    <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-600">Merchant</span>
                        <span className="font-medium text-dark">SwiggyClone Foods</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                        <span className="text-gray-800">Total Amount</span>
                        <span className="text-primary">₹{totalAmount}</span>
                    </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Enter UPI PIN</label>
                        <input
                            type="password"
                            maxLength={4}
                            className="w-full text-center text-3xl tracking-[1em] p-4 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-200"
                            placeholder="••••"
                            value={pin}
                            onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                        />
                        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                        <p className="text-xs text-center text-gray-400 mt-2">Hint: Use 1234</p>
                    </div>

                    <button
                        type="button" // Change to submit
                        onClick={handlePayment}
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg shadow hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : `PAY ₹${totalAmount}`}
                    </button>
                </form>

                <button onClick={() => navigate('/cart')} className="w-full text-center text-sm text-gray-500 mt-6 hover:underline">
                    Cancel Transaction
                </button>
            </div>
        </div>
    );
};

export default PaymentGateway;
