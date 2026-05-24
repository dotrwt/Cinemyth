import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

import { 
  Star, 
  Sparkles, 
  Gift, 
  Gem, 
  Crown, 
  Trophy,
  Search,
  Clock,
  MapPin,
  Zap,
  Eye,
  Heart,
  Lock,
  Unlock,
  CheckCircle,
  Calendar
} from 'lucide-react';

interface EasterEggsPageProps {
  onNavigate: (page: string) => void;
}

export function EasterEggsPage({ onNavigate }: EasterEggsPageProps) {
  const [foundEggs, setFoundEggs] = useState<string[]>(['welcome-star', 'first-click']);

  const easterEggs = [
    {
      id: 'welcome-star',
      name: 'Welcome Star',
      description: 'Found on your first visit to Cinemyth',
      difficulty: 'Easy',
      reward: 'Welcome Badge',
      points: 100,
      location: 'Homepage',
      hint: 'Look for the twinkling star in the hero section',
      found: true,
      unlocked: true,
    },
    {
      id: 'navbar-gem',
      name: 'Navigation Gem',
      description: 'Hidden in the site navigation',
      difficulty: 'Easy',
      reward: 'Explorer Badge',
      points: 150,
      location: 'Navigation Bar',
      hint: 'Something small and yellow catches the eye...',
      found: false,
      unlocked: true,
    },
    {
      id: 'movie-detail-secret',
      name: 'Movie Detail Secret',
      description: 'Visit 5 different movie pages',
      difficulty: 'Medium',
      reward: 'Film Buff Badge',
      points: 300,
      location: 'Movie Pages',
      hint: 'Explore different movies to unlock this treasure',
      found: false,
      unlocked: true,
    },
    {
      id: 'leaderboard-crown',
      name: 'Royal Crown',
      description: 'Spend 5 minutes on the leaderboard',
      difficulty: 'Medium',
      reward: 'Royal Badge + Crown Avatar',
      points: 500,
      location: 'Leaderboard',
      hint: 'Study the champions long enough and you might join them',
      found: false,
      unlocked: true,
    },
    {
      id: 'midnight-mystery',
      name: 'Midnight Mystery',
      description: 'Visit the site at exactly midnight',
      difficulty: 'Hard',
      reward: 'Night Owl Badge + Special Theme',
      points: 750,
      location: 'Any Page',
      hint: 'When the clock strikes twelve, magic happens...',
      found: false,
      unlocked: false,
    },
    {
      id: 'konami-code',
      name: 'The Classic Code',
      description: 'Enter the legendary sequence',
      difficulty: 'Hard',
      reward: 'Retro Badge + Special Effects',
      points: 1000,
      location: 'Any Page',
      hint: '↑↑↓↓←→←→BA',
      found: false,
      unlocked: false,
    },
    {
      id: 'ultimate-fan',
      name: 'Ultimate Fan',
      description: 'Discover all other easter eggs',
      difficulty: 'Legendary',
      reward: 'Ultimate Badge + VIP Status',
      points: 2500,
      location: 'Achievement',
      hint: 'Only the most dedicated fans can claim this prize',
      found: false,
      unlocked: false,
    },
  ];

  const rewards = [
    {
      name: 'Welcome Badge',
      icon: Star,
      description: 'Your first step into the Cinemyth universe',
      rarity: 'Common',
      color: 'from-blue-500 to-cyan-500',
      unlocked: true,
    },
    {
      name: 'Explorer Badge',
      icon: Search,
      description: 'For those who look beyond the obvious',
      rarity: 'Common',
      color: 'from-green-500 to-emerald-500',
      unlocked: false,
    },
    {
      name: 'Film Buff Badge',
      icon: Eye,
      description: 'True appreciation for cinema',
      rarity: 'Uncommon',
      color: 'from-purple-500 to-violet-500',
      unlocked: false,
    },
    {
      name: 'Royal Badge',
      icon: Crown,
      description: 'Fit for cinema royalty',
      rarity: 'Rare',
      color: 'from-yellow-500 to-orange-500',
      unlocked: false,
    },
    {
      name: 'Night Owl Badge',
      icon: Clock,
      description: 'For the midnight movie marathoners',
      rarity: 'Rare',
      color: 'from-indigo-500 to-purple-500',
      unlocked: false,
    },
    {
      name: 'Retro Badge',
      icon: Zap,
      description: 'Old school gamers unite',
      rarity: 'Epic',
      color: 'from-pink-500 to-red-500',
      unlocked: false,
    },
    {
      name: 'Ultimate Badge',
      icon: Trophy,
      description: 'The pinnacle of Cinemyth achievement',
      rarity: 'Legendary',
      color: 'from-amber-400 via-yellow-500 to-orange-600',
      unlocked: false,
    },
  ];

  const timeline = [
    {
      time: '0-1 week',
      title: 'Welcome Phase',
      description: 'Easy eggs to get you started',
      eggs: ['welcome-star', 'navbar-gem'],
      icon: Star,
    },
    {
      time: '1-2 weeks',
      title: 'Explorer Phase',
      description: 'Dig deeper into the platform',
      eggs: ['movie-detail-secret', 'leaderboard-crown'],
      icon: Search,
    },
    {
      time: '2+ weeks',
      title: 'Master Phase',
      description: 'For the truly dedicated',
      eggs: ['midnight-mystery', 'konami-code'],
      icon: Crown,
    },
    {
      time: 'Achievement',
      title: 'Legend Phase',
      description: 'The ultimate prize',
      eggs: ['ultimate-fan'],
      icon: Trophy,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hard': return 'bg-red-500';
      case 'Legendary': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-green-400';
      case 'Uncommon': return 'text-blue-400';
      case 'Rare': return 'text-purple-400';
      case 'Epic': return 'text-pink-400';
      case 'Legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const totalPoints = easterEggs.reduce((sum, egg) => sum + (egg.found ? egg.points : 0), 0);
  const maxPoints = easterEggs.reduce((sum, egg) => sum + egg.points, 0);
  const progress = (totalPoints / maxPoints) * 100;

  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
          {/* Floating easter egg hints */}
          <div className="absolute top-20 left-20 easter-egg-hint animate-bounce" title="🥚 One of many secrets...">
            <Gem className="w-6 h-6 text-yellow-400 opacity-40" />
          </div>
          <div className="absolute top-32 right-32 easter-egg-hint animate-pulse" title="✨ Look closely...">
            <Sparkles className="w-8 h-8 text-purple-400 opacity-30" />
          </div>
          <div className="absolute bottom-20 left-1/3 easter-egg-hint" title="🎁 Rewards await...">
            <Gift className="w-5 h-5 text-pink-400 opacity-50" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Easter Eggs</span> & Rewards
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hidden throughout Cinemyth are special treasures waiting to be discovered. 
            Find them all to unlock exclusive badges, themes, and bragging rights!
          </p>
          
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{foundEggs.length}</div>
              <div className="text-muted-foreground">Found</div>
            </div>
            <div className="text-4xl text-muted-foreground">/</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">{easterEggs.length}</div>
              <div className="text-muted-foreground">Total</div>
            </div>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{totalPoints} / {maxPoints} points</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>
      </section>

      {/* Easter Eggs List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Hidden <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Treasures</span>
            </h2>
            <p className="text-muted-foreground">Track your progress and discover what's still waiting to be found</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {easterEggs.map((egg) => (
              <Card 
                key={egg.id}
                className={`glassmorphism hover:scale-105 transition-all duration-300 ${
                  egg.found ? 'border-green-500/50 bg-green-500/5' : egg.unlocked ? '' : 'opacity-50'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      {egg.found ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : egg.unlocked ? (
                        <Unlock className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className={egg.found ? 'text-green-400' : ''}>{egg.name}</span>
                    </CardTitle>
                    <Badge className={`${getDifficultyColor(egg.difficulty)} text-white text-xs`}>
                      {egg.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{egg.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span>{egg.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Reward:</span>
                      <span className="text-primary">{egg.reward}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Points:</span>
                      <span className="font-medium">{egg.points}</span>
                    </div>
                  </div>
                  
                  {egg.unlocked && (
                    <div className="p-3 bg-muted/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Hint:</span> {egg.hint}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Discovery <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-muted-foreground">Your journey through the hidden world of Cinemyth</p>
          </div>

          <div className="space-y-8">
            {timeline.map((phase, index) => (
              <div key={phase.time} className="flex items-start space-x-6">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${
                    index === 0 ? 'from-green-500 to-emerald-500' :
                    index === 1 ? 'from-blue-500 to-cyan-500' :
                    index === 2 ? 'from-purple-500 to-pink-500' :
                    'from-yellow-500 to-orange-500'
                  } flex items-center justify-center`}>
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-muted to-transparent" />
                  )}
                </div>
                
                <Card className="flex-1 glassmorphism">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {phase.time}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {phase.eggs.map((eggId) => {
                        const egg = easterEggs.find(e => e.id === eggId);
                        return (
                          <Badge 
                            key={eggId}
                            className={`${egg?.found ? 'bg-green-500' : 'bg-muted'} text-white`}
                          >
                            {egg?.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Reward <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Gallery</span>
            </h2>
            <p className="text-muted-foreground">Exclusive badges and perks for dedicated treasure hunters</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {rewards.map((reward) => (
              <Card 
                key={reward.name}
                className={`glassmorphism text-center hover:scale-105 transition-all duration-300 ${
                  reward.unlocked ? 'border-primary/50' : 'opacity-50'
                }`}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${reward.color} flex items-center justify-center mx-auto mb-4`}>
                    <reward.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`font-bold mb-2 ${reward.unlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {reward.name}
                  </h3>
                  
                  <Badge className={`mb-3 ${getRarityColor(reward.rarity)}`}>
                    {reward.rarity}
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground">
                    {reward.description}
                  </p>
                  
                  {reward.unlocked && (
                    <Badge className="mt-3 bg-green-500 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Unlocked
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Start Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Treasure Hunt</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Hidden throughout Cinemyth are secrets waiting to be discovered. The hunt begins now!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
              onClick={() => onNavigate('home')}
            >
              <Search className="mr-2 h-5 w-5" />
              Begin the Hunt
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glassmorphism"
              onClick={() => onNavigate('movies')}
            >
              <Star className="mr-2 h-5 w-5" />
              Explore Movies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}