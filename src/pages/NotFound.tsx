import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-lavender-50 px-6 text-center">
      <Heart className="mb-6 h-16 w-16 text-lavender-300" />
      <h1 className="font-display text-5xl font-bold text-gray-800">404</h1>
      <p className="mt-3 text-xl text-gray-500">Page not found</p>
      <p className="mt-2 text-gray-400">Looks like this page wandered off.</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-lavender-400 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-lavender-500"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
