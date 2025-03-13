export const metadata = {
  title: "Datenschutz",
};

export default function Datenschutz() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      
      <div className="prose max-w-3xl">
        <h2>1. Datenschutz auf einen Blick</h2>
        <p>
          Diese Website dient ausschließlich Präsentationszwecken und erhebt 
          keine personenbezogenen Daten. Es werden keine Tracking-Technologien 
          oder Cookies verwendet.
        </p>
    
        <h2>2. Hosting</h2>
        <p>
          Unser Hoster erhebt in Server-Logfiles folgende Daten, die Ihr Browser übermittelt:
          IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Hostname des zugreifenden Geräts, Uhrzeit der Serveranfrage.
        </p>
      </div>
    </div>
  );
} 