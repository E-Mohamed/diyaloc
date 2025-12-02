import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
import FaqItem from "./components/FaqItem";

const faqQuestions = [
  {
    question: "La sous-location professionnelle est-elle légale ?",
    answer: "Oui. La sous-location professionnelle est tout à fait légale à partir du moment où un contrat adapté est signé avec le propriétaire et que les obligations administratives sont respectées. Nous gérons l’ensemble des démarches et assurons une totale transparence."
  },
  {
    question: "Quel est l’avantage pour un propriétaire ?",
    answer: "Vous percevez un loyer fixe chaque mois, sans vacance, sans gestion et sans contraintes. C’est une solution simple et sécurisée pour rentabiliser un bien immobilier sans s’occuper de l’exploitation locative."
  },
  {
    question: "En quoi est-ce différent d’une agence immobilière classique ?",
    answer: "Contrairement à une agence, nous ne prenons pas de commission : nous devenons nous-même locataire de votre bien. Nous assurons ensuite l’exploitation en courte durée, l’entretien, le suivi, les réservations et la gestion complète du logement."
  },
  {
    question: "Dois-je m’occuper de l’aménagement ou des voyageurs ?",
    answer: "Non. Nous nous chargeons de l’aménagement, de la décoration, du ménage, de la mise en ligne sur les plateformes et de la gestion des voyageurs. Vous n’avez rien à gérer : nous nous occupons de tout."
  }
];

const features = [{
  title: "Revenus garantis stables",
  description: "Avec la sous-location professionnelle, vous percevez un loyer fixe chaque mois, qu’il y ait des réservations ou non. Aucun risque de vacance, aucune fluctuation saisonnière : votre revenu est sécurisé et prévisible."
},
{
  title: "Zéro Gestion, Zéro Contraintes",
  description: "Nous prenons en charge l’intégralité de l’exploitation du logement : ameublement, entretien, ménage, gestion des séjours, communication… Vous nous louez le bien, nous nous occupons du reste. Une tranquillité totale, sans aucune charge mentale."
},
{
  title: "Préservation et Mise en Valeur",
  description: "Le logement est entretenu de manière régulière et professionnelle. Chaque séjour implique un contrôle systématique, un nettoyage complet et une vigilance constante sur l’état du bien. Résultat : un appartement propre, soigné et maintenu en excellent état toute l’année."
}]


export default function Home() {
  return (
    <main className="min-h-screen bg-white m-0 p-0 font-[family-name:var(--font-garet)]">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white font-[family-name:var(--font-kenao-sans-serif)]">
            <div className="flex">
              <div className="relative w-16 h-16 mr-4">
                <Image
                  src="/logo_no_bg.svg"
                  alt="Logo Diyaloc"
                  fill
                />
              </div>
              <div className="flex justify-end pt-[2vh]">
                <span className="text-2xl md:text-6xl font-semibold tracking-wider">DIYALOC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevate Section */}
      <section className="pt-10 px-6 flex flex-col justify-between">
        <h2 className="text-5xl font-light text-gray-800 mb-20 flex-none">Optimisez la valeur de votre bien</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 items-start h-2/3">
            <div className="relative h-96">
              <Image
                src="/section.jpg"
                alt="Interior design"
                fill
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Une gestion locative nouvelle génération, pensée pour la tranquillité des propriétaires et l’excellence du séjour.
                Contrairement aux agences traditionnelles, nous prenons entièrement à notre charge la mise en valeur, l’optimisation et l’exploitation de votre bien en location meublée de courte durée.
                <br />
                <br />
                Nous garantissons des revenus stables grâce à un contrat de location professionnelle, sans vacance ni imprévu, tout en assurant une qualité d’accueil premium pour les voyageurs.
                Chaque appartement est aménagé, entretenu et géré par nos soins pour offrir une expérience irréprochable et maximiser la rentabilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      {/* Visit Stores Section */}
      {/* <section className="h-screen">
        <div className="relative h-60">
          <Image
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2000&auto=format&fit=crop"
            alt="Store interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h2 className="text-5xl font-light text-white">Nos biens en locations</h2>
          </div>
        </div>
        <div className="bg-stone-200 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-2">Modern Lifestyle Main Branch</h3>
              <p className="text-gray-600 text-sm mb-1">123-456-7890</p>
              <p className="text-gray-600 text-sm">Store hours: 10:00 AM to 9:00 PM daily</p>
              <p className="text-gray-500 text-xs">(except on public holidays)</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">St. Northeast Mall</h3>
              <p className="text-gray-600 text-sm mb-1">123-456-7890</p>
              <p className="text-gray-600 text-sm">Store hours: 10:00 AM to 10:00 PM daily</p>
              <p className="text-gray-500 text-xs">(except on public holidays)</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20 px-6 h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="text-5xl font-light text-gray-800">FAQ</h2>
            </div>
            <div className="lg:col-span-2 space-y-8">
              {
                faqQuestions.map((item, index) => (<FaqItem key={index} question={item.question} answer={item.answer} />))
              }
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16 px-6 h-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-8">
              <div className="relative w-12 h-12 mr-4">
                <Image
                  src="/logo_no_bg.svg"
                  alt="Logo Diyaloc"
                  fill
                />
              </div>
              <div className="text-sm md:text-xl">
                <div className="font-semibold tracking-wider font-[family-name:var(--font-kenao-sans-serif)]">DIYALOC</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}