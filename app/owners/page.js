export default function Owners() {
  return (
    <main className="flex flex-col items-center text-center mt-32 gap-10">

      <h1 className="text-4xl font-bold text-orange-500">
        Toxy Owners
      </h1>

      <p className="text-gray-400 max-w-xl">
        If you have any queries you can join our community through the links page.
      </p>

      <div className="flex gap-10 flex-wrap justify-center">

        <a href="/owners/cm">
          <div className="bg-slate-900 px-12 py-8 rounded-xl border border-orange-500 hover:scale-110 transition duration-300">
            <h2 className="text-xl font-semibold text-white mb-2">The CM</h2>
            <p className="text-gray-400">IOS Expert</p>
          </div>
        </a>

        <a href="/owners/rudra">
          <div className="bg-slate-900 px-12 py-8 rounded-xl border border-orange-500 hover:scale-110 transition duration-300">
            <h2 className="text-xl font-semibold text-white mb-2">The Rudra</h2>
            <p className="text-gray-400">Legendary Checker</p>
          </div>
        </a>

        <a href="/owners/jay">
          <div className="bg-slate-900 px-12 py-8 rounded-xl border border-orange-500 hover:scale-110 transition duration-300">
            <h2 className="text-xl font-semibold text-white mb-2">The Jay</h2>
            <p className="text-gray-400">Sensi God</p>
          </div>
        </a>

      </div>

    </main>
  );
}