import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const offers = [
    {
        id: 1,
        // Food/Feast image
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=850&q=80",
        title: "50% OFF",
        subtitle: "Up to ₹100 | Code: WELCOME50"
    },
    {
        id: 2,
        // Delivery/Burger image
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=850&q=80",
        title: "Free Delivery",
        subtitle: "On your first 3 orders"
    },
    {
        id: 3,
        // Dessert/Pizza image
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=850&q=80",
        title: "20% Cashback",
        subtitle: "Use Amazon Pay"
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
    };

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full py-8">
            <div className="relative w-full h-[250px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg group">

                {/* Flex Strip for Sliding Animation */}
                <div
                    className="flex w-full h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {offers.map((offer) => (
                        <div key={offer.id} className="min-w-full h-full relative">
                            <img
                                src={offer.img}
                                alt="Offer"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                <h3 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">{offer.title}</h3>
                                <p className="text-xl md:text-2xl font-medium text-gray-100 drop-shadow-md">{offer.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full text-white transition-colors z-20 opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {offers.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
