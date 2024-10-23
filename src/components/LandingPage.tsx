import { Calendar, Phone, Mail, Info, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import BookingForm from '../components/BookingForm';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8">
              <h1 className="text-black text-2xl font-light">Glasglans UF</h1>
            </div>
            <h2 className="text-3xl mb-4">FÖNSTERPUTS</h2>
            <p className="text-xl mb-8">Professionell fönsterputsning för ditt hem</p>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-8 text-center">Våra Tjänster</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Check className="w-8 h-8 text-black" />
                <h3 className="text-xl">Grundservice</h3>
                <p>Vi putsar båda sidor av fönstret med miljövänliga medel</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Check className="w-8 h-8 text-black" />
                <h3 className="text-xl">Prenumeration</h3>
                <p>25% rabatt på andra och tredje besöket</p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="space-y-4">
                <Check className="w-8 h-8 text-black" />
                <h3 className="text-xl">Tilläggstjänster</h3>
                <p>Rengöring av fönsterkarmar och steghyra vid behov</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-8 text-center">Priser</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl mb-4">Grundpris</h3>
                <p className="text-3xl mb-4">40 kr<span className="text-sm">/fönster</span></p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2" />Båda sidor av fönstret</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2" />Miljövänliga rengöringsmedel</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent>
                <h3 className="text-xl mb-4">Tillägg</h3>
                <p className="text-3xl mb-4">10 kr<span className="text-sm">/fönsterkarm</span></p>
                <ul className="space-y-2">
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2" />Rengöring av karmar</li>
                  <li className="flex items-center"><Check className="w-4 h-4 mr-2" />Steghyra vid behov</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-2xl mb-8 text-center">Boka Städning</h2>
          <BookingForm />
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl mb-8 text-center">Viktig Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 mr-2 flex-shrink-0" />
                <p>Vi kan putsa fönster ner till 15 minusgrader, dock inte vid nederbörd</p>
              </div>
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 mr-2 flex-shrink-0" />
                <p>Vi putsar inte utsidan av fönster över 3 meter som inte går att vända</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Info className="w-6 h-6 mr-2 flex-shrink-0" />
                <p>Flytta möbler och föremål från fönsterbrädor innan vi kommer</p>
              </div>
              <div className="flex items-start">
                <Info className="w-6 h-6 mr-2 flex-shrink-0" />
                <p>Lägg ut nycklar om du inte kan vara hemma</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl mb-2">Glasglans UF</h3>
              <p>Professionell fönsterputsning</p>
            </div>
            <div className="flex space-x-4">
              <a href="tel:" className="hover:text-gray-300">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:" className="hover:text-gray-300">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Calendar className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
