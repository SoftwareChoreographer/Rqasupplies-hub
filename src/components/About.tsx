import { Cog, Shield, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cog,
      title: "Machinery Expertise",
      description: "Specialized in parts for excavators, graders, and loaders used in mining operations.",
    },
    {
      icon: Shield,
      title: "Safety Focus",
      description: "Providing safety belt systems and monitoring equipment for operator protection.",
    },
    {
      icon: Truck,
      title: "Reliable Supply",
      description: "Consistent supply of quality parts to keep your mining operations running.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Supporting South Africa's Mining Industry
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            RQA Supplies is a dedicated supplier of machinery parts and safety equipment 
            for the mining sector. We understand the demands of heavy equipment operations 
            and provide parts that meet the rigorous requirements of mining environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
