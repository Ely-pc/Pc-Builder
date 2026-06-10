export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      <section className="flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          La config PC <span className="text-blue-500">qu'il te faut</span>
          , montée par un passionné.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
          Conseils personnalisés, configurations optimisées par budget,
          et service de montage à domicile dans la région lyonnaise.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/configurations" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Voir les configurations
          </a>
          <a href="/montage" className="border border-gray-600 hover:border-gray-400 text-gray-300 font-semibold px-8 py-4 rounded-lg transition-colors">
            Service montage
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-4">🎯</div>
          <h2 className="text-xl font-bold mb-2">Configs optimisées</h2>
          <p className="text-gray-400">
            Chaque configuration est sélectionnée pour offrir le meilleur
            rapport performance/prix à ton budget.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-4">🔧</div>
          <h2 className="text-xl font-bold mb-2">Montage professionnel</h2>
          <p className="text-gray-400">
            Tu commandes les pièces, je monte ton PC chez toi.
            Câblage soigné, test complet, mise en route incluse.
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <div className="text-3xl mb-4">💡</div>
          <h2 className="text-xl font-bold mb-2">Conseils honnêtes</h2>
          <p className="text-gray-400">
            Pas de superflu, pas de surpayé. Je te guide vers
            ce qui correspond vraiment à ton usage.
          </p>
        </div>

      </section>

    </main>
  )
}