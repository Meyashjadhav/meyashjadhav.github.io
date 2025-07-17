import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  TestTube, 
  Zap, 
  GitBranch, 
  Database, 
  Globe, 
  Cog, 
  Layers,
  Cpu,
  Terminal,
  Bug,
  Monitor,
  Braces,
} from 'lucide-react';

const skillCategories = [
  {
    title: "Testing Frameworks",
    skills: [
      { name: "Virtuoso", level: 98, icon: Database },
      { name: "JMeter", level: 92, icon: Zap },
      { name: "BlazeMeter", level: 85, icon: Monitor },
      { name: "Selenium WebDriver", level: 95, icon: Code },
      { name: "TestNG", level: 90, icon: TestTube },
      { name: "Postman", level: 88, icon: Globe }
    ]
  },
  {
    title: "Development",
    skills: [
      
      { name: "Java", level: 88, icon: Cog },
      { name: "JavaScript", level: 88, icon: Braces }
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", level: 88, icon: Cog },
      { name: "Git/GitHub", level: 90, icon: GitBranch },
      { name: "Docker", level: 80, icon: Layers },
      { name: "Azure DevOps", level: 82, icon: Bug }
    ]
  },
  
];

const techStack = [
  "JavaScript", "Java", "Python", "Selenium", "TestNG", "JUnit", 
  "Postman", "RestAssured", "JMeter", "BlazeMeter", "Jenkins", 
  "Git", "Docker", "SQL", "MongoDB", "Cucumber", "Maven", "Gradle"
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 bg-gradient-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive testing expertise across multiple domains and technologies
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.3 + categoryIndex * 0.2 }}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.2 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, delay: 0.7 + categoryIndex * 0.2 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-card p-8 rounded-xl shadow-card"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Technology Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1
                  }}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "13+" },
              { label: "Test Cases Written", value: "1000+" },
              { label: "Bugs Found & Fixed", value: "1500+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}