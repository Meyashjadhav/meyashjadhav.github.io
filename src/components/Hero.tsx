import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const typewriterTexts = [
  "Hi, I'm Yashodip Jadhav",
  "A Developer",
  "An Automation Software Engineer",
  "Driven by Precision. Powered by Passion."
];

export function Hero() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Show welcome screen for 3 seconds
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setIsTyping(true);
    }, 3000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let timeout: NodeJS.Timeout;
    const text = typewriterTexts[currentTextIndex];
    
    if (currentText.length < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (currentTextIndex < typewriterTexts.length - 1) {
          setCurrentTextIndex(currentTextIndex + 1);
          setCurrentText("");
        }
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, hsl(239, 84%, 67%) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(217, 91%, 60%) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, hsl(239, 84%, 67%) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='currentColor' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ x: [0, 40], y: [0, 40] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <AnimatePresence mode="wait">
          {showWelcome ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                WELCOME
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl mt-4 text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                to YASH FREQUENCY
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <div className="h-96 flex flex-col justify-center">
                {typewriterTexts.map((text, index) => (
                  <motion.div
                    key={index}
                    className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-6 h-16 flex items-center justify-center ${
                      index === 0 ? 'text-primary' : 
                      index === typewriterTexts.length - 1 ? 'bg-gradient-primary bg-clip-text text-transparent' : 
                      'text-foreground'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={index <= currentTextIndex ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {index === currentTextIndex ? (
                      <span className="relative">
                        {currentText}
                        <motion.span
                          className="absolute right-0 translate-x-1 border-r-2 border-current"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </span>
                    ) : index < currentTextIndex ? (
                      text
                    ) : null}
                  </motion.div>
                ))}
              </div>

              {currentTextIndex === typewriterTexts.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="mt-8"
                >
                  <motion.button
                    onClick={scrollToAbout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex flex-col items-center text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <span className="text-lg font-medium mb-2">Explore My Work</span>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}