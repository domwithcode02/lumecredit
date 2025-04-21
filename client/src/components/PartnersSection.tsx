export default function PartnersSection() {
  return (
    <section className="bg-slate-50 py-6 border-y border-slate-100">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-500 mb-4 text-center">Powered by industry-leading partners</p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8">
            {/* Galileo */}
            <div className="flex items-center">
              <img src="/src/assets/image_1745201381794.png" alt="Galileo" className="h-9 opacity-85 hover:opacity-100 transition-all" />
            </div>
            
            {/* Stripe */}
            <div className="flex items-center">
              <img src="/src/assets/image_1745201630613.png" alt="Stripe" className="h-16 opacity-85 hover:opacity-100 transition-all" />
            </div>
            
            {/* Plaid */}
            <div className="flex items-center">
              <img src="/src/assets/image_1745201401457.png" alt="Plaid" className="h-8 opacity-85 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}