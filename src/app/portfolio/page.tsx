import { Metadata } from 'next';

import getPortfolio, { Category, CategoryObj } from './portfolio.data';
import PortfolioList from './list';

export const metadata: Metadata = {
  title: 'Portfolio | Roger Twan',
  description:
    'A collection of my work showcasing across system architecture, web development, mobile apps, creative design, and custom-built tools that streamline workflows and boost efficiency.',
};

export default async function Portfolio() {
  const portfolio = await getPortfolio();

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 pb-8 sm:pt-24 sm:pb-16">
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
