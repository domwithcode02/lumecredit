interface SpotCounterProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function SpotCounter({ spotsRemaining, totalSpots }: SpotCounterProps) {
  return (
    <div className="hidden sm:flex items-center bg-blue-50 rounded-full px-4 py-1.5">
      <span className="h-2 w-2 bg-[#4A90E2] rounded-full animate-pulse mr-2.5"></span>
      <span className="text-sm font-medium">
        <span className="text-[#4A90E2] font-semibold">{spotsRemaining}</span>
        <span className="text-slate-600"> spots left</span>
      </span>
    </div>
  );
}
