import { Pickaxe, Truck, Mountain, Cog } from "lucide-react";

const Industries = () => {
  const machinery = [
    {
      icon: Pickaxe,
      name: "Excavators",
      description: "Parts for hydraulic excavators used in mining operations, including gear pumps, track adjusters, and camera systems.",
    },
    {
      icon: Mountain,
      name: "Graders",
      description: "Grader blades and components for road graders used in mine site maintenance and construction.",
    },
    {
      icon: Truck,
      name: "Loaders",
      description: "Hydraulic components and safety equipment for wheel loaders operating in mining environments.",
    },
    {
      icon: Cog,
      name: "Bobcat",
      description: "Parts and components for Bobcat skid steer loaders and compact equipment used on mining sites.",
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase">Industries & Machinery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Machinery We Support
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our products are designed for heavy machinery operating in the 
            South African mining sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machinery.map((machine, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <machine.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {machine.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {machine.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
