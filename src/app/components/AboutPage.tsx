import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

import { 
  Heart, 
  Users, 
  Zap, 
  Trophy,
  Film,
  Star,
  Play,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Cinema',
      description: 'We believe every movie has a story worth sharing, and every fan has creativity worth celebrating.',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Our platform thrives on the collective creativity and enthusiasm of movie lovers worldwide.',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Innovation & Fun',
      description: 'We combine cutting-edge technology with gamification to make movie fandom more engaging.',
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const stats = [
    { label: 'Active Creators', value: '15K+', icon: Users },
    { label: 'Movie Edits', value: '200K+', icon: Film },
    { label: 'Easter Eggs Found', value: '1.2M+', icon: Star },
    { label: 'Communities', value: '500+', icon: Trophy },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Film school graduate with a passion for community building and creative technology.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTY1NTg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Head of Community',
      bio: 'Former social media manager at major film studios, connecting fans worldwide.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc1NjU1ODkzN3ww&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      name: 'Marcus Thompson',
      role: 'Lead Developer',
      bio: 'Full-stack developer and movie enthusiast, building the future of fan communities.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3NTY1NTg5Mzd8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599797924-1637b2c98045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHRoZWF0ZXJ8ZW58MHx8fHwxNzU2NTU4OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinema seats"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Easter Egg */}
            <div className="absolute -top-8 right-0 easter-egg-hint" title="The story behind the story...">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Cinemyth</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Born from a shared love of cinema and community, Cinemyth is where movie fans unite 
              to create, share, and celebrate the magic of Hollywood through user-generated content.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe that every movie fan has a unique perspective worth sharing. Cinemyth provides 
                the platform and tools for creators to express their passion through edits, memes, reviews, 
                and hidden facts that bring new life to beloved films.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through gamification, community features, and exclusive easter eggs, we're building more 
                than just a platform—we're creating a universe where Hollywood fans can thrive together.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate('movies')}
              >
                <Play className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </div>
            <div className="relative">
              <div className="glassmorphism rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 easter-egg-hint" title="Hidden features await...">
                  <Star className="w-8 h-8 text-yellow-400 animate-spin" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xseXdvb2QlMjBjaW5lbWElMjBzZXQlMjBtb3ZpZXxlbnwwfHx8fDE3NTY1NTg5NjZ8MA&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Movie production"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Cinemyth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card 
                key={value.title} 
                className="group hover:scale-105 transition-all duration-300 glassmorphism hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-4 mx-auto`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Community <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase the incredible creativity of our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="relative">
                  {index === 2 && (
                    <div className="absolute -top-2 -right-2 easter-egg-hint" title="Achievement unlocked!">
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                  )}
                  <div className="w-16 h-16 glassmorphism rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Cinemyth's vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="group hover:scale-105 transition-all duration-300 glassmorphism text-center overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 easter-egg-hint" title="Founder's secret...">
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                    )}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-primary/20"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 easter-egg-hint" title="Your journey begins here...">
              <Sparkles className="w-8 h-8 text-secondary animate-bounce" />
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              Ready to Be Part of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Something Special</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of movie fans who are already creating, sharing, and discovering 
              amazing content on Cinemyth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate('movies')}
              >
                Start Creating Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glassmorphism"
                onClick={() => onNavigate('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}