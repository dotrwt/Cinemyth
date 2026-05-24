import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

import { 
  Star, 
  Users, 
  Calendar,
  Clock,
  Share,
  Heart,
  MessageSquare,
  Edit,
  Smile,
  FileText,
  Play,
  Upload,
  Sparkles,
  Award,
  TrendingUp,
  Eye,
  ThumbsUp,
  ChevronRight
} from 'lucide-react';

interface MoviePageProps {
  onNavigate: (page: string) => void;
}

export function MoviePage({ onNavigate }: MoviePageProps) {
  const [activeTab, setActiveTab] = useState('edits');

  // Mock movie data
  const movie = {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    runtime: 152,
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
    poster: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    backdrop: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fans: 15620,
    totalPosts: 2847,
    edits: 1245,
    memes: 892,
    reviews: 456,
    facts: 254,
  };

  const contentTabs = [
    { id: 'edits', label: 'Edits', icon: Edit, count: movie.edits },
    { id: 'memes', label: 'Memes', icon: Smile, count: movie.memes },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare, count: movie.reviews },
    { id: 'facts', label: 'Facts', icon: FileText, count: movie.facts },
  ];

  const mockEdits = [
    {
      id: 1,
      title: 'Joker\'s Best Scenes',
      creator: '@batmanfan2008',
      views: 125600,
      likes: 8420,
      duration: '3:42',
      thumbnail: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true,
    },
    {
      id: 2,
      title: 'Batman Action Montage',
      creator: '@darkknightedits',
      views: 89400,
      likes: 5680,
      duration: '2:15',
      thumbnail: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
    {
      id: 3,
      title: 'Harvey Dent Transformation',
      creator: '@gothamstory',
      views: 67200,
      likes: 4320,
      duration: '4:18',
      thumbnail: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false,
    },
  ];

  const mockMemes = [
    {
      id: 1,
      title: 'Why So Serious?',
      creator: '@jokermemes',
      likes: 15420,
      comments: 342,
      image: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      trending: true,
    },
    {
      id: 2,
      title: 'Batman\'s Workout Routine',
      creator: '@batmemes',
      likes: 8920,
      comments: 156,
      image: 'https://images.unsplash.com/photo-1643677841226-d6427625f118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRtYW4lMjBtb3ZpZSUyMHBvc3RlcnxlbnwxfHx8fDE3NTY1NTg3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      trending: false,
    },
  ];

  const mockReviews = [
    {
      id: 1,
      title: 'A Masterpiece of Cinema',
      creator: '@moviecritic2024',
      rating: 10,
      excerpt: 'Christopher Nolan delivers an absolute masterpiece that transcends the superhero genre...',
      likes: 542,
      comments: 89,
      readTime: 8,
    },
    {
      id: 2,
      title: 'Heath Ledger\'s Legendary Performance',
      creator: '@gothamreviews',
      rating: 9.5,
      excerpt: 'Heath Ledger\'s portrayal of the Joker is nothing short of legendary. His performance...',
      likes: 423,
      comments: 67,
      readTime: 5,
    },
  ];

  const mockFacts = [
    {
      id: 1,
      title: 'Heath Ledger\'s Method Acting',
      content: 'Heath Ledger locked himself in a hotel room for a month to prepare for the Joker role, keeping a diary of the character\'s thoughts.',
      likes: 892,
      verified: true,
    },
    {
      id: 2,
      title: 'Real Explosions',
      content: 'The hospital explosion scene used real explosives. The brief pause in the explosion was actually planned and Heath Ledger stayed in character.',
      likes: 756,
      verified: true,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Movie Poster */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                />
                {/* Easter Egg */}
                <div className="absolute -top-4 -right-4 easter-egg" title="Something special about this movie...">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
            </div>

            {/* Movie Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map((g) => (
                  <Badge key={g} variant="outline" className="glassmorphic">
                    {g}
                  </Badge>
                ))}
              </div>

              <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 mb-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{movie.runtime} min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{movie.rating}/10</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{movie.fans.toLocaleString()} fans</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {movie.description}
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <Button className="gradient-bg text-white">
                  <Heart className="mr-2 w-4 h-4" />
                  Follow Movie
                </Button>
                <Button variant="outline" className="glassmorphic">
                  <Share className="mr-2 w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" className="glassmorphic">
                  <Upload className="mr-2 w-4 h-4" />
                  Upload Content
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {contentTabs.map((tab) => (
                  <div key={tab.id} className="text-center glassmorphic rounded-lg p-4">
                    <tab.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-bold text-lg">{tab.count.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">{tab.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 glassmorphic">
              {contentTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center space-x-2 data-[state=active]:gradient-bg"
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <Badge variant="outline" className="ml-1 text-xs">
                    {tab.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Edits Tab */}
            <TabsContent value="edits" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mockEdits.map((edit, index) => (
                  <Card 
                    key={edit.id}
                    className="group hover:scale-105 transition-all duration-300 glassmorphic overflow-hidden cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={edit.thumbnail}
                        alt={edit.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/70 rounded px-2 py-1">
                        <span className="text-white text-sm">{edit.duration}</span>
                      </div>

                      {/* Featured Badge */}
                      {edit.featured && (
                        <Badge className="absolute top-3 left-3 gradient-bg text-white">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}

                      {/* Easter Egg on first edit */}
                      {index === 0 && (
                        <div className="absolute bottom-3 left-3 easter-egg" title="Hidden content unlocked!">
                          <Star className="w-4 h-4 text-yellow-400" />
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {edit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        by {edit.creator}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{edit.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{edit.likes.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Memes Tab */}
            <TabsContent value="memes" className="mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockMemes.map((meme, index) => (
                  <Card 
                    key={meme.id}
                    className="group hover:scale-105 transition-all duration-300 glassmorphic overflow-hidden cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={meme.image}
                        alt={meme.title}
                        className="w-full h-64 object-cover"
                      />
                      
                      {meme.trending && (
                        <Badge className="absolute top-3 right-3 gradient-bg text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}

                      {index === 1 && (
                        <div className="absolute top-3 left-3 easter-egg" title="Meme magic awaits...">
                          <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {meme.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        by {meme.creator}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{meme.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{meme.comments}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {mockReviews.map((review, index) => (
                  <Card 
                    key={review.id}
                    className="group hover:bg-card/80 transition-all duration-300 glassmorphic cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                              {review.title}
                            </h3>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="font-medium">{review.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-3">
                            by {review.creator}
                          </p>
                          
                          <p className="mb-4 leading-relaxed">
                            {review.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{review.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="w-4 h-4" />
                                <span>{review.comments}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{review.readTime} min read</span>
                              </div>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="text-primary">
                              Read Full Review
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>

                        {index === 0 && (
                          <div className="easter-egg" title="Critics' choice...">
                            <Award className="w-5 h-5 text-primary" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Facts Tab */}
            <TabsContent value="facts" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockFacts.map((fact, index) => (
                  <Card 
                    key={fact.id}
                    className="group hover:scale-105 transition-all duration-300 glassmorphic"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {fact.title}
                        </CardTitle>
                        {fact.verified && (
                          <Badge className="gradient-bg text-white">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {fact.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{fact.likes}</span>
                        </div>
                        
                        {index === 1 && (
                          <div className="easter-egg" title="Hidden trivia...">
                            <FileText className="w-4 h-4 text-secondary" />
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Upload CTA */}
          <div className="mt-16 text-center glassmorphic rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Share Your <span className="gradient-text">Creative Content</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Upload your own edits, memes, reviews, or interesting facts about {movie.title}
            </p>
            <Button className="gradient-bg text-white">
              <Upload className="mr-2 w-4 h-4" />
              Upload Content
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}