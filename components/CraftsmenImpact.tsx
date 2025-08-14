import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GraduationCap, Heart, TrendingUp, Users } from "lucide-react";

export function CraftsmenImpact() {
  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Skill Development",
      description: "We provide training in modern techniques while preserving traditional methods, helping artisans enhance their craft and increase their earning potential."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Fair Compensation",
      description: "Our artisans receive 40% above market rates, ensuring sustainable livelihoods and recognizing the true value of their exceptional craftsmanship."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare Support",
      description: "We provide healthcare coverage and regular health check-ups for artisans and their families, ensuring their well-being beyond work."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "We foster connections between artisans, creating networks for knowledge sharing and collaborative growth within their communities."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Empowering Rural Artisans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond fair wages, we provide comprehensive support to help our craftsmen thrive. 
            Every purchase contributes to sustainable development in rural Indian communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=center"
                  alt="Indian craftsman working on traditional textiles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/2] rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop&crop=center"
                  alt="Traditional weaving techniques"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[3/2] rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=200&fit=crop&crop=center"
                  alt="Artisan training session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop&crop=center"
                  alt="Community of craftsmen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-sm">
                  <div className="text-black">
                    {benefit.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}