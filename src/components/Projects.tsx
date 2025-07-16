import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Play, TestTube, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectCategories = ["All", "Testing Projects", "Personal Tools"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Test Automation Suite",
    category: "Testing Projects",
    description: "Comprehensive Selenium-based automation framework for testing critical e-commerce flows including user registration, product search, cart operations, and payment processing.",
    image: "/api/placeholder/500/300",
    technologies: ["Selenium", "TestNG", "Java", "Maven", "Jenkins"],
    features: ["Cross-browser testing", "Data-driven testing", "CI/CD integration", "Detailed reporting"],
    icon: TestTube,
    color: "bg-blue-500",
    demo: "#",
    github: "#"
  },
  {
    id: 2,
    title: "API Testing Framework",
    category: "Testing Projects", 
    description: "Robust REST API testing framework using RestAssured and TestNG with comprehensive validation, authentication testing, and performance benchmarking.",
    image: "/api/placeholder/500/300",
    technologies: ["RestAssured", "TestNG", "Java", "JSON", "Postman"],
    features: ["API validation", "Authentication testing", "Response time monitoring", "Mock services"],
    icon: Shield,
    color: "bg-green-500",
    demo: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Performance Testing Dashboard",
    category: "Personal Tools",
    description: "Real-time performance monitoring dashboard built with React and JMeter integration for visualizing load test results and system metrics.",
    image: "/api/placeholder/500/300",
    technologies: ["React", "JMeter", "Node.js", "Chart.js", "WebSocket"],
    features: ["Real-time monitoring", "Interactive charts", "Alert system", "Historical data"],
    icon: Zap,
    color: "bg-yellow-500",
    demo: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Test Data Generator",
    category: "Personal Tools",
    description: "Intelligent test data generation tool that creates realistic datasets for testing purposes with support for multiple data formats and custom schemas.",
    image: "/api/placeholder/500/300",
    technologies: ["Python", "Faker", "JSON", "CSV", "SQL"],
    features: ["Custom schemas", "Multiple formats", "Realistic data", "Export options"],
    icon: TestTube,
    color: "bg-purple-500",
    demo: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Mobile App Testing Suite",
    category: "Testing Projects",
    description: "Cross-platform mobile testing framework using Appium for automated testing of native and hybrid mobile applications across iOS and Android.",
    image: "/api/placeholder/500/300",
    technologies: ["Appium", "TestNG", "Java", "Android", "iOS"],
    features: ["Cross-platform testing", "Real device testing", "Gesture simulation", "Screenshot capture"],
    icon: TestTube,
    color: "bg-indigo-500",
    demo: "#",
    github: "#"
  },
  {
    id: 6,
    title: "CI/CD Quality Gates",
    category: "Personal Tools",
    description: "Automated quality gate system that integrates with CI/CD pipelines to enforce testing standards and prevent deployment of low-quality code.",
    image: "/api/placeholder/500/300",
    technologies: ["Jenkins", "SonarQube", "Docker", "Bash", "Groovy"],
    features: ["Quality metrics", "Automated gates", "Pipeline integration", "Custom rules"],
    icon: Shield,
    color: "bg-red-500",
    demo: "#",
    github: "#"
  }
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='currentColor' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my testing expertise and automation solutions
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {projectCategories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-gradient-primary text-white shadow-elegant" 
                    : "hover:bg-accent"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <div className={`absolute top-4 left-4 p-3 rounded-full ${project.color} bg-opacity-20`}>
                    <project.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-xs font-medium text-foreground">{project.category}</span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/90 flex items-center justify-center space-x-4"
                  >
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-3 w-3 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-6">
              Interested in seeing more of my work or collaborating on a project?
            </p>
            <Button className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
              <ExternalLink className="h-4 w-4 mr-2" />
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}