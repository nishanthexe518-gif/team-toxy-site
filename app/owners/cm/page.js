export default function CMPage() {
  return (
    <main className="flex flex-col items-center text-center mt-32 gap-6">

      <img
  src="/owners/cm.png"
  alt="The CM"
  className="w-40 h-40 rounded-full border-4 border-orange-500
  shadow-[0_0_20px_#ff7b00] hover:scale-110
  hover:shadow-[0_0_35px_#ff7b00] transition duration-300"
/>

      <h1 className="text-4xl font-bold text-orange-500">
        The CM
      </h1>

      <h2 className="text-xl text-gray-300">
        IOS Expert
      </h2>

      <p className="max-w-xl text-gray-400">
        The CM is one of the core pillars of Team TOXY and a highly respected iOS verification expert. With deep technical knowledge and sharp analytical skills, he specializes in identifying irregular gameplay patterns and advanced cheat methods. His experience and dedication help ensure that every match reviewed by Team TOXY maintains the highest level of competitive integrity.
      </p>

      <a
        href="https://discord.com/users/874098983188955146"
        target="_blank"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-semibold transition"
      >
        Discord Profile
      </a>

    </main>
  );
}