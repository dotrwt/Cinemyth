import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Star, Trophy, Search, Home, Film } from 'lucide-react';
import cmLogo from '../../assets/CM_LOGO.png';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, path: 'home' },
    { name: 'Movies', icon: Film, path: 'movies' },
    { name: 'Leaderboard', icon: Trophy, path: 'leaderboard' },
    { name: 'Easter Eggs', icon: Star, path: 'easter-eggs' },
    { name: 'About', icon: null, path: 'about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center space-x-2">
              <img src={cmLogo} alt="Cinemyth Logo" className="w-auto h-15 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cinemyth</span>
              {/* Easter egg hint */}
              <div className="w-2 h-2 bg-yellow-400 rounded-full easter-egg-hint opacity-30 ml-2"
                title="🎬 Hidden treasures await..."></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground hover:text-primary hover:bg-white/5'
                  }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </button>
            ))}

            {/* Search Button */}
            <Button variant="ghost" size="sm" className="glassmorphism">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground hover:text-primary hover:bg-white/5'
                  }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}