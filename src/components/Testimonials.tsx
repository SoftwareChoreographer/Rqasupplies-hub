import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "RQA Supplies has been reliable in providing the gear pumps we need. Their service is straightforward and professional.",
      author: "Operations Manager",
      company: "Mining Equipment Services",
    },
    {
      quote: "Good quality parts and helpful when we've had questions about product specifications. We've used them for track adjusters several times.",
      author: "Fleet Maintenance Supervisor",
      company: "Heavy Machinery Contractor",
    },
    {
      quote: "The safety belt systems we ordered met our requirements. Communication was clear throughout the process.",
      author: "Safety Officer",
      company: "Mining Operations Company",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Feedback from businesses we've worked with in the mining industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
