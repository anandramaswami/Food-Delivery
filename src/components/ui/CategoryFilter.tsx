const categories = [
    { id: 1, name: "Biryani", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667170/PC_Creative%20refresh/3D_bau/banners_new/Biryani.png" },
    { id: 2, name: "Pizza", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667170/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png" },
    { id: 3, name: "Burger", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667170/PC_Creative%20refresh/3D_bau/banners_new/Burger.png" },
    { id: 4, name: "North Indian", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667171/PC_Creative%20refresh/3D_bau/banners_new/North_Indian.png" },
    { id: 5, name: "Chinese", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667170/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png" },
    { id: 6, name: "Rolls", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667171/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png" },
    { id: 7, name: "Ice Cream", img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667170/PC_Creative%20refresh/3D_bau/banners_new/Ice_Cream.png" },
];

const CategoryFilter = ({ onSelectCategory }: { onSelectCategory: (category: string) => void }) => {
    return (
        <div className="py-8 border-b border-gray-100">
            <h2 className="px-4 text-2xl font-bold text-dark mb-4">What's on your mind?</h2>
            <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar px-4 pb-4">
                {categories.map((cat) => (
                    <div key={cat.id} onClick={() => onSelectCategory(cat.name)} className="flex flex-col items-center min-w-[100px] cursor-pointer group">
                        <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
