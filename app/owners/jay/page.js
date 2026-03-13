export default function JayPage() {
  return (
    <main className="flex flex-col items-center text-center mt-32 gap-6">

      <img
        src="/owners/jay.png"
        alt="The Jay"
        className="w-40 h-40 rounded-full border-4 border-orange-500
  shadow-[0_0_20px_#ff7b00] hover:scale-110
  hover:shadow-[0_0_35px_#ff7b00] transition duration-300"
      />

      <h1 className="text-4xl font-bold text-orange-500">
        The Jay
      </h1>

      <h2 className="text-xl text-gray-300">
        Sensi God
      </h2>

      <p className="max-w-xl text-gray-400">
        Jay is known within Team TOXY for his exceptional gameplay knowledge and sensitivity expertise. His deep understanding of game mechanics and player behavior allows him to analyze matches with precision and accuracy. By studying movement patterns and gameplay decisions, he helps the team identify irregular performances and maintain fair competition.
      </p>

      <a
        href="https://discord.com/users/1287858928612413661"
        target="_blank"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-semibold transition"
      >
        Discord Profile
      </a>

    </main>
  );
}