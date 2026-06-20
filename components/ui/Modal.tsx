/**
 * Reusable Modal Component
 */

type ModalProps = {
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  title,
  children,
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}