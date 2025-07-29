export default function About() {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Mobile Development', level: 80 },
    { name: 'Python', level: 75 },
  ];

  const experience = [
    {
      year: '2022 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovations Inc.',
      description:
        'Leading development of enterprise web applications and mentoring junior developers.',
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      description:
        'Built responsive user interfaces and optimized web application performance.',
    },
    {
      year: '2018 - 2020',
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      description:
        'Designed user-centered digital experiences for clients across various industries.',
    },
  ];

  const education = [
    {
      year: '2018',
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      description:
        'Specialized in Software Engineering and Human-Computer Interaction',
    },
    {
      year: '2016',
      degree: 'Associate Degree in Web Design',
      school: 'Community College',
      description: 'Focused on modern web technologies and design principles',
    },
  ];

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg md:text-xl mb-6">
                I&apos;m a passionate digital creator with a love for innovative
                technology and beautiful design. My journey in the digital world
                has been driven by curiosity and a desire to solve real-world
                problems.
              </p>
              <div className="flex gap-4">
                <a
                  href="/portfolio"
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
                >
                  View My Work
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-white/20 rounded-full flex items-center justify-center w-72 h-72 shadow-lg">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="/avatar.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">My Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div>
                <h5 className="font-bold mb-4">The Beginning</h5>
                <p className="mb-4">
                  My journey into the world of digital creation began with a
                  simple curiosity about how websites work. What started as
                  tinkering with HTML and CSS has evolved into a passion for
                  creating meaningful digital experiences.
                </p>
                <p>
                  I believe that great design and technology should work
                  together seamlessly to solve real problems and create value
                  for users.
                </p>
              </div>
              <div>
                <h5 className="font-bold mb-4">My Philosophy</h5>
                <p className="mb-4">
                  I approach every project with a user-first mindset, ensuring
                  that every design decision and technical implementation serves
                  the end user&apos;s needs.
                </p>
                <p>
                  Collaboration and continuous learning are at the heart of my
                  work ethic. I&apos;m always exploring new technologies and
                  design trends to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-neutral-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Professional Experience
            </h2>
            <div className="space-y-8 w-full max-w-4xl">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-4"
                >
                  <div className="md:w-1/4 w-full text-gray-500 dark:text-gray-300 font-semibold mb-2 md:mb-0">
                    {exp.year}
                  </div>
                  <div className="md:w-3/4 w-full">
                    <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6">
                      <h5 className="font-bold mb-1">{exp.title}</h5>
                      <h6 className="text-blue-600 mb-2">{exp.company}</h6>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white dark:bg-neutral-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6"
                >
                  <div className="text-gray-500 dark:text-gray-300 text-sm mb-2">
                    {edu.year}
                  </div>
                  <h5 className="font-bold mb-1">{edu.degree}</h5>
                  <h6 className="text-blue-600 mb-2">{edu.school}</h6>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Beyond the Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-camera text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">Photography</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Capturing moments and finding beauty in everyday scenes.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-book text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">Reading</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Exploring new ideas through books on technology and design.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-bicycle text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">Cycling</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Staying active and exploring the city on two wheels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
