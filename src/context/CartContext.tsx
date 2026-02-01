import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string; // Unique ID (usually combined with restaurant like restId_itemId)
    name: string;
    price: number; // In rupees
    quantity: number;
    restaurantId: number;
    isVeg?: boolean;
    image?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    message: string | null; // For simplified toast notifications (e.g. "Item added")
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {
        // Optional: Check if adding from different restaurant and warn (simplified: just allow for now or clear)

        setItems(prev => {
            const existing = prev.find(item => item.id === newItem.id);
            if (existing) {
                return prev.map(item => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...newItem, quantity: 1 }];
        });

        // Simple toast message
        setMessage(`Added ${newItem.name} to cart`);
        setTimeout(() => setMessage(null), 2000);
    };

    const removeFromCart = (itemId: string) => {
        setItems(prev => {
            const existing = prev.find(item => item.id === itemId);
            if (existing && existing.quantity > 1) {
                return prev.map(item => item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item);
            }
            return prev.filter(item => item.id !== itemId);
        });
    };

    const clearCart = () => setItems([]);

    const getCartTotal = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, getCartTotal, message }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};
