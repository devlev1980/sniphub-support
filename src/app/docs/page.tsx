export default function Documentation() {
  const guides = [
    {
      title: "Getting Started",
      description: "Learn the basics of SnipHub and how to create your first snippet.",
      topics: [
        "Installing SnipHub",
        "Creating your first snippet",
        "Understanding the interface",
        "Basic navigation"
      ]
    },
    {
      title: "Managing Snippets",
      description: "Learn how to organize and manage your code snippets effectively.",
      topics: [
        "Creating categories",
        "Adding tags",
        "Searching snippets",
        "Editing and deleting"
      ]
    },
    {
      title: "Advanced Features",
      description: "Explore advanced features to make the most of SnipHub.",
      topics: [
        "iCloud sync",
        "Sharing snippets",
        "Keyboard shortcuts",
        "Custom themes"
      ]
    },
    {
      title: "Troubleshooting",
      description: "Common issues and how to resolve them.",
      topics: [
        "Sync issues",
        "Performance optimization",
        "Backup and restore",
        "Contacting support"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Documentation</h1>
      
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Start Guide</h2>
        <p className="text-gray-600 mb-6">
          Welcome to the SnipHub documentation. Here you&apos;ll find comprehensive guides and tutorials to help you get started with SnipHub quickly.
        </p>
        <div className="prose max-w-none">
          <h3>Basic Steps to Get Started:</h3>
          <ol>
            <li>Download SnipHub from the App Store</li>
            <li>Launch the app and sign in with your Apple ID</li>
            <li>Enable iCloud sync in the app settings</li>
            <li>Start creating your first snippet</li>
          </ol>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {guides.map((guide, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <ul className="space-y-2">
                {guide.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Need More Help?</h2>
        <p className="text-gray-600 mb-4">
          If you can&apos;t find what you&apos;re looking for in the documentation, we&apos;re here to help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
} 