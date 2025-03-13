export const metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      
      <div className="prose max-w-3xl">
        <h2>Angaben gemäß § 55 Abs. 2 RStV</h2>
        <p>
          Kevin Kaize Wu<br />
          Farmanstrasse 46<br />
          8152 Glattpark<br />
          Schweiz
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: kevinkaizewu@gmail.com<br />
          Telefon: +41 78 710 82 51
        </p>
      </div>
    </div>
  );
} 