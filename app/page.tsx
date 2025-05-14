"use client"

import { Button } from "@/components/ui/button";
import { MailOutlined, GithubOutlined, LinkedinOutlined, FacebookOutlined } from '@ant-design/icons';
import { ThemeToggle } from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);


    // smooth scroll to section
    const scrollTo = (id: string) => {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: id === 'hero' ? 0 : el.offsetTop - 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    
    const name = formData.get('name')?.toString() || 'N/A';
    const subject = formData.get('subject')?.toString() || 'No Subject';
    const message = formData.get('message')?.toString() || 'No Message';

    // Use proper line breaks and encoding
    const body = encodeURIComponent(
      `Name: ${name}\n\n${message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=solomonjoshua016@gmail.com&su=${encodeURIComponent(subject)}&body=${body}`,
      '_blank'
    );
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" onClick={e => {e.preventDefault(); scrollTo('hero')}} className="font-bold text-xl text-gray-900 dark:text-gray-100 cursor-pointer">
            JRAS
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['skills','projects','education','contact'].map(section => (
              <button key={section} onClick={() => scrollTo(section)} className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors cursor-pointer">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" className="cursor-pointer">
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden p-4 bg-background/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
            {['hero','skills','projects','education','contact'].map(section => (
              <button key={section} onClick={() => scrollTo(section)} className="block w-full text-left py-2 px-3 rounded-md text-gray-700 hover:bg-muted dark:text-gray-300 dark:hover:bg-muted cursor-pointer">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 pt-32 pb-16 md:py-40 flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Joshua Ralph Adrian Solomon</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer specializing in creating elegant solutions to complex problems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" onClick={() => scrollTo('contact')}>
              <MailOutlined className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/JoshuaRalphz" target="_blank" rel="noopener noreferrer">
                <GithubOutlined className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/joshua-ralph-adrian-solomon-1a0745347/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.facebook.com/Lionheart647" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined className="mr-2 h-4 w-4" />
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-muted/30 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
      <Badge variant="outline" className="mb-4 text-sm font-medium px-3 py-1">Expertise</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Skills</h2>
      <div className="w-24 h-1 mx-auto bg-primary rounded-full mb-6"></div>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
      A comprehensive toolkit for modern web development, focusing on performance and user experience.
      </p>
    </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "React", "Next.js", "React Native", "Node.js", 
              "TypeScript", "MongoDB", "Tailwind CSS", 
              "Firebase", "Clerk Authentication", "Aiven","Laravel","Vue.jS"
            ].map((skill) => (
              <Card key={skill} className="border hover:border-primary/50 transition-all hover:shadow-md">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <h3 className="text-lg font-medium text-center">{skill}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="container mx-auto px-4 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <Badge variant="outline" className="mb-4 text-sm font-medium px-3 py-1">Portfolio</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
      <div className="w-24 h-1 mx-auto bg-primary rounded-full mb-6"></div>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Showcasing my latest work and technical capabilities across various domains.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {[{
        title: "DevPath - E-learning Platform",
        description: "Video-based learning platform with Redis caching and Clerk authentication. Features include user progress tracking, interactive quizzes, and responsive design.",
        tags: ["Next.js", "Clerk", "Tailwind CSS", "Aiven"],
        link: "https://ccsdevpath.online/",
        image: "/Projects/dv.jpeg"
      }, 
      {
        "title": "FruitFrenzy-AR Game: AI Integration",
        "description": "Enhanced the FruitFrenzy-AR_GAME by integrating AI-driven features, leveraging computer vision and machine learning techniques to improve gameplay dynamics and user interaction.",
        "tags": ["Python", "OpenCV", "TensorFlow", "AR", "AI Integration"],
        "link": "https://github.com/JoshuaRalphz/FruitFrenzy-AR_GAME/tree/main/AI",
        "image": "/Projects/fr.jpeg"
      },            
      {
        "title": "Manila's Ihawan – Filipino Cuisine",
        "description": "Explore Manila's Ihawan's signature Filipino dishes, including Longanisa, Tocino, Siopao, Lumpia Shanghai, and Beef Tapa, crafted with family recipes perfected since 1989.",
        "tags": ["Filipino Cuisine", "Authentic Recipes", "Web Design"],
        "link": "https://www.manilasihawan.com",
        "image": "/Projects/mi.jpeg"
      },
      {
        "title": "OJT Blog Site",
        "description": "A personal blog showcasing my journey and experiences during my On-the-Job Training program. The site features detailed posts, project highlights, and insights into skills gained throughout the internship.",
        "tags": ["OJT", "Internship", "Web Development", "Blogging"],
        "link": "https://ojtblogsite.netlify.app/",
        "image": "/Projects/ojt.jpeg"
      }
      
    ].map((project, index) => (
      <a 
        key={`${project.title}-${index}`}
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group block transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
      >
        <Card className="h-full overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 z-20">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </div>
          </div>
          <CardHeader className="relative z-20 -mt-10 bg-gradient-to-b from-transparent to-background pt-12">
            <CardTitle className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm md:text-base mt-2 group-hover:text-foreground/90 transition-colors line-clamp-3">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="font-medium text-xs hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <div className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 flex items-center">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </CardContent>
        </Card>
      </a>
    ))}
    </div>
  </div>
</section>

      {/* Education & Professional Development Section */}
      <section id="education" className="bg-muted/30 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
        <div className="max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
      <Badge variant="outline" className="mb-4 text-sm font-medium px-3 py-1">Learning Journey</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Education & Professional Development</h2>
      <div className="w-48 h-1 mx-auto bg-primary rounded-full mb-6"></div>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
      Academic foundation and continuous learning through various professional development activities.
      </p>
    </div>
          
          <div className="space-y-8">
            {/* Education */}
            <a href="https://gordoncollege.edu.ph/w3/#" target="_blank" rel="noopener noreferrer" className="block">
              <div className="border rounded-xl p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                    <p className="text-xl text-primary mt-1">Gordon College</p>
                    <p className="text-muted-foreground mt-2">Olongapo City, Philippines</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">Current</Badge>
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">
                    Comprehensive education in computer programming, software development, data structures, 
                    algorithms, and computer systems architecture with a focus on practical application and 
                    problem-solving.
                  </p>
                </div>
              </div>
            </a>

            {/* Seminars/Webinars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
            {
              title: "IRCITE 2025 - DevPath Presentation",
              type: "Thesis Presentation",
              date: "April 4, 2025",
              organizer: "Bulacan State University",
              description: "Presented our thesis 'DevPath: A Video-Based E-learning Platform for Programming'. Our paper was officially published, marking an academic milestone for our team from Gordon College.",
              image: "/Education/IRCITE.jpg"
            },
            {
              title: "Wistron Company Visit",
              type: "Industry Visit",
              date: "May 2025",
              organizer: "Wistron Information Technology",
              description: "Explored Wistron's ICT manufacturing processes, safety protocols, and quality assurance systems. Gained hands-on insights into ESD protection, repair workflows, and the role of teamwork in global tech operations.",
              image: "/Education/wistron.png" // Replace with  actual image path
            },
            {
              title: "Samsung Open-Source Conference Philippines (SOSCON) 2024",
              type: "Conference",
              date: "October 12, 2024",
              organizer: "Samsung Philippines",
              description: "Participated in SOSCON 2024 at Novotel Manila, Araneta City. The event focused on AI's transition to agentic systems, featuring topics like generative AI, Retrieval-Augmented Generation (RAG), LangChain, and Google Vertex AI. The conference provided insights into building AI applications capable of reasoning, searching, and decision-making.",
              image: "/Education/samsung conference.jpg" // Replace with your actual image path
            },
            {
              title: "Regional Assembly on Information Technology Education 2024",
              type: "Conference",
              date: "October 24, 2024",
              organizer: "RAITE 2024 Committee",
              description: "Attended RAITE 2024 at the AUF Sports and Cultural Center in Angeles City, Pampanga. The event focused on the expanding role of AI in daily life and industries, with app demonstrations like Agira, and interactive activities including a quiz bee and Mobile Legends tournament, blending tech education with entertainment.",
              image: "/Education/Raite.png" // Replace with your actual image path
            },
            {
              title: "MuleSoft Tech Career Seminar",
              type: "Seminar",
              date: "September 29, 2024",
              organizer: "MuleSoft Philippines",
              description: "Attended 'Launching Your Tech Career with MuleSoft' in Pangasinan. Learned about API-led connectivity, the Anypoint Platform, and career paths in system integration. Gained insights into how APIs drive business agility and digital transformation.",
              image: "/Education/mulecast.png" // Replace with your actual image path
            },
            {
              title: "AI-Alam: Enhancing Academic Excellence",
              type: "Webinar",
              date: "November 21, 2024",
              organizer: "Mindoro State University – Main Campus",
              description: "Attended the AI-Alam webinar exploring AI applications in education. Learned about personalized learning paths, automated assessments, predictive analytics, and AI tutoring chatbots, with case studies showing a 20% improvement in student retention.",
              image: "/Education/web1.jpg" // Replace with your actual image path
            },
            
                {
                  title: "Hop on the I3C Bus: I3C Interface vs. Other Interface Protocols",
                  type: "Webinar",
                  date: "November 22, 2024",
                  organizer: "Xpert Insights",
                  description: "Joined the webinar on MIPI I3C bus, learning how it outperforms legacy interfaces like I²C and SPI with features like dynamic addressing, in-band interrupts, and up to 12.5 MHz speeds. Explored its use in simplifying embedded and IoT system designs.",
                  image: "/Education/Xpert Insights.png" // Replace with your actual image path
                },

                {
                  title: "How to Use Generative AI Effectively Inside the Copilot Studio",
                  type: "Webinar",
                  date: "July 12, 2024",
                  organizer: "Styava.dev",
                  description: "Attended a webinar hosted by Styava.dev via Microsoft Teams, focusing on Copilot Studio's generative AI capabilities. The session covered best practices for prompt engineering, context management, model selection, and output validation. Live demos showcased AI-assisted coding, documentation drafting, and design workflows.",
                  image: "/Education/web4.jpg" // Replace with your actual image path
                }
                
              ].map((event, index) => (
                <div 
                  key={index} 
                  className="border rounded-xl p-6 hover:border-primary/50 transition-all group relative overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(event.image)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-sm">{event.type}</Badge>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-3">Organized by {event.organizer}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  {/* Hover Image */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

     {/* Image Modal */}
     {selectedImage && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
    onClick={() => setSelectedImage(null)}
    aria-modal="true"
    role="dialog"
    aria-label="Image preview"
  >
          <div 
      className="relative max-w-5xl w-full max-h-[90vh] rounded-lg shadow-xl overflow-hidden transition-transform duration-300 transform bg-white"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Navigation controls for gallery (if needed) */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/70 to-transparent z-10">
        <div className="text-white font-medium truncate max-w-lg opacity-90">
          {/* Optional: Display image title/caption here */}
        </div>
        <div className="flex items-center gap-3">
          <button 
            className="bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors text-white/80 hover:text-white flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Main image container with loading state */}
      <div className="w-full h-full flex items-center justify-center bg-gray-900/50">
        <img 
          src={selectedImage} 
          alt="Full size preview" 
          className="w-full h-full object-contain transition-opacity duration-300 opacity-80"
          loading="eager"
          onLoad={(e) => (e.currentTarget as HTMLImageElement).classList.add('opacity-100')}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/70 to-transparent z-10"></div>
    </div>
  </div>
)}

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24 min-h-screen flex flex-col justify-center scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
      <Badge variant="outline" className="mb-4 text-sm font-medium px-3 py-1">Communication</Badge>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
      <div className="w-24 h-1 mx-auto bg-primary rounded-full mb-6"></div>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
      Have a project in mind or interested in working together? Send me a message.
      </p>
    </div>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium"> Name</label>
                    <Input id="name" name="name" placeholder="John Doe" className="bg-background" required />
                  </div>
                  <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" className="bg-background" required />
                </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about  project..." 
                    className="bg-background" 
                    rows={6}
                    required 
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Joshua Solomon. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:solomonjoshua016@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <MailOutlined />
              </a>
              <a href="https://github.com/JoshuaRalphz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <GithubOutlined />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedinOutlined />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}