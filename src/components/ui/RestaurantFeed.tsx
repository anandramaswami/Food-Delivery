import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import RestaurantCard from './RestaurantCard';

// Updated Mock Data with Unsplash Images
const restaurants = [
    {
        id: 1,
        name: "Meghana Foods",
        cloudinaryImageId: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=660&q=80", // Biryani
        locality: "Residency Road",
        areaName: "Ashok Nagar",
        costForTwo: "₹500 FOR TWO",
        cuisines: ["Biryani", "Andhra", "South Indian"],
        avgRating: 4.5,
        sla: { deliveryTime: 34 }
    },
    {
        id: 2,
        name: "Kannur Food Point",
        cloudinaryImageId: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=660&q=80", // Curry/South Indian
        locality: "SG Palya",
        areaName: "Tavarekere",
        costForTwo: "₹300 FOR TWO",
        cuisines: ["Kerala", "Chinese"],
        avgRating: 3.9,
        sla: { deliveryTime: 28 }
    },
    {
        id: 3,
        name: "Empire Restaurant",
        cloudinaryImageId: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=660&q=80", // Kebabs/Chicken
        locality: "Koramangala",
        areaName: "Koramangala",
        costForTwo: "₹450 FOR TWO",
        cuisines: ["North Indian", "Kebabs", "Biryani"],
        avgRating: 4.2,
        sla: { deliveryTime: 45 }
    },
    {
        id: 4,
        name: "Burger King",
        cloudinaryImageId: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=660&q=80", // Burger
        locality: "M G Road",
        areaName: "M G Road",
        costForTwo: "₹350 FOR TWO",
        cuisines: ["Burgers", "American"],
        avgRating: 4.1,
        sla: { deliveryTime: 25 }
    },
    {
        id: 5,
        name: "Dominos Pizza",
        cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=660&q=80", // Pizza
        locality: "Indiranagar",
        areaName: "Indiranagar",
        costForTwo: "₹400 FOR TWO",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        sla: { deliveryTime: 30 }
    },
    {
        id: 6,
        name: "Al Bek",
        cloudinaryImageId: "https://images.unsplash.com/photo-1541518763179-0e3c97b4797b?auto=format&fit=crop&w=660&q=80", // Arabian/Mix
        locality: "Malleshwaram",
        areaName: "Malleshwaram",
        costForTwo: "₹500 FOR TWO",
        cuisines: ["Arabian", "North Indian", "Chinese"],
        avgRating: 4.0,
        sla: { deliveryTime: 40 }
    }
];

const RestaurantFeed = ({ filterCategory }: { filterCategory: string | null }) => {
    const navigate = useNavigate();

    const filteredRestaurants = filterCategory
        ? restaurants.filter(r => r.cuisines.some(c => c.includes(filterCategory)))
        : restaurants;

    return (
        <div className="py-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
                {filterCategory ? `Best ${filterCategory} in Bangalore` : "Restaurants with online food delivery in Bangalore"}
            </h2>

            {/* Filters */}
            <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
                <button className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-dark/80 hover:bg-gray-50 bg-white shadow-sm flex items-center gap-2 whitespace-nowrap">
                    Filter <SlidersHorizontal className="w-4 h-4" />
                </button>
                {["Sort By", "Fast Delivery", "New on Swiggy", "Ratings 4.0+", "Pure Veg", "Offers"].map((f) => (
                    <button key={f} className="px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-dark/80 hover:bg-gray-50 bg-white shadow-sm whitespace-nowrap transition-all">
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
                {filteredRestaurants.map(rest => (
                    <div key={rest.id} onClick={() => navigate(`/restaurant/${rest.id}`)}>
                        <RestaurantCard data={rest} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantFeed;
