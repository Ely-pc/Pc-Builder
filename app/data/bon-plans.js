// data/bon-plans.js
// ============================================================
// FICHIER DE DONNÉES — BON PLANS
// ============================================================
// C'est ici que tu gères tous tes produits et liens affiliés.
// Pour modifier un produit : change les valeurs directement.
// Pour ajouter un produit : copie un bloc existant et colle-le.
// Pour ajouter un lien affilié : remplace l'URL dans "lienAffilie".
// ============================================================

export const categories = [
  {
    id: "cpu",
    nom: "Processeurs (CPU)",
    emoji: "⚡",
    produits: [
      {
        id: "cpu-1",
        nom: "AMD Ryzen 5 7600X",
        description: "6 cœurs / 12 threads — Idéal gaming 1080p/1440p",
        prixNormal: 249,
        prixPromo: 179,
        marchand: "LDLC",
        // Remplace ce lien par ton lien affilié LDLC quand tu l'auras
        lienAffilie: "https://www.ldlc.com",
        badge: "Meilleur rapport qualité/prix",
        enStock: true,
      },
      {
        id: "cpu-2",
        nom: "Intel Core i5-13600K",
        description: "14 cœurs (6P+8E) — Excellent pour gaming et streaming",
        prixNormal: 319,
        prixPromo: 239,
        marchand: "Amazon",
        // Remplace ce lien par ton lien affilié Amazon quand tu l'auras
        lienAffilie: "https://www.amazon.fr",
        badge: null,
        enStock: true,
      },
      {
        id: "cpu-3",
        nom: "AMD Ryzen 9 7900X",
        description: "12 cœurs / 24 threads — Workstation et création",
        prixNormal: 549,
        prixPromo: 389,
        marchand: "Materiel.net",
        lienAffilie: "https://www.materiel.net",
        badge: "Top Workstation",
        enStock: false,
      },
    ],
  },
  {
    id: "gpu",
    nom: "Cartes graphiques (GPU)",
    emoji: "🎮",
    produits: [
      {
        id: "gpu-1",
        nom: "AMD RX 7700 XT",
        description: "12 Go VRAM — Gaming 1440p ultra fluide",
        prixNormal: 449,
        prixPromo: 369,
        marchand: "LDLC",
        lienAffilie: "https://www.ldlc.com",
        badge: "Coup de coeur",
        enStock: true,
      },
      {
        id: "gpu-2",
        nom: "NVIDIA RTX 4070",
        description: "12 Go VRAM — Ray tracing et DLSS 3",
        prixNormal: 649,
        prixPromo: 549,
        marchand: "Amazon",
        lienAffilie: "https://www.amazon.fr",
        badge: null,
        enStock: true,
      },
    ],
  },
  {
    id: "ram",
    nom: "Mémoire RAM",
    emoji: "🧠",
    produits: [
      {
        id: "ram-1",
        nom: "Corsair Vengeance DDR5 32 Go",
        description: "2x16 Go — DDR5 5600 MHz CL36",
        prixNormal: 119,
        prixPromo: 89,
        marchand: "Amazon",
        lienAffilie: "https://www.amazon.fr",
        badge: "Meilleur rapport qualité/prix",
        enStock: true,
      },
      {
        id: "ram-2",
        nom: "G.Skill Trident Z5 RGB 32 Go",
        description: "2x16 Go — DDR5 6000 MHz CL30",
        prixNormal: 159,
        prixPromo: 119,
        marchand: "LDLC",
        lienAffilie: "https://www.ldlc.com",
        badge: null,
        enStock: true,
      },
    ],
  },
  {
    id: "stockage",
    nom: "Stockage (SSD / NVMe)",
    emoji: "💾",
    produits: [
      {
        id: "ssd-1",
        nom: "Samsung 990 Pro 1 To",
        description: "NVMe PCIe 4.0 — 7 450 Mo/s en lecture",
        prixNormal: 139,
        prixPromo: 99,
        marchand: "Amazon",
        lienAffilie: "https://www.amazon.fr",
        badge: "Meilleur SSD gaming",
        enStock: true,
      },
      {
        id: "ssd-2",
        nom: "WD Black SN850X 2 To",
        description: "NVMe PCIe 4.0 — Idéal PS5 et PC gaming",
        prixNormal: 219,
        prixPromo: 159,
        marchand: "Materiel.net",
        lienAffilie: "https://www.materiel.net",
        badge: null,
        enStock: true,
      },
    ],
  },
  {
    id: "peripheriques",
    nom: "Périphériques",
    emoji: "🖱️",
    produits: [
      {
        id: "peri-1",
        nom: "Logitech G Pro X Superlight 2",
        description: "Souris gaming sans fil — 60g ultraléger",
        prixNormal: 159,
        prixPromo: 119,
        marchand: "Amazon",
        lienAffilie: "https://www.amazon.fr",
        badge: "Coup de coeur",
        enStock: true,
      },
      {
        id: "peri-2",
        nom: "Keychron Q3 Pro",
        description: "Clavier mécanique TKL — Switch Red",
        prixNormal: 199,
        prixPromo: 169,
        marchand: "Amazon",
        lienAffilie: "https://www.amazon.fr",
        badge: null,
        enStock: true,
      },
    ],
  },
]
