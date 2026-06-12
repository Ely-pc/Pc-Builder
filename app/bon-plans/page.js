"use client"

import { useState } from "react"
import { categories } from "../../data/bon-plans"

// Calcule le pourcentage de réduction
function calcReduction(prixNormal, prixPromo) {
  return Math.round(((prixNormal - prixPromo) / prixNormal) * 100)
}

// Composant carte produit
function CartePromo({ produit }) {
  const reduction = calcReduction(produit.prixNormal, produit.prixPromo)

  return (
    <div className="bg-gray-900 rounded-xl p-5 flex flex-col gap-3 border border-gray-800 hover:border-gray-600 transition-colors">

      {/* Badge + Stock */}
      <div className="flex items-center justify-between">
        {produit.badge ? (
          <span className="text-xs font-semibold bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full">
            {produit.badge}
          </span>
        ) : (
          <span />
        )}
        {!produit.enStock && (
          <span className="text-xs text-red-400 font-medium">Rupture de stock</span>
        )}
      </div>

      {/* Nom + Description */}
      <div>
        <h3 className="font-bold text-white text-lg leading-tight">{produit.nom}</h3>
        <p className="text-gray-400 text-sm mt-1">{produit.description}</p>
      </div>

      {/* Prix */}
      <div className="flex items-end gap-3">
        <span className="text-2xl font-bold text-white">{produit.prixPromo} €</span>
        <span className="text-gray-500 line-through text-sm">{produit.prixNormal} €</span>
        <span className="text-green-400 font-bold text-sm">-{reduction}%</span>
      </div>

      {/* Bouton affilié */}
      <a
        href={produit.lienAffilie}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-center font-semibold py-3 rounded-lg text-sm transition-colors ${
          produit.enStock
            ? "bg-blue-600 hover:bg-blue-500 text-white"
            : "bg-gray-800 text-gray-500 cursor-not-allowed pointer-events-none"
        }`}
      >
        {produit.enStock ? `Voir sur ${produit.marchand}` : "Indisponible"}
      </a>

    </div>
  )
}

// Composant catégorie repliable
function Categorie({ categorie }) {
  const [ouverte, setOuverte] = useState(true)

  return (
    <div className="border border-gray-800 rounded-2xl overflow-hidden">

      {/* En-tête cliquable */}
      <button
        onClick={() => setOuverte(!ouverte)}
        className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{categorie.emoji}</span>
          <span className="font-bold text-white text-lg">{categorie.nom}</span>
          <span className="text-gray-500 text-sm">{categorie.produits.length} offres</span>
        </div>
        <span className={`text-gray-400 transition-transform duration-200 ${ouverte ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Produits */}
      {ouverte && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categorie.produits.map((produit) => (
            <CartePromo key={produit.id} produit={produit} />
          ))}
        </div>
      )}

    </div>
  )
}

// Page principale
export default function BonPlansPage() {
  const [toutesOuvertes, setToutesOuvertes] = useState(true)

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">

      {/* En-tête de page */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">
          Bon Plans <span className="text-blue-500">Hardware</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Les meilleures offres du moment sélectionnées par Ely — mis à jour régulièrement.
        </p>
      </div>

      {/* Catégories */}
      <div className="flex flex-col gap-6">
        {categories.map((categorie) => (
          <Categorie key={categorie.id} categorie={categorie} />
        ))}
      </div>

      {/* Note affiliation */}
      <p className="text-gray-600 text-xs text-center mt-12">
        Certains liens sont des liens affiliés. Cela ne change pas le prix pour toi
        et me permet de faire vivre ce site. Merci pour ton soutien !
      </p>

    </main>
  )
}