export default function RudraPage() {
  return (
    <main className="flex flex-col items-center text-center mt-32 gap-6">

      <img
        src="/owners/rudra.png"
        alt="Rudra"
        className="w-40 h-40 rounded-full border-4 border-orange-500
  shadow-[0_0_20px_#ff7b00] hover:scale-110
  hover:shadow-[0_0_35px_#ff7b00] transition duration-300"
      />

      <h1 className="text-4xl font-bold text-orange-500">
        The Rudra
      </h1>

      <h2 className="text-xl text-gray-300">
        Legendary Checker
      </h2>

      <p className="max-w-xl text-gray-400">
        Rudra is a legendary checker within Team TOXY, respected for his precision and expertise in detecting cheats and irregular gameplay patterns. His advanced verification skills help protect the competitive environment and ensure that only fair players succeed.
      </p>

      <a
        href="https://discord.com/users/1329174914804088858"
        target="_blank"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg text-white font-semibold transition"
      >
        Discord Profile
      </a>

    </main>
  );
}