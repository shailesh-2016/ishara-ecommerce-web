import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function ShoppingFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 md:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Ishara Ecommerce</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Premium fashion store bringing you the latest trends for men and women.
            </p>
            <div className="flex gap-4 mt-5">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <Link 
                  key={idx} 
                  to="#" 
                  className="text-muted-foreground hover:text-foreground transition-transform duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { label: "Home", path: "/shop/home" },
                { label: "Products", path: "/shop/listing" },
                { label: "About Us", path: "/shop/about" },
                { label: "Contact", path: "/shop/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="relative hover:text-foreground cursor-pointer
                               after:content-[''] after:absolute after:left-0 after:-bottom-1 
                               after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
                               hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-3 text-muted-foreground">
              {[
                { label: "FAQ", path: "/shop/faq" },
                { label: "Returns", path: "/shop/returns" },
                { label: "Shipping", path: "/shop/shipping" },
                { label: "Privacy Policy", path: "/shop/privacy" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="relative hover:text-foreground cursor-pointer
                               after:content-[''] after:absolute after:left-0 after:-bottom-1 
                               after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
                               hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4" /> 123 Fashion Street, Mumbai
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> support@ishara.com
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ishara Ecommerce. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            {[
              { label: "Terms & Conditions", path: "/shop/terms" },
              { label: "Privacy Policy", path: "/shop/privacy" },
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path} 
                className="relative hover:text-foreground cursor-pointer
                           after:content-[''] after:absolute after:left-0 after:-bottom-1 
                           after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 
                           hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ShoppingFooter;
