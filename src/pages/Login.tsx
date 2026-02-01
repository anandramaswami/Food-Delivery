import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChefHat } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            login(email, 'Demo User');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-full max-w-md p-8">
                <div className="flex justify-center mb-8">
                    <div className="flex items-center gap-2">
                        <ChefHat className="w-10 h-10 text-primary" />
                        <span className="text-3xl font-bold text-primary">SwiggyClone</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-1">Login</h2>
                    <p className="text-gray-500 text-sm">Get access to your Orders, Wishlist and Recommendations</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email Number"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-primary transition-colors"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-orange-600 transition-colors uppercase tracking-wide"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    New to SwiggyClone?{' '}
                    <Link to="/signup" className="text-primary font-bold hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
