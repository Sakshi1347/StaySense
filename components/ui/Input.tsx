/**
 * Reusable Input Component
 */

type InputProps = {
  placeholder: string;
  type?: string;
};

export default function Input({
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-md px-3 py-2 w-full"
    />
  );
}