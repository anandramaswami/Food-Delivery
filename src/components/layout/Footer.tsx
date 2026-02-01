import { ChefHat, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#fc8019] text-white pt-16 pb-8">
            <div className="max-w-[75%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <ChefHat className="w-8 h-8 text-white" />
                            <span className="text-2xl font-bold tracking-tight">SwiggyClone</span>
                        </div>
                        <p className="opacity-90 leading-relaxed mb-6">
                            Delivering happiness to your doorstep. The best local restaurants and favorites, delivered fast and fresh.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:scale-110 transition-transform"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="hover:scale-110 transition-transform"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-3 opacity-90">
                            <li><a href="#" className="hover:underline hover:opacity-100">About Us</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Team</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Careers</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Swiggy Blog</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Bug Bounty</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 opacity-90">
                            <li><a href="#" className="hover:underline hover:opacity-100">Help & Support</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Partner with us</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Ride with us</a></li>
                        </ul>
                        <h4 className="text-lg font-bold mt-6 mb-4">Legal</h4>
                        <ul className="space-y-3 opacity-90">
                            <li><a href="#" className="hover:underline hover:opacity-100">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline hover:opacity-100">Refund & Cancellation</a></li>
                        </ul>
                    </div>

                    {/* App Column */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">We deliver to</h4>
                        <ul className="space-y-3 opacity-90">
                            <li>Bangalore</li>
                            <li>Gurgaon</li>
                            <li>Hyderabad</li>
                            <li>Delhi</li>
                            <li>Mumbai</li>
                            <li>Pune</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center opacity-80 text-sm">
                    <p>© 2026 SwiggyClone Technologies Pvt. Ltd</p>
                    <p className="flex items-center gap-1 mt-2 md:mt-0">
                        Made with <Heart className="w-4 h-4 fill-white" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
