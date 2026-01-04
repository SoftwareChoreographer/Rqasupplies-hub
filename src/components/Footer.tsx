import logo from "@/assets/rqa-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RQA Supplies Logo" className="h-12 w-auto rounded" />
            <div>
              <p className="font-semibold text-secondary-foreground">RQA Supplies</p>
              <p className="text-sm text-secondary-foreground/70">Your Partner in Motion</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-secondary-foreground/70">
              Delmas, South Africa
            </p>
            <p className="text-sm text-secondary-foreground/50 mt-1">
              © {currentYear} RQA Supplies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
