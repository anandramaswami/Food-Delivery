import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, name?: string) => void;
    signup: (name: string, email: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string, name: string = 'User') => {
        const newUser = { name, email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/');
    };

    const signup = (name: string, email: string) => {
        const newUser = { name, email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
