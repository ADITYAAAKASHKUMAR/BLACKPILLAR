import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Handwoven Silk Kurta",
      price: "$189",
      originalPrice: "$240",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center",
      craftsman: "Rajesh Kumar, Varanasi",
      technique: "Traditional Banarasi Weaving",
      isNew: true
    },
    {
      id: 2,
      name: "Block Print Cotton Shirt",
      price: "$95",
      originalPrice: "$120",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop&crop=center",
      craftsman: "Meera Sharma, Jaipur",
      technique: "Hand Block Printing",
      isNew: false
    },
    {
      id: 3,
      name: "Embroidered Shawl",
      price: "$145",
      originalPrice: "$180",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center",
      craftsman: "Lakshmi Devi, Kashmir",
      technique: "Pashmina Embroidery",
      isNew: false
    },
    {
      id: 4,
      name: "Handloom Linen Jacket",
      price: "$225",
      originalPrice: "$280",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=500&fit=crop&crop=center",
      craftsman: "Arjun Patel, Kerala",
      technique: "Handloom Weaving",
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece tells a story of tradition, craftsmanship, and the skilled hands that created it.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-black text-white">
                    New
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                
                {/* Hover overlay */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-white text-black hover:bg-gray-100">
                    Quick View
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-gray-900">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <div className="text-sm text-gray-600">
                  <p>By {product.craftsman}</p>
                  <p className="text-xs text-gray-500">{product.technique}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}