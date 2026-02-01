import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import confetti from 'canvas-confetti';

const OrderSuccess = () => {

    useEffect(() => {
        // Fire confetti on mount
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#fc8019', '#60b246', '#ffffff']
        });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                </div>

                <h1 className="text-3xl font-bold text-dark mb-2">Order Placed Successfully!</h1>
                <p className="text-gray-500 mb-8 max-w-md">
                    Your yum food is on its way. You can track your order status in the profile section.
                </p>

                <Link to="/" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow hover:bg-orange-600 transition-colors">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderSuccess;
