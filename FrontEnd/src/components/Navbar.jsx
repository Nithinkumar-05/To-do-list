import { Link } from "react-router-dom";
import { CheckSquare, Home, Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-2xl">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <CheckSquare size={28} className="text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                Todo Mastery
              </h1>
              <p className="text-indigo-100 text-xs font-medium tracking-wide">
                Organize • Achieve • Excel
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/" 
              className="group relative flex items-center space-x-2 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Home size={18} className="text-white group-hover:scale-110 transition-transform duration-200" />
              <span className="text-white font-semibold">Home</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </nav>
  );
}

export default Navbar;