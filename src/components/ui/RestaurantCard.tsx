import React from 'react';
import { Star } from 'lucide-react';

interface RestaurantProps {
    data: {
        id: number;
        name: string;
        cloudinaryImageId: string;
        locality: string;
        areaName: string;
        costForTwo: string;
        cuisines: string[];
        avgRating: number;
        sla: {
            deliveryTime: number;
        };
    }
}

const RestaurantCard: React.FC<RestaurantProps> = ({ data }) => {
    return (
        <div className="group cursor-pointer hover:scale-95 transition-transform duration-200">
            <div className="relative w-full h-[180px] rounded-2xl overflow-hidden shadow-sm">
                <img
                    src={data.cloudinaryImageId}
                    alt={data.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-2 left-3">
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-tight shadow-black drop-shadow-md">
                        {data.costForTwo}
                    </h3>
                </div>
            </div>

            <div className="mt-3 px-1">
                <h3 className="font-bold text-lg text-dark/90 truncate">{data.name}</h3>
                <div className="flex items-center gap-1 font-semibold text-dark/80">
                    <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                    </span>
                    <span>{data.avgRating}</span>
                    <span className="w-1 h-1 rounded-full bg-dark/80" />
                    <span>{data.sla.deliveryTime} mins</span>
                </div>
                <p className="text-gray-500 truncate text-base">
                    {data.cuisines.join(", ")}
                </p>
                <p className="text-gray-500 text-sm truncate">
                    {data.areaName}
                </p>
            </div>
        </div>
    );
};

export default RestaurantCard;
