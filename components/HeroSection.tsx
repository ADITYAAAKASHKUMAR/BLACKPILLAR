import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Premium Craftsmanship,
                <span className="text-gray-600"> Ethical Sourcing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover exceptional clothing handcrafted by skilled artisans from rural India. 
                Every purchase supports traditional craftsmanship and empowers local communities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3">
                Shop Collection
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Our Impact
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Rural Artisans</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Villages Supported</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=750&fit=crop&crop=center"
                alt="Traditional Indian craftsman working on premium clothing"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fair Trade Certified</p>
                  <p className="text-sm text-gray-600">Direct from artisans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}