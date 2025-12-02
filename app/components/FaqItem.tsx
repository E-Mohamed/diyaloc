interface FaqItems {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItems) {
  return (
      <div>
          <h4 className="font-semibold mb-2">{question}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
              {answer}
          </p>
      </div>
  );
}