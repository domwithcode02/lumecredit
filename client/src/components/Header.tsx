import SpotCounter from "@/components/SpotCounter";

interface HeaderProps {
  spotsRemaining: number;
  totalSpots: number;
}

export default function Header({ spotsRemaining, totalSpots }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#4A90E2] text-white font-['Poppins',sans-serif] font-bold text-xl px-3 py-2 rounded">
            LumeCredit
          </div>
        </div>
        
        {/* Spot Counter */}
        <SpotCounter spotsRemaining={spotsRemaining} totalSpots={totalSpots} />
      </div>
    </header>
  );
}
