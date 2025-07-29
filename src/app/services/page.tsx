export default function Services() {
  const services = [
    {
      title: 'Web Development',
      icon: 'bi-laptop',
      description:
        'Custom websites and web applications built with modern technologies and best practices.',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management Systems',
        'E-commerce Solutions',
        'API Integration',
      ],
      price: '$2,500 - $15,000',
      duration: '2-8 weeks',
    },
    {
      title: 'Mobile Development',
      icon: 'bi-phone',
      description:
        'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Performance Monitoring',
      ],
      price: '$5,000 - $25,000',
      duration: '4-12 weeks',
    },
    {
      title: 'UI/UX Design',
      icon: 'bi-palette',
      description:
        'User-centered design solutions that enhance user experience and drive engagement.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems',
        'Interactive Prototypes',
      ],
      price: '$1,500 - $8,000',
      duration: '2-6 weeks',
    },
    {
      title: 'Consulting',
      icon: 'bi-lightbulb',
      description:
        'Strategic guidance for digital projects and technology decisions.',
      features: [
        'Technology Strategy',
        'Architecture Planning',
        'Performance Audits',
        'Security Reviews',
        'Team Training',
        'Project Management',
      ],
      price: '$150/hour',
      duration: 'Flexible',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description:
        'Understanding your goals, requirements, and target audience through detailed consultation.',
    },
    {
      step: '02',
      title: 'Planning',
      description:
        'Creating comprehensive project plans, timelines, and technical specifications.',
    },
    {
      step: '03',
      title: 'Design',
      description:
        'Developing wireframes, prototypes, and visual designs that align with your brand.',
    },
    {
      step: '04',
      title: 'Development',
      description:
        'Building your solution using modern technologies and best practices.',
    },
    {
      step: '05',
      title: 'Testing',
      description:
        'Rigorous testing across devices and browsers to ensure quality and performance.',
    },
    {
      step: '06',
      title: 'Launch',
      description:
        'Deploying your project and providing ongoing support and maintenance.',
    },
  ];

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              My Services
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl">
              Comprehensive digital solutions tailored to your specific needs
              and business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              What I Offer
            </h2>
            <p className="text-lg text-center max-w-2xl">
              From concept to launch, I provide end-to-end digital solutions
              that help businesses grow and succeed in the digital landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-8 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-4">
                    <i className={`bi ${service.icon} text-2xl`}></i>
                  </span>
                  <h4 className="font-bold text-xl mb-0">{service.title}</h4>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
                <div className="mb-4">
                  <h6 className="font-bold mb-2">What&apos;s Included:</h6>
                  <ul className="list-disc list-inside space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-blue-600 font-bold">
                      {service.price}
                    </span>
                    <div className="text-gray-500 text-sm">
                      {service.duration}
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-100 dark:bg-neutral-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">My Process</h2>
            <p className="text-lg text-center max-w-2xl">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-lg shadow p-8 flex flex-col items-center"
              >
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4">
                  {step.step}
                </span>
                <h5 className="font-bold mb-2">{step.title}</h5>
                <p className="text-center text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Technologies I Work With
            </h2>
            <p className="text-lg text-center max-w-2xl">
              Modern tools and frameworks for optimal results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6 text-center">
              <h6 className="font-bold mb-3">Frontend</h6>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  React
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Next.js
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Vue.js
                </span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  TypeScript
                </span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6 text-center">
              <h6 className="font-bold mb-3">Backend</h6>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Node.js
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Python
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PHP
                </span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6 text-center">
              <h6 className="font-bold mb-3">Mobile</h6>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  React Native
                </span>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Flutter
                </span>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Swift
                </span>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Kotlin
                </span>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6 text-center">
              <h6 className="font-bold mb-3">Design</h6>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Figma
                </span>
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Adobe XD
                </span>
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Sketch
                </span>
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  InVision
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-center max-w-2xl">
              Let&apos;s discuss your needs and create something amazing
              together.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
              >
                Get a Quote
              </a>
              <a
                href="/portfolio"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
