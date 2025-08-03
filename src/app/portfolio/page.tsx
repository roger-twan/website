import PortfolioList from './list';

import IconLive from '@public/icons/live.svg';
import IconGithub from '@public/icons/github.svg';
import IconFigma from '@public/icons/figma.svg';
import IconBlog from '@public/icons/blog.svg';

export const CategoryObj = {
  Web: {
    name: 'Web Application',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-600',
    backgroundColor: 'bg-yellow-50',
  },
  Mobile: {
    name: 'Mobile App',
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    backgroundColor: 'bg-green-50',
  },
  Design: {
    name: 'Design Project',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-600',
    backgroundColor: 'bg-purple-50',
  },
  Tool: {
    name: 'Tool',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-600',
    backgroundColor: 'bg-cyan-50',
  },
};

export type Category = keyof typeof CategoryObj;

const svgClasses = 'size-4 mr-1';
export const LinkTypeIconMap = {
  GitHub: <IconGithub className={svgClasses} />,
  Blog: <IconBlog className={svgClasses} />,
  Figma: <IconFigma className={svgClasses} />,
  Live: <IconLive className={svgClasses} />,
};

type LinkType = keyof typeof LinkTypeIconMap;
export interface Portfolio {
  title: string;
  categories: Category[];
  description: string;
  technologies: string[];
  image: string;
  links: {
    type: LinkType;
    url: string;
  }[];
}

const portfolio: Portfolio[] = [
  {
    title: 'E-Commerce Platform',
    categories: ['Web'],
    image: 'https://roger.ink/_next/static/media/sso.9cdc335d.jpeg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    description:
      'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and secure payment processing.',
    links: [
      {
        type: 'Live',
        url: 'https://example-ecommerce.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/ecommerce-platform',
      },
    ],
  },
  {
    title: 'Mobile Banking App',
    categories: ['Mobile'],
    description:
      'Cross-platform mobile banking application with biometric authentication, real-time notifications, and secure transaction processing.',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: 'https://roger.ink/_next/static/media/simple-api.6f0cfbfd.jpeg',
    links: [
      {
        type: 'Live',
        url: 'https://play.google.com/store/apps/details?id=com.bankingapp',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/banking-app',
      },
    ],
  },
  {
    title: 'Design System & Component Library',
    categories: ['Design'],
    description:
      'Comprehensive design system with reusable components, documentation, and implementation guidelines for consistent brand experience.',
    technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Figma',
        url: 'https://design-system.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/design-system',
      },
    ],
  },
  {
    title: 'Restaurant Management System',
    categories: ['Web'],
    description:
      'Complete restaurant management solution with order tracking, inventory management, and analytics dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://restaurant-demo.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/restaurant-system',
      },
    ],
  },
  {
    title: 'Portfolio Website',
    categories: ['Web'],
    description:
      'Modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.',
    technologies: ['Next.js', 'Bootstrap', 'Framer Motion', 'Vercel'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://portfolio.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/portfolio',
      },
    ],
  },
  {
    title: 'Task Management App',
    categories: ['Mobile'],
    description:
      'Productive task management application with team collaboration, project tracking, and deadline reminders.',
    technologies: ['Flutter', 'Firebase', 'Provider', 'Dart'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://apps.apple.com/app/taskmanager',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/task-app',
      },
    ],
  },
  {
    title: 'Weather Dashboard',
    categories: ['Web'],
    description:
      'Real-time weather dashboard with interactive maps, detailed forecasts, and location-based recommendations.',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'PWA'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://weather-dashboard.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/weather-app',
      },
    ],
  },
  {
    title: 'Brand Identity Package',
    categories: ['Design'],
    description:
      'Complete brand identity including logo design, color palette, typography, and marketing materials.',
    technologies: [
      'Adobe Illustrator',
      'Photoshop',
      'InDesign',
      'Brand Guidelines',
    ],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Figma',
        url: 'https://brand-guidelines.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/brand-identity',
      },
    ],
  },
  {
    title: 'Social Media Dashboard',
    categories: ['Web'],
    description:
      'Comprehensive social media management platform with analytics, scheduling, and content creation tools.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Social APIs'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://social-dashboard.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/social-dashboard',
      },
    ],
  },
  {
    title: 'Portfolio d',
    categories: ['Tool'],
    description:
      'Modern, responsive portfolio website showcasing creative work with smooth animations and optimized performance.',
    technologies: ['Next.js', 'Bootstrap', 'Framer Motion', 'Vercel'],
    image: '/api/placeholder/400/300',
    links: [
      {
        type: 'Live',
        url: 'https://portfolio.example.com',
      },
      {
        type: 'GitHub',
        url: 'https://github.com/username/portfolio',
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
              My Portfolio
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl animate__animated animate__flipInX">
              A collection of my work showcasing across system architecture, web
              development, mobile apps, creative design, and custom-built tools
              that streamline workflows and boost efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16 bg-gray-100">
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-blue-50 rounded-lg shadow p-6 text-center">
              <h3 className="text-blue-600 font-bold text-3xl">
                {portfolio.length}
              </h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            {Object.entries(CategoryObj).map(([key, value]) => (
              <div
                key={key}
                className={`${value.backgroundColor} rounded-lg shadow p-6 text-center`}
              >
                <h3 className={`${value.textColor} font-bold text-3xl`}>
                  {
                    portfolio.filter((item) =>
                      item.categories.includes(key as Category),
                    ).length
                  }
                </h3>
                <p className="text-gray-600">{`${value.name}`}s</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <PortfolioList portfolio={portfolio} />
        </div>
      </section>
    </div>
  );
}
