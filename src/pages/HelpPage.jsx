import React, { useState, useEffect } from "react";
import { Phone, ExternalLink, Mail, MessageCircle, Clock, Dog, Heart, Stethoscope, MapPin, Search, AlertCircle, Locate } from "lucide-react";

const HelpPage = () => {
  const [userLocation, setUserLocation] = useState('');
  const [locationError, setLocationError] = useState(false);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.log('Location access denied, using default search');
          setLocationError(true);
        }
      );
    }
  }, []);

  // Generate Google Maps search URLs based on user location
  const getMapUrl = (searchQuery) => {
    if (userLocation) {
      // If we have coordinates, use them for more accurate nearby search
      return `https://www.google.com/maps/search/${searchQuery}/@${userLocation},15z`;
    } else {
      // Fallback to general search near user
      return `https://www.google.com/maps/search/${searchQuery}+near+me`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Dog Paw Prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 text-6xl animate-float">🐾</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-float animation-delay-2000">🐾</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl animate-float animation-delay-4000">🐾</div>
      </div>



      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-20">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-2xl shadow-2xl animate-pulse">
              <Dog className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6 drop-shadow-lg">
            Dog Care Support Center
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 font-light max-w-2xl mx-auto leading-relaxed">
            Questions about your dog's breed or health? We're here to help with expert guidance and resources.
          </p>
        </div>

        {/* Emergency Call Card */}
        <div className="mb-16">
          <a
            href="tel:1962"
            className="block group"
          >
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-2 border-white border-opacity-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-5 group-hover:bg-opacity-30 transition-all duration-300">
                    <Phone className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Pet Emergency Helpline
                    </h3>
                    <p className="text-pink-100 text-base md:text-lg">
                      24/7 support for urgent pet care situations
                    </p>
                  </div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-8 py-4">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-wider">1962</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl p-3 flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Breed Consultation</h4>
                <p className="text-purple-200 mb-3">Get detailed breed information and care tips</p>
                <a href="mailto:breedcare@doghelp.com" className="text-pink-300 hover:text-pink-200 font-semibold underline underline-offset-4 break-all">
                  dirveterinary@mp.gov.in 
                </a>
              </div>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 hover:bg-opacity-15 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl p-3 flex-shrink-0">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Quick Response</h4>
                <p className="text-purple-200 mb-3">Expert advice when you need it</p>
                <p className="text-pink-300 font-semibold">
                  Response within 2-4 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dog Care Services */}
        <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 md:p-10 shadow-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 text-center mb-4">
            🐕 Dog Care Services Near You
          </h2>
          <div className="text-center mb-8">
            {userLocation ? (
              <p className="text-green-300 text-sm flex items-center justify-center gap-2">
                <Locate className="w-4 h-4" />
                Location detected - Showing services near you
              </p>
            ) : (
              <p className="text-purple-200 text-sm flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                Showing services near your location
              </p>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Veterinary Services */}
            <a
              href={getMapUrl('veterinary+doctors')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block border-2 border-transparent hover:border-white hover:border-opacity-30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-shrink-0">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Find Veterinarians</h4>
                  <p className="text-pink-100 mb-4">Locate certified vets near your location</p>
                  <div className="inline-flex items-center gap-2 bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold text-sm">
                    Search Nearby <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Pet Adoption */}
            <a
              href={getMapUrl('dog+adoption+centers')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block border-2 border-transparent hover:border-white hover:border-opacity-30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Adoption Centers</h4>
                  <p className="text-purple-100 mb-4">Find your perfect companion nearby</p>
                  <div className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm">
                    Search Nearby <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Pet Stores */}
            <a
              href={getMapUrl('pet+shops')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block border-2 border-transparent hover:border-white hover:border-opacity-30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-shrink-0">
                  <Dog className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Pet Stores</h4>
                  <p className="text-indigo-100 mb-4">Food, toys, and supplies near you</p>
                  <div className="inline-flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold text-sm">
                    Find Nearby <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Animal Shelters */}
            <a
              href={getMapUrl('animal+shelters')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 block border-2 border-transparent hover:border-white hover:border-opacity-30"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-3 flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">Animal Shelters</h4>
                  <p className="text-emerald-100 mb-4">Support and rescue services</p>
                  <div className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold text-sm">
                    Find Nearby <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Helpful Resources */}
        <div className="bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl p-8 md:p-10 shadow-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300 text-center mb-10">
            📚 Breed Information Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* AKC Link */}
            <a
              href="https://www.akc.org/dog-breeds/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  🏆 AKC Breeds
                </h4>
                <p className="text-purple-200 text-sm mb-3">
                  Official breed standards
                </p>
                <ExternalLink className="w-6 h-6 text-pink-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </a>

            {/* Dog Training */}
            <a
              href="https://www.akc.org/expert-advice/training/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  🎓 Training Tips
                </h4>
                <p className="text-purple-200 text-sm mb-3">
                  Expert training guides
                </p>
                <ExternalLink className="w-6 h-6 text-pink-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </a>

            {/* Dog Health */}
            <a
              href="https://www.akc.org/expert-advice/health/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-br from-pink-600 to-rose-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative">
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  💊 Health Guide
                </h4>
                <p className="text-purple-200 text-sm mb-3">
                  Dog health information
                </p>
                <ExternalLink className="w-6 h-6 text-pink-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 bg-opacity-90 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-white border-opacity-20 shadow-xl">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-white flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">⚠️ Important Notice</h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                This tool provides breed predictions based on visual characteristics. For accurate identification and health concerns, always consult with a licensed veterinarian or certified dog breed expert.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-10">
          <p className="text-purple-100 text-base md:text-lg leading-relaxed mb-4">
            🐾 Your dog's health and happiness are our priority. We're dedicated to providing accurate breed information and connecting you with the best care resources.
          </p>
          <p className="text-pink-300 font-semibold">
            ⚕️ Remember: Always consult with a licensed veterinarian for medical advice!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HelpPage;