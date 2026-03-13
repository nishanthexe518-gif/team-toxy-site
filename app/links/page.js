export default function Links() {
  return (
    <main className="flex flex-col items-center justify-center text-center mt-32 gap-8">

      <h1 className="text-4xl font-bold text-orange-500">
        Team TOXY Links
      </h1>

      <p className="text-gray-400">
       If you have any queries or need assistance, feel free to join our
        community through the Links page and connect with us directly. 
      </p>

      <div className="flex gap-6 mt-6">

        <a
          href="https://discord.gg/pRdgCaE53T"
          target="_blank"
          className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Join Discord
        </a>

        <a
          href="https://youtube.com/@TeamTOXY"
          target="_blank"
          className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700"
        >
          YouTube Channel
        </a>

      </div>

    </main>
  );
}