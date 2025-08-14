import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Truck, Warehouse, CheckCircle, Globe } from "lucide-react";

export function CompanyStory() {
  const processSteps = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Artisan Partnership",
      description: "We work directly with skilled craftsmen in rural India, ensuring fair compensation and skill development."
    },
    {
      icon: <Warehouse className="h-6 w-6" />,
      title: "Quality Control",
      description: "Each piece is carefully inspected and stored in our climate-controlled warehouses to maintain premium quality."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Global Shipping",
      description: "We ship worldwide with sustainable packaging, bringing authentic craftsmanship to your doorstep."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Community Impact",
      description: "Every purchase supports rural communities and helps preserve traditional Indian textile arts."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                From Rural Villages to Global Wardrobes
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                BlackPillar bridges the gap between traditional Indian craftsmanship and modern fashion. 
                We've built a sustainable supply chain that honors artisan heritage while meeting global quality standards.
              </p>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg">
                    <div className="text-black">
                      {step.icon}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Years of Partnership</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=300&fit=crop&crop=center"
                    alt="Warehouse operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=225&fit=crop&crop=center"
                    alt="Quality control process"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=225&fit=crop&crop=center"
                    alt="Sustainable packaging"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center"
                    alt="Global shipping"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Countries Shipped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}