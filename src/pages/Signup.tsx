import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChefHat } from 'lucide-react';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { signup } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && email) {
            signup(name, email);
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
                    <h2 className="text-2xl font-bold mb-1">Sign up</h2>
                    <p className="text-gray-500 text-sm">Create your account to start ordering</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 border border-gray-300 rounded focus:outline-none focus:border-primary transition-colors"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
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
                        Continue
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary font-bold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
