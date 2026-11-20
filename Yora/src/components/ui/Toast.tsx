export function Toast({ message }: { message: string | null }) {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-crimson text-white text-xs font-bold shadow-2xl transition-all duration-300 ${
        message ? "opacity-100" : "opacity-0 pointer-events-none translate-y-4"
      }`}
    >
      {message}
    </div>
  );
}
