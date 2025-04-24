export default function ThankYouMessage() {
  return (
    <div className="text-center py-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-green-600 mb-4">
        🎉 You&apos;re on the list!
      </h2>
      <p className="text-gray-600 max-w-md mx-auto">
        Thanks for joining the PitchMint waitlist. We’ll notify you as soon as
        we launch.
      </p>
    </div>
  );
}
