import { Metadata } from 'next';

import getPortfolio from './portfolio.data';
import PortfolioOverview from './overview';
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
          <PortfolioOverview />
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
