import React from 'react';
import { useOrders } from '../../context/OrderContext';
import { useCart } from '../../context/CartContext';
import { ArrowRight, RotateCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecentOrders = () => {
    const { orders } = useOrders();
    const { addToCart } = useCart();
    const navigate = useNavigate();

    if (orders.length === 0) return null;

    // Show only the latest order on Home
    const recentOrders = orders.slice(0, 1);

    const handleOrderAgain = (order: any) => {
        order.items.forEach((item: any) => {
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                restaurantId: item.restaurantId,
                isVeg: item.isVeg,
            });
        });
    };

    return (
        <div className="py-6 px-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
                <button
                    onClick={() => navigate('/orders')}
                    className="text-orange-500 text-sm font-semibold flex items-center hover:text-orange-600"
                >
                    See More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentOrders.map((order) => (
                    <div key={order.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-semibold text-gray-800 truncate">
                                    {order.items.map((item: any) => item.name).join(', ')}
                                </h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                    order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                    }`}>
                                    {order.status}
                                </span>
                            </div>
                            <p className="text-gray-500 text-sm mb-3">{order.date} • ₹{order.totalAmount}</p>
                        </div>

                        <button
                            onClick={() => handleOrderAgain(order)}
                            className="w-full flex items-center justify-center gap-2 py-2 mt-2 text-orange-600 bg-orange-50 rounded-lg font-medium hover:bg-orange-100 transition-colors"
                        >
                            <RotateCw className="w-4 h-4" /> Order Again
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;
