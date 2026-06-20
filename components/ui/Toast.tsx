/**
 * Reusable Toast Component
 */

type ToastProps = {
  message: string;
};

export default function Toast({
  message,
}: ToastProps) {
  return (
    <div className="bg-green-500 text-white px-4 py-3 rounded-md shadow-md">
      {message}
    </div>
  );
}