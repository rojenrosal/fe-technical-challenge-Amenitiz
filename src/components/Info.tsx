export function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <p>
      <span className="font-medium">{label}:</span>{" "}
      <span className="text-gray-700">{value}</span>
    </p>
  );
}