interface SpotCounterProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function SpotCounter({ spotsRemaining, totalSpots }: SpotCounterProps) {
  return (
    <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full px-4 py-1 shadow-sm">
      <span className="text-sm text-gray-600">Spots remaining:</span>
      <span className="ml-2 text-[#4A90E2] font-bold">{spotsRemaining}</span>
      <span className="ml-1 text-sm text-gray-600">of {totalSpots}</span>
    </div>
  );
}
