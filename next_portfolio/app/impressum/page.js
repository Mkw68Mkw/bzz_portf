export const metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[var(--background)] rounded-lg shadow-sm p-8 space-y-8">
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6 pb-2 border-b-2 border-gray-100">
            Impressum
          </h1>
          <div className="space-y-6 text-[var(--foreground)]">
            <div>
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Angaben gemäß § 55 Abs. 2 RStV</h2>
              <div className="text-lg text-[var(--foreground)] text-opacity-80 space-y-2">
                <p className="font-medium">Kevin Kaize Wu</p>
                <p>Farmanstrasse 46<br/>8152 Glattpark<br/>Schweiz</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">Kontakt</h2>
              <div className="text-lg text-[var(--foreground)] text-opacity-80 space-y-2">
                <p>E-Mail: <span className="text-blue-600">kevinkaizewu@gmail.com</span></p>
                <p>Telefon: +41 78 710 82 51</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 