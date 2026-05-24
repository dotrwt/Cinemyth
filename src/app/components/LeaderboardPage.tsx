import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { 
  Trophy, 
  Crown, 
  Star, 
  TrendingUp, 
  Users, 
  Flame,
  Medal,
  Heart,
  MessageCircle,
  Eye,
  Sparkles
} from 'lucide-react';

interface LeaderboardPageProps {
  onNavigate: (page: string) => void;
}

export function LeaderboardPage({ onNavigate }: LeaderboardPageProps) {
  const topCreators = [
    {
      rank: 1,
      name: 'CinemaGod',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
      points: 15847,
      badge: 'Legend',
      specialty: 'Movie Edits',
      weeklyPosts: 23,
      totalLikes: 45672,
      crown: true,
    },
    {
      rank: 2,
      name: 'FilmFanatic',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b812b6c8?w=400',
      points: 12934,
      badge: 'Master',
      specialty: 'Memes',
      weeklyPosts: 31,
      totalLikes: 38291,
      crown: false,
    },
    {
      rank: 3,
      name: 'MovieMystic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      points: 11672,
      badge: 'Expert',
      specialty: 'Reviews',
      weeklyPosts: 18,
      totalLikes: 29847,
      crown: false,
    },
    {
      rank: 4,
      name: 'ReelRebel',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      points: 9854,
      badge: 'Pro',
      specialty: 'Facts',
      weeklyPosts: 15,
      totalLikes: 24567,
      crown: false,
    },
    {
      rank: 5,
      name: 'SceneStealer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      points: 8923,
      badge: 'Rising Star',
      specialty: 'Edits',
      weeklyPosts: 27,
      totalLikes: 21834,
      crown: false,
    },
  ];

  const topPosts = [
    {
      title: 'Interstellar Docking Scene Edit',
      creator: 'CinemaGod',
      movie: 'Interstellar',
      type: 'Edit',
      likes: 3472,
      views: 28934,
      comments: 189,
    },
    {
      title: 'When You Realize Your Life is a Comedy',
      creator: 'FilmFanatic',
      movie: 'Various',
      type: 'Meme',
      likes: 2891,
      views: 45672,
      comments: 234,
    },
    {
      title: 'Hidden Details in The Dark Knight',
      creator: 'MovieMystic',
      movie: 'The Dark Knight',
      type: 'Facts',
      likes: 2156,
      views: 19847,
      comments: 98,
    },
  ];

  const categories = [
    { name: 'Most Creative Edits', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
    { name: 'Funniest Memes', icon: Flame, color: 'from-red-500 to-pink-500' },
    { name: 'Best Reviews', icon: Star, color: 'from-blue-500 to-purple-500' },
    { name: 'Amazing Facts', icon: Medal, color: 'from-green-500 to-teal-500' },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">{rank}</span>;
  };

  return (
    <div className="pt-16">
      {/* Hero Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="absolute top-0 right-1/4 easter-egg-hint" title="🏆 Champion secrets await...">
            <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Weekly <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Leaderboard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Compete with creators worldwide, climb the ranks, and become a movie legend. 
            Top creators earn exclusive rewards and recognition.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-muted-foreground">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">2.1M</div>
              <div className="text-muted-foreground">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">15M</div>
              <div className="text-muted-foreground">Likes Given</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 5 Creators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Top <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creators</span>
            </h2>
            <p className="text-muted-foreground">This week's most active and loved creators</p>
          </div>

          <div className="space-y-4">
            {topCreators.map((creator, index) => (
              <Card 
                key={creator.name}
                className={`glassmorphism hover:scale-[1.02] transition-all duration-300 ${
                  creator.rank === 1 ? 'border-yellow-500/50 bg-gradient-to-r from-yellow-500/5 to-orange-500/5' : ''
                } ${creator.rank <= 3 ? 'border-primary/30' : ''}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(creator.rank)}
                      </div>
                      
                      <Avatar className="w-16 h-16 border-2 border-primary/20">
                        <AvatarImage src={creator.avatar} alt={creator.name} />
                        <AvatarFallback>{creator.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-bold">{creator.name}</h3>
                          {creator.crown && <Crown className="w-5 h-5 text-yellow-500" />}
                        </div>
                        <Badge className={`${creator.rank === 1 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-primary'} text-white mt-1`}>
                          {creator.badge}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          Specializes in {creator.specialty}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-8 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">{creator.points.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Points</div>
                      </div>
                      <div>
                        <div className="text-lg font-medium">{creator.weeklyPosts}</div>
                        <div className="text-sm text-muted-foreground">This Week</div>
                      </div>
                      <div>
                        <div className="text-lg font-medium">{creator.totalLikes.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Total Likes</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Categories</span>
            </h2>
            <p className="text-muted-foreground">Different ways to earn points and climb the ranks</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card 
                key={category.name}
                className="glassmorphism hover:scale-105 transition-all duration-300 text-center cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              This Week's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Hottest</span> Posts
            </h2>
            <p className="text-muted-foreground">The most liked and viewed content this week</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="glassmorphism hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                      #{index + 1} {post.type}
                    </Badge>
                    {index === 0 && (
                      <div className="easter-egg-hint" title="🌟 Top post secret!">
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-muted-foreground">by</span>
                    <span className="font-medium text-primary">{post.creator}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{post.movie}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
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
            Ready to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Compete</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of creators, share your movie passion, and climb to the top of the leaderboard.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
              onClick={() => onNavigate('movies')}
            >
              <Trophy className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glassmorphism"
              onClick={() => onNavigate('home')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}