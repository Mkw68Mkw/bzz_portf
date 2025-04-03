export const metadata = {
  title: "Datenschutz",
};

export default function Datenschutz() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--foreground)] mb-6 pb-2 border-b-2 border-gray-100">Datenschutzerklärung</h1>
        
        <div className="bg-[var(--background)] rounded-lg shadow-sm p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">1. Datenschutz auf einen Blick</h2>
            <p className="text-[var(--foreground)] text-opacity-80 leading-relaxed">
              Diese Website dient ausschließlich Präsentationszwecken und erhebt 
              keine personenbezogenen Daten. Es werden keine Tracking-Technologien 
              oder Cookies verwendet.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">2. Hosting</h2>
            <p className="text-[var(--foreground)] text-opacity-80 leading-relaxed">
              Unser Hoster erhebt in Server-Logfiles folgende Daten, die Ihr Browser übermittelt:
              IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Hostname des zugreifenden Geräts, 
              Uhrzeit der Serveranfrage.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-[var(--foreground)] mt-6">Kontakt</h2>
          <p>E-Mail: <span className="text-blue-600">kevinkaizewu@gmail.com</span></p>
        </div>
      </div>
    </div>
  );
} 