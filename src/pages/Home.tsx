import React from 'react';
import HeroCarousel from '../components/ui/HeroCarousel';
import CategoryFilter from '../components/ui/CategoryFilter';
import RestaurantFeed from '../components/ui/RestaurantFeed';
import RecentOrders from '../components/ui/RecentOrders';

const Home = () => {
    const [category, setCategory] = React.useState<string | null>(null);

    return (
        <div className="min-h-screen bg-white">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <HeroCarousel />
                <RecentOrders />
                <CategoryFilter onSelectCategory={setCategory} />
                <RestaurantFeed filterCategory={category} />
            </main>
        </div>
    );
};

export default Home;
