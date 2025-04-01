export default function FAQ() {
  const faqs = [
    {
      question: "What is SnipHub?",
      answer: "SnipHub is an iOS app that helps you organize and manage your code snippets efficiently. It allows you to save, categorize, and quickly access your code snippets across different programming languages."
    },
    {
      question: "How do I get started with SnipHub?",
      answer: "Getting started is easy! Simply download SnipHub from the App Store, launch the app, and you can begin creating your first snippet. The app will guide you through the basic features and help you set up your snippet library."
    },
    {
      question: "Can I sync my snippets across devices?",
      answer: "Yes! SnipHub uses iCloud to automatically sync your snippets across all your iOS devices. Make sure you're signed in to your Apple ID and have iCloud enabled on your devices."
    },
    {
      question: "How do I organize my snippets?",
      answer: "You can organize your snippets by creating categories and tags. This makes it easy to find specific snippets when you need them. You can also use the search feature to quickly locate snippets by name or content."
    },
    {
      question: "Can I share snippets with others?",
      answer: "Yes, SnipHub allows you to share snippets with other users. You can export snippets in various formats or share them directly through AirDrop or other sharing methods available on iOS."
    },
    {
      question: "Is there a limit to how many snippets I can store?",
      answer: "The free version of SnipHub allows you to store up to 100 snippets. If you need more storage, you can upgrade to the premium version which offers unlimited snippet storage."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow rounded-lg">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 