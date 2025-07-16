import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Linkedin, Github, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/yashodipjadhav/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Meyashjadhav", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:yashodip.yj@email.com", label: "Email" },
];

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  Yashodip Jadhav
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Passionate Software Test Engineer specializing in automation, performance testing, 
                  and quality assurance. "Engineered to lead. Programmed for legacy ".
                </p>
                
                <div className="flex items-center space-x-1 mt-4 text-sm text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 mx-1" />
                  <span>using</span>
                  <Code className="h-4 w-4 text-blue-500 mx-1" />
                  <span>and lots of</span>
                  <Coffee className="h-4 w-4 text-amber-600 mx-1" />
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Yashodip Jadhav. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Privacy Policy
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Terms of Service
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated Gradient Line */}
      <motion.div
        className="h-1 bg-gradient-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />
    </footer>
  );
}