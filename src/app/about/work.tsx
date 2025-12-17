enum JobCategory {
  CONTRACT = 'Contract',
  FREELANCE = 'Freelance',
  PERMANENT = 'Permanent',
}

enum WorkMethod {
  REMOTE = 'Remote',
  ONSITE = 'Onsite',
  HYBRID = 'Hybrid',
}

enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
}

interface Job {
  period: string;
  title: string;
  jobCategory: JobCategory;
  workMethod: WorkMethod;
  jobType: JobType;
  company: string;
  location: string;
  description: string;
}

const workExperiences: Job[] = [
  {
    period: 'Dec 2024 - Dec 2025',
    title: 'Software Engineer',
    jobCategory: JobCategory.CONTRACT,
    workMethod: WorkMethod.REMOTE,
    jobType: JobType.PART_TIME,
    company: 'Toropal',
    location: 'Toronto, ON, Canada',
    description:
      'Built RESTful APIs, integrated third-party services, and documented systems using PlantUML and Swagger in a CI/CD-driven remote team.',
  },
  {
    period: 'Jul 2022 - Nov 2024',
    title: 'Full Stack Developer',
    jobCategory: JobCategory.FREELANCE,
    workMethod: WorkMethod.REMOTE,
    jobType: JobType.PART_TIME,
    company: 'Self-employed',
    location: 'Remote',
    description:
      'Designed full-stack technical solutions, managed tasks via Trello and Gantt charts, and aligned deliverables with client needs.',
  },
  {
    period: 'Jun 2018 - Jun 2022',
    title: 'Senior Web Engineer',
    jobCategory: JobCategory.PERMANENT,
    workMethod: WorkMethod.ONSITE,
    jobType: JobType.FULL_TIME,
    company: 'Klook Travel Technology Co., Ltd',
    location: 'Shenzhen, China',
    description:
      'Led web and mobile projects using Node, Vue, Flutter, and microservices for a global merchant platform.',
  },
  {
    period: 'Apr 2016 - Jun 2018',
    title: 'Frontend Engineer',
    jobCategory: JobCategory.PERMANENT,
    workMethod: WorkMethod.ONSITE,
    jobType: JobType.FULL_TIME,
    company: 'Shenzhen Jiuxi Technology Co., Ltd',
    location: 'Shenzhen, China',
    description:
      'Built a customizable SaaS e-commerce platform and launched the official company website using Vue and WordPress.',
  },
  {
    period: 'Jul 2014 - Mar 2016',
    title: 'Frontend Developer',
    jobCategory: JobCategory.PERMANENT,
    workMethod: WorkMethod.ONSITE,
    jobType: JobType.FULL_TIME,
    company: 'Yixintang Pharmaceutical Group Co., Ltd',
    location: 'Kunming, China',
    description:
      'Developed interactive web pages for an e-commerce site using HTML, CSS, and jQuery.',
  },
];

export default function workModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
      <div className="space-y-8 w-full max-w-4xl">
        {workExperiences.map((job, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-4"
          >
            <div className="md:w-1/4 w-full text-gray-500 font-semibold mb-2 md:mb-0">
              {job.period}
            </div>
            <div className="md:w-3/4 w-full">
              <div className="group relative bg-white rounded-lg shadow p-6 overflow-hidden">
                <div className="absolute inset-0 -translate-y-full bg-gradient-to-br from-blue-600 to-purple-700  group-hover:translate-y-0 transition-all duration-300 z-1"></div>
                <div className="relative z-10">
                  <h5 className="font-bold mb-1 group-hover:text-white transition duration-300">
                    {job.title}
                  </h5>
                  <p className="text-gray-500 mb-0 group-hover:text-gray-300 transition duration-300">
                    {job.company} | {job.jobCategory} | {job.workMethod}
                  </p>
                  <p className="text-gray-500 mb-2 group-hover:text-gray-300 transition duration-300">
                    {job.location} | {job.jobType}
                  </p>
                  <p className="group-hover:text-white transition duration-300">
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
