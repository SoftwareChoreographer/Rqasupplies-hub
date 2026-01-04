import { CheckCircle, Settings, Users, Zap, ShieldCheck, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Settings,
      title: "Mining Sector Focus",
      description: "We specialize in parts for heavy machinery used in mining operations, understanding the unique demands of the industry.",
    },
    {
      icon: CheckCircle,
      title: "Quality Products",
      description: "We supply parts that meet the reliability requirements of demanding mining environments.",
    },
    {
      icon: ShieldCheck,
      title: "Safety Priority",
      description: "Our range includes safety belt systems and camera systems that help protect operators.",
    },
    {
      icon: Zap,
      title: "Responsive Service",
      description: "We aim to respond promptly to enquiries and work to meet our customers' needs.",
    },
    {
      icon: Users,
      title: "Industry Knowledge",
      description: "Our team understands the equipment and parts requirements of excavators, graders, and loaders.",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "We're available to help with product enquiries and provide information on our range.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Why Work With RQA Supplies
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed">
            We're committed to providing quality parts and equipment for the mining industry, 
            backed by responsive service and sector knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-5">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
