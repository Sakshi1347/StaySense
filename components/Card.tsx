type CardProps = {
  title: string;
  description: string;
  location: string;
  price: number;
};

export default function Card({
  title,
  description,
  location,
  price,
}: CardProps) {
  return (
    <div className="border rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>

      <p className="mt-2">
        📍 <strong>Location:</strong> {location}
      </p>

      <p className="mt-1">
        💰 <strong>Price:</strong> ₹{price}
      </p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </button>
    </div>
  );
}