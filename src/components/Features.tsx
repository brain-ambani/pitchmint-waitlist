export default function FeaturesSection() {
  return (
    <section className="py-16 px-6 bg-white text-center" id="features">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">
        Why People Choose PitchMint
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            📬 Unified Outreach Dashboard
          </h3>
          <p className="text-gray-600 mt-2">
            Send messages across Twitter/X, LinkedIn, and Email — all from one
            place. Say goodbye to switching tabs and tracking replies manually.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            📈 Live Response Tracking
          </h3>
          <p className="text-gray-600 mt-2">
            Know who opened, clicked, or replied — in real time. Optimize your
            outreach based on what gets responses, not just guesses.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            📂 Smart Contact Segmentation
          </h3>
          <p className="text-gray-600 mt-2">
            Tag and organize contacts by type — investors, partners, beta users,
            or clients — and tailor your campaigns with laser focus.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            🧠 Outreach Templates (Coming Soon)
          </h3>
          <p className="text-gray-600 mt-2">
            Get started faster with proven cold DM and email templates for
            product launches, partnership pitches, fundraising, hiring and more.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            🕒 Time-Zone Aware Sending (Coming Soon)
          </h3>
          <p className="text-gray-600 mt-2">
            Avoid sending messages at 3AM — PitchMint auto-schedules your
            outreach based on your recipient’s time zone.
          </p>
        </div>

        <div className="p-6 rounded-lg shadow bg-green-50">
          <h3 className="text-xl font-semibold text-green-700">
            🤖 Optional AI Message Suggestions
          </h3>
          <p className="text-gray-600 mt-2">
            Don’t know what to say? PitchMint’s AI will suggest tailored intros,
            subject lines, and first messages — so you never start from a blank
            slate.
          </p>
        </div>
      </div>
    </section>
  );
}
