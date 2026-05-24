import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Github, Star } from 'lucide-react';
import { Button } from './ui/button';
import cmLogo from '../../assets/CM_LOGO.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'Movies', path: 'movies' },
        { name: 'Leaderboard', path: 'leaderboard' },
        { name: 'Easter Eggs', path: 'easter-eggs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: 'about' },
        { name: 'Contact', path: 'contact' },
        { name: 'Terms', path: 'terms' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', path: '#' },
        { name: 'Reddit', path: '#' },
        { name: 'Blog', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={cmLogo} alt="Cinemyth Logo" className="w-auto h-20 object-contain" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cinemyth</span>
              {/* Easter egg hint */}
              <div className="w-1 h-1 bg-yellow-400 rounded-full easter-egg-hint opacity-20"
                title="🌟 More secrets hidden here..."></div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Where Hollywood fans create, share, and celebrate their favorite movies through edits, memes, reviews, and facts.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary/10"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.path)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Cinemyth. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={() => onNavigate('terms')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}