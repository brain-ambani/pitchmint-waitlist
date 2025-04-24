export default function Features() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            ⚡ Quick Campaign Setup
          </h3>
          <p className="text-gray-600">
            Create campaigns in minutes. Upload leads, personalize messages, and
            launch your outreach.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📊 Smart Analytics</h3>
          <p className="text-gray-600">
            Track open rates, replies, and optimize your messaging with built-in
            insights.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🔗 Multi-Platform DMs</h3>
          <p className="text-gray-600">
            Send messages across Twitter, Email, and more from one dashboard —
            no code needed.
          </p>
        </div>
      </div>
    </section>
  );
}
