import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, TestTube, Zap, Target } from 'lucide-react';

const timeline = [
  {
    year: "2025",
    title: "Software Automation Engineer",
    description: "Began specializing in software testing and quality assurance at CentraLogic india pvt.ltd"
  },
  {
    year: "2021",
    title: "Automation Expert",
    description: "Mastered Selenium, TestNG, and automated testing frameworks"
  },
  {
    year: "2022",
    title: "CI/CD Integration",
    description: "Implemented robust testing pipelines with Jenkins and Git workflows"
  },
  {
    year: "2023",
    title: "Performance Testing",
    description: "Advanced expertise in JMeter and BlazeMeter for load testing"
  },
  {
    year: "2024",
    title: "Full-Stack QA Engineer",
    description: "Leading comprehensive testing strategies and mentoring teams"
  }
];

const badges = [
  { icon: Code2, label: "Test Automation", color: "bg-blue-500" },
  { icon: TestTube, label: "Quality Assurance", color: "bg-green-500" },
  { icon: Zap, label: "Performance Testing", color: "bg-yellow-500" },
  { icon: Target, label: "Precision Focus", color: "bg-purple-500" }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate and performance-driven Software Test Engineer with expertise in regression testing, 
                  automation frameworks, and building scalable QA pipelines. With deep experience in Selenium, Postman, 
                  JMeter, and CI/CD, I merge testing precision with development thinking to ensure exceptional product quality.
                </p>
                <p>
                  My approach combines technical excellence with strategic thinking, enabling me to identify critical 
                  issues before they impact users while maintaining rapid development cycles.
                </p>
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="border-l-4 border-primary pl-6 py-4 bg-card rounded-r-lg shadow-card"
              >
                <p className="text-xl font-medium text-foreground italic">
                  "Crafting code. Breaking bugs. Elevating quality."
                </p>
                <footer className="text-sm text-muted-foreground mt-2">— Yashodip Jadhav</footer>
              </motion.blockquote>

              {/* Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
                  >
                    <div className={`p-2 rounded-lg ${badge.color} bg-opacity-10`}>
                      <badge.icon className={`h-5 w-5 text-foreground`} />
                    </div>
                    <span className="font-medium text-foreground">{badge.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="relative flex items-start space-x-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-elegant"
                    >
                      {item.year}
                    </motion.div>
                    
                    <div className="flex-1 bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}