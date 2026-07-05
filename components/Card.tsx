type CardProps = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export default function Card({
  id,
  title,
  description,
  location,
  price,
  onDelete,
  onEdit,
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

      <div className="mt-4 flex gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          View Details
        </button>

        <button
          onClick={() => onDelete(id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
  onClick={() => onEdit(id)}
  className="bg-yellow-500 text-white px-4 py-2 rounded"
>
  Edit
</button>
      </div>
    </div>
  );
}