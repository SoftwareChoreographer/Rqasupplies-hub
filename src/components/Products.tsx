import gearPumpImage from "@/assets/gear-pump.jpg";
import trackAdjusterImage from "@/assets/track-adjuster.jpg";
import graderBladeImage from "@/assets/grader-blade.jpg";
import safetyBeltImage from "@/assets/safety-belt.jpg";
import machineryCameraImage from "@/assets/machinery-camera.jpg";

const Products = () => {
  const products = [
    {
      image: gearPumpImage,
      title: "Gear Pumps",
      description: "High-quality hydraulic gear pumps for excavators, loaders, and other heavy machinery. Our primary specialization for mining equipment.",
    },
    {
      image: trackAdjusterImage,
      title: "Track Adjusters",
      description: "Durable track tensioning components for excavators and tracked machinery operating in demanding mining conditions.",
    },
    {
      image: graderBladeImage,
      title: "Grader Blades",
      description: "Heavy-duty cutting edges and blades for motor graders, designed for road maintenance and site preparation.",
    },
    {
      image: safetyBeltImage,
      title: "Safety Belt Systems",
      description: "Operator safety harness and restraint systems for heavy machinery, meeting industry safety standards.",
    },
    {
      image: machineryCameraImage,
      title: "Machinery Cameras",
      description: "Rugged camera systems for excavators and loaders, improving operator visibility and site safety.",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Parts & Equipment We Supply
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We supply a focused range of quality parts and safety equipment 
            for heavy machinery used in mining operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
