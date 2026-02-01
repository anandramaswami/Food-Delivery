import { useOrders } from '../context/OrderContext';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { RotateCw } from 'lucide-react';

const OrderHistory = () => {
    const { orders } = useOrders();
    const { addToCart } = useCart();

    const handleOrderAgain = (order: any) => {
        order.items.forEach((item: any) => {
            addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                restaurantId: item.restaurantId,
                isVeg: item.isVeg,
                image: item.image
            });
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Order History</h1>
                    <Link to="/" className="px-4 py-2 bg-[#fc8019] text-white rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">
                        Back to Home
                    </Link>
                </div>

                {orders.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-600 mb-2">No past orders</h2>
                        <p className="text-gray-500">Go ahead and order some delicious food!</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order.id} className="bg-white p-4 md:p-6 rounded-xl shadow-lg border-2 border-[#fc8019]">
                                {/* Header Section */}
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 pb-4 border-b border-gray-100">
                                    <div className="mb-2 md:mb-0">
                                        <p className="text-sm text-gray-500 mb-1">Order ID: <span className="font-mono text-gray-900">{order.id}</span></p>
                                        <p className="text-xs text-gray-400 break-all">Transaction ID: {order.transactionId}</p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className="text-lg font-bold text-gray-800">₹{order.totalAmount}</p>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Items List */}
                                    <div className="flex-1">
                                        <h3 className="font-medium text-gray-800 mb-3">Items</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="flex flex-col items-center text-center p-2 border border-gray-50 rounded-lg hover:shadow-sm transition-shadow">
                                                    {item.image ? (
                                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mb-2" />
                                                    ) : (
                                                        <div className="w-16 h-16 bg-gray-200 rounded-md mb-2 flex items-center justify-center text-xs text-gray-400">No Img</div>
                                                    )}
                                                    <span className="text-sm font-medium text-gray-800 line-clamp-2 h-10">{item.name}</span>
                                                    <span className="text-xs text-gray-500 mt-1">{item.quantity} x ₹{item.price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Status & Action Section */}
                                    <div className="flex flex-col justify-center items-center md:border-l md:border-gray-100 md:pl-6 min-w-[200px]">
                                        <span className={`px-4 py-2 rounded-full text-sm font-semibold mb-4 ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                            order.status === 'Cancelled' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {order.status}
                                        </span>

                                        <button
                                            onClick={() => handleOrderAgain(order)}
                                            className="flex items-center justify-center gap-2 px-6 py-3 text-orange-600 bg-orange-50 rounded-lg font-bold hover:bg-orange-100 transition-colors w-full md:w-auto"
                                        >
                                            <RotateCw className="w-5 h-5" />
                                            Order Again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
