export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description:
        'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and secure payment processing.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description:
        'Cross-platform mobile banking application with biometric authentication, real-time notifications, and secure transaction processing.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://play.google.com/store/apps/details?id=com.bankingapp',
      githubUrl: 'https://github.com/username/banking-app',
      featured: true,
    },
    {
      id: 3,
      title: 'Design System & Component Library',
      category: 'UI/UX Design',
      description:
        'Comprehensive design system with reusable components, documentation, and implementation guidelines for consistent brand experience.',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://design-system.example.com',
      githubUrl: 'https://github.com/username/design-system',
      featured: true,
    },
    {
      id: 4,
      title: 'Restaurant Management System',
      category: 'Web Development',
      description:
        'Complete restaurant management solution with order tracking, inventory management, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://restaurant-demo.example.com',
      githubUrl: 'https://github.com/username/restaurant-system',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Web Design',
      description:
        'Modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.',
      technologies: ['Next.js', 'Bootstrap', 'Framer Motion', 'Vercel'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://portfolio.example.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false,
    },
    {
      id: 6,
      title: 'Task Management App',
      category: 'Mobile Development',
      description:
        'Productive task management application with team collaboration, project tracking, and deadline reminders.',
      technologies: ['Flutter', 'Firebase', 'Provider', 'Dart'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://apps.apple.com/app/taskmanager',
      githubUrl: 'https://github.com/username/task-app',
      featured: false,
    },
    {
      id: 7,
      title: 'Weather Dashboard',
      category: 'Web Development',
      description:
        'Real-time weather dashboard with interactive maps, detailed forecasts, and location-based recommendations.',
      technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://weather-dashboard.example.com',
      githubUrl: 'https://github.com/username/weather-app',
      featured: false,
    },
    {
      id: 8,
      title: 'Brand Identity Package',
      category: 'Graphic Design',
      description:
        'Complete brand identity including logo design, color palette, typography, and marketing materials.',
      technologies: [
        'Adobe Illustrator',
        'Photoshop',
        'InDesign',
        'Brand Guidelines',
      ],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://brand-guidelines.example.com',
      githubUrl: null,
      featured: false,
    },
    {
      id: 9,
      title: 'Social Media Dashboard',
      category: 'Web Development',
      description:
        'Comprehensive social media management platform with analytics, scheduling, and content creation tools.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Social APIs'],
      image: '/api/placeholder/400/300',
      liveUrl: 'https://social-dashboard.example.com',
      githubUrl: 'https://github.com/username/social-dashboard',
      featured: false,
    },
  ];

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              My Portfolio
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl">
              A collection of my best work showcasing expertise in web
              development, mobile applications, and creative design solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Portfolio Overview
            </h2>
            <p className="text-lg text-center max-w-2xl">
              I specialize in creating innovative digital solutions across
              multiple platforms. My work spans from responsive web applications
              to native mobile apps, with a focus on user experience and modern
              design principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-blue-600 font-bold text-3xl">9</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-green-600 font-bold text-3xl">5</h3>
              <p className="text-gray-600">Web Applications</p>
            </div>
            <div className="bg-cyan-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-cyan-600 font-bold text-3xl">2</h3>
              <p className="text-gray-600">Mobile Apps</p>
            </div>
            <div className="bg-yellow-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-yellow-600 font-bold text-3xl">2</h3>
              <p className="text-gray-600">Design Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Featured Projects
            </h2>
            <p className="text-lg text-center max-w-2xl">
              My most impactful and innovative work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems
              .filter((item) => item.featured)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                >
                  <div className="flex items-center justify-center bg-gray-200 h-64">
                    <i className="bi bi-image text-6xl text-gray-400"></i>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <h5 className="font-bold text-xl mb-0">{item.title}</h5>
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <p className="mb-3 text-gray-700">{item.description}</p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {item.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center"
                        >
                          <i className="bi bi-link-45deg mr-2"></i>Live Demo
                        </a>
                      )}
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center"
                        >
                          <i className="bi bi-github mr-2"></i>Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              All Projects
            </h2>
            <p className="text-lg text-center max-w-2xl">
              Complete collection of my work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-lg shadow flex flex-col overflow-hidden"
              >
                <div className="flex items-center justify-center bg-gray-200 h-48">
                  <i className="bi bi-image text-4xl text-gray-400"></i>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <h6 className="font-bold text-lg mb-0">{item.title}</h6>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <p className="mb-2 text-gray-700 text-sm">
                    {item.description}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{item.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center text-xs"
                      >
                        <i className="bi bi-link-45deg mr-1"></i>Demo
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-600 text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center text-xs"
                      >
                        <i className="bi bi-github mr-1"></i>Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
