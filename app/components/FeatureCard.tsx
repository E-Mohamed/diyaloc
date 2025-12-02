interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-tertiary py-8 flex flex-col gap-20 transform transition duration-300
        hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl mb-4 text-gray-800 px-8 h-15">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed border-t-2 border-t-diyagray pt-10 px-8">
              {description}
            </p>
    </div>
  );
}