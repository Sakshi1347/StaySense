type CardProps = {
  title: string;
  description: string;
};

export default function Card({
  title,
  description,
}: CardProps) {
  return (
    <div className="border rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-3 text-gray-600">
        {description}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Learn More
      </button>
    </div>
  );
}