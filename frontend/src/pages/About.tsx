import { FaSearch, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
          Natuke ÕpetajateRate'ist
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          ÕpetajateRate on platvorm, mis aitab õpilastel hinnata ja arvustada oma õpetajaid. 
          Loome läbipaistva kogukonna, kus õpilased saavad jagada kogemusi ja teha teadlikke otsuseid.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaSearch className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Otsi ja avasta</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Leia õpetajaid ning vaata nende hinnanguid ja arvustusi.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaStar className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Hinda ja arvusta</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Jaga oma kogemusi ja anna konstruktiivset tagasisidet, et aidata teisi.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Liitu kogukonnaga</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Ühendu õpilaste ja õpetajatega, et parandada õppimiskogemust kõigile.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Oled valmis aitama kujundada hariduse tulevikku?
        </p>
        <Link
          to="/login"
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Alusta
        </Link>
      </div>
    </div>
  );
}
