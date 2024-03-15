import React from 'react';
import { motion } from "framer-motion";
import { LampContainer } from "../../components/ui/lamp";
const Main = () => {
  return (
    <main className="flex-1">
      <section className="relative bg-black pt-32 pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-8">
            CodeGuardian Marketplace
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 mb-12">
            A decentralized platform for developers to share, buy, and sell code snippets, smart contract templates, and development tools.
          </p>
          <div className="flex justify-center space-x-4">
          <button className="relative inline-flex h-14 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-base font-medium text-white backdrop-blur-3xl">
    Explore Snippets
  </span>
</button>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
          
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Explore the unique features that make CodeGuardian Marketplace the go-to platform for developers.
            </p>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <div className="sm:flex lg:block lg:px-12">
              <div className="flex-shrink-0 lg:mx-auto">
                <svg
                  className="h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Decentralized Ecosystem
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Leveraging blockchain technology and smart contracts to ensure transparency, security, and immutability in your transactions.
                </p>
              </div>
            </div>

            <div className="sm:flex lg:block lg:px-12">
              <div className="flex-shrink-0 lg:mx-auto">
                <svg
                  className="h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Intellectual Property Protection
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Flexible licensing system allowing developers to protect their intellectual property while sharing their code.
                </p>
              </div>
            </div>

            <div className="sm:flex lg:block lg:px-12">
              <div className="flex-shrink-0 lg:mx-auto">
                <svg
                  className="h-12 w-12 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Enhanced Privacy
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Zero-Knowledge Proofs (zkp) technology is used to enhance privacy in various aspects of the marketplace.
                </p>
              </div>
            </div>

            {/* Add more feature items here */}
          </div>
        </div>
      </section>

      {/* Snippet Showcase Section */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Featured Snippets
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Explore our curated collection of high-quality code snippets from experienced developers.
            </p>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {/* Snippet Cards */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md mr-4">
                    <svg
                      className="h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      React Hooks Snippets
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      A collection of reusable React Hooks for common use cases.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Price: 0.2 ETH</span>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Buy Snippet
                  </a>
                </div>
              </div>
            </div>

            {/* Add more snippet cards here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;