import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem } from './CartContext';

export interface Order {
    id: string;
    items: CartItem[];
    totalAmount: number;
    date: string;
    status: 'Delivered' | 'Processing' | 'Cancelled';
    transactionId: string;
}

interface OrderContextType {
    orders: Order[];
    addOrder: (items: CartItem[], totalAmount: number, transactionId: string) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const storedOrders = localStorage.getItem('orders');
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (items: CartItem[], totalAmount: number, transactionId: string) => {
        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            items,
            totalAmount,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            status: 'Processing',
            transactionId,
        };

        setOrders(prev => {
            const updatedOrders = [newOrder, ...prev];
            // Keep only the latest 5 orders
            if (updatedOrders.length > 5) {
                return updatedOrders.slice(0, 5);
            }
            return updatedOrders;
        });
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) throw new Error('useOrders must be used within OrderProvider');
    return context;
};
