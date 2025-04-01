import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-indigo-600">SnipHub Support</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Get help and learn how to make the most of your SnipHub iOS app. Find documentation, FAQs, and support resources.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/docs" className="block">
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 truncate">Documentation</h3>
                  <p className="mt-1 text-sm text-gray-500">Learn how to use SnipHub with our comprehensive guides.</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/faq" className="block">
          <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 truncate">FAQ</h3>
                  <p className="mt-1 text-sm text-gray-500">Find answers to commonly asked questions about SnipHub.</p>
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/contact" className="block">
          <div className="bg-indigo-50 overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h3 className="text-lg font-medium text-gray-900 truncate">Contact Support</h3>
                  <p className="mt-1 text-sm text-gray-500">Need help? Our support team is here to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* App Store Section */}
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Download SnipHub</h2>
        <p className="text-gray-600 mb-6">Get the latest version of SnipHub from the App Store</p>
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Download on the App Store
        </a>
      </div>
    </div>
  );
}
