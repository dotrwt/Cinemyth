import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Users, 
  Calendar,
  TrendingUp,
  Sparkles,
  Play,
  Heart
} from 'lucide-react';

interface MoviesPageProps {
  onNavigate: (page: string) => void;
}

export function MoviesPage({ onNavigate }: MoviesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [genreFilter, setGenreFilter] = useState('all');
  const [yearFilter, setYearFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const movies = [
    {
      id: 1,
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      director: 'Christopher Nolan',
      rating: 9.0,
      posts: 3245,
      fans: 24680,
      image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 2,
      title: 'Avengers: Endgame',
      year: 2019,
      genre: 'Action',
      director: 'Russo Brothers',
      rating: 8.4,
      posts: 4156,
      fans: 32580,
      image: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      year: 1994,
      genre: 'Crime',
      director: 'Quentin Tarantino',
      rating: 8.9,
      posts: 1923,
      fans: 18750,
      image: 'https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 4,
      title: 'Inception',
      year: 2010,
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      rating: 8.8,
      posts: 2198,
      fans: 22340,
      image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 5,
      title: 'The Matrix',
      year: 1999,
      genre: 'Sci-Fi',
      director: 'The Wachowskis',
      rating: 8.7,
      posts: 1687,
      fans: 19430,
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 6,
      title: 'Goodfellas',
      year: 1990,
      genre: 'Crime',
      director: 'Martin Scorsese',
      rating: 8.7,
      posts: 1234,
      fans: 15680,
      image: 'https://image.tmdb.org/t/p/w500/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 7,
      title: 'Interstellar',
      year: 2014,
      genre: 'Sci-Fi',
      director: 'Christopher Nolan',
      rating: 8.6,
      posts: 2847,
      fans: 21890,
      image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 8,
      title: 'Fight Club',
      year: 1999,
      genre: 'Drama',
      director: 'David Fincher',
      rating: 8.8,
      posts: 1567,
      fans: 17230,
      image: 'https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 9,
      title: 'Spider-Man: No Way Home',
      year: 2021,
      genre: 'Action',
      director: 'Jon Watts',
      rating: 8.2,
      posts: 3789,
      fans: 28950,
      image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 10,
      title: 'Parasite',
      year: 2019,
      genre: 'Thriller',
      director: 'Bong Joon-ho',
      rating: 8.5,
      posts: 1456,
      fans: 14760,
      image: 'https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trending: true,
      featured: false,
    },
    {
      id: 11,
      title: 'The Godfather',
      year: 1972,
      genre: 'Crime',
      director: 'Francis Ford Coppola',
      rating: 9.2,
      posts: 2134,
      fans: 23450,
      image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vju7enQxpeqYa9oF1l.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 12,
      title: 'Top Gun: Maverick',
      year: 2022,
      genre: 'Action',
      director: 'Joseph Kosinski',
      rating: 8.3,
      posts: 2678,
      fans: 19840,
      image: 'https://image.tmdb.org/t/p/w500/jMLiTgCo0vXJuwMzZGoNOUPfuj7.jpg',
      trending: true,
      featured: false,
    },
    {
      id: 13,
      title: 'Dune',
      year: 2021,
      genre: 'Sci-Fi',
      director: 'Denis Villeneuve',
      rating: 8.0,
      posts: 2345,
      fans: 18650,
      image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      trending: true,
      featured: false,
    },
    {
      id: 14,
      title: 'Joker',
      year: 2019,
      genre: 'Drama',
      director: 'Todd Phillips',
      rating: 8.4,
      posts: 2890,
      fans: 21340,
      image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 15,
      title: 'The Wolf of Wall Street',
      year: 2013,
      genre: 'Drama',
      director: 'Martin Scorsese',
      rating: 8.2,
      posts: 1678,
      fans: 16890,
      image: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 16,
      title: 'Titanic',
      year: 1997,
      genre: 'Romance',
      director: 'James Cameron',
      rating: 7.9,
      posts: 1956,
      fans: 22130,
      image: 'https://image.tmdb.org/t/p/w500/rzdPqYx7Um4FUZeD8wpXqjAUcEm.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 17,
      title: 'Shrek',
      year: 2001,
      genre: 'Comedy',
      director: 'Andrew Adamson',
      rating: 7.9,
      posts: 2456,
      fans: 18760,
      image: 'https://image.tmdb.org/t/p/w500/eEQ4JieKyLBRRSRnRGuPlxp7qiS.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 18,
      title: 'Avatar',
      year: 2009,
      genre: 'Sci-Fi',
      director: 'James Cameron',
      rating: 7.9,
      posts: 2123,
      fans: 19450,
      image: 'https://image.tmdb.org/t/p/w500/g9oEopuLdvVZNZw54vPC2fe6tNv.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 19,
      title: 'Black Panther',
      year: 2018,
      genre: 'Action',
      director: 'Ryan Coogler',
      rating: 7.3,
      posts: 2567,
      fans: 20340,
      image: 'https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_FMjpg_UX1000_.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 20,
      title: 'The Shawshank Redemption',
      year: 1994,
      genre: 'Drama',
      director: 'Frank Darabont',
      rating: 9.3,
      posts: 1789,
      fans: 21890,
      image: 'https://image.tmdb.org/t/p/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
      trending: false,
      featured: true,
    },
    {
      id: 21,
      title: 'Forrest Gump',
      year: 1994,
      genre: 'Drama',
      director: 'Robert Zemeckis',
      rating: 8.8,
      posts: 1456,
      fans: 18920,
      image: 'https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      trending: false,
      featured: false,
    },
    {
      id: 22,
      title: 'Oppenheimer',
      year: 2023,
      genre: 'Drama',
      director: 'Christopher Nolan',
      rating: 8.3,
      posts: 3456,
      fans: 25670,
      image: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 23,
      title: 'Barbie',
      year: 2023,
      genre: 'Comedy',
      director: 'Greta Gerwig',
      rating: 6.8,
      posts: 4567,
      fans: 31240,
      image: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      trending: true,
      featured: true,
    },
    {
      id: 24,
      title: 'The Batman',
      year: 2022,
      genre: 'Action',
      director: 'Matt Reeves',
      rating: 7.8,
      posts: 2789,
      fans: 22450,
      image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
      trending: true,
      featured: false,
    }
  ];

  const genres = ['All', 'Action', 'Sci-Fi', 'Crime', 'Drama', 'Comedy', 'Horror', 'Romance', 'Thriller'];
  const years = ['All', '2020s', '2010s', '2000s', '1990s', '1980s', 'Earlier'];

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = genreFilter === 'all' || movie.genre.toLowerCase() === genreFilter.toLowerCase();
    const matchesYear = yearFilter === 'all' || 
                       (yearFilter === '2020s' && movie.year >= 2020) ||
                       (yearFilter === '2010s' && movie.year >= 2010 && movie.year < 2020) ||
                       (yearFilter === '2000s' && movie.year >= 2000 && movie.year < 2010) ||
                       (yearFilter === '1990s' && movie.year >= 1990 && movie.year < 2000) ||
                       (yearFilter === '1980s' && movie.year >= 1980 && movie.year < 1990) ||
                       (yearFilter === 'earlier' && movie.year < 1980);
    
    return matchesSearch && matchesGenre && matchesYear;
  });

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.fans - a.fans;
      case 'rating':
        return b.rating - a.rating;
      case 'year':
        return b.year - a.year;
      case 'posts':
        return b.posts - a.posts;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-background via-card/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            {/* Easter Egg */}
            <div className="absolute -top-4 right-1/3 easter-egg" title="A hidden gem awaits...">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Explore <span className="gradient-text">Movies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dive into thousands of movies with fan-created content, reviews, and behind-the-scenes facts. 
              Join communities of passionate movie lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search movies or directors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glassmorphic"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={genreFilter} onValueChange={setGenreFilter}>
                <SelectTrigger className="w-32 glassmorphic">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map(genre => (
                    <SelectItem key={genre} value={genre.toLowerCase()}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-32 glassmorphic">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toLowerCase()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 glassmorphic">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                  <SelectItem value="posts">Most Posts</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg glassmorphic">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'gradient-bg' : ''}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'gradient-bg' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-muted-foreground">
            Showing {sortedMovies.length} of {movies.length} movies
          </div>
        </div>
      </section>

      {/* Movies Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedMovies.map((movie, index) => (
                <Card 
                  key={movie.id}
                  className="group hover:scale-105 transition-all duration-300 glassmorphic overflow-hidden cursor-pointer"
                  onClick={() => onNavigate('movie')}
                >
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Overlay with actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="gradient-bg text-white mr-2">
                        <Play className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="glassmorphic text-white">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {movie.trending && (
                        <Badge className="gradient-bg text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {movie.featured && (
                        <Badge variant="outline" className="glassmorphic text-white border-white/30">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Easter Egg on first movie */}
                    {index === 0 && (
                      <div className="absolute bottom-3 right-3 easter-egg" title="Special content here...">
                        <Star className="w-5 h-5 text-yellow-400" />
                      </div>
                    )}

                    {/* Rating */}
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center space-x-1 bg-black/70 rounded-full px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{movie.rating}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {movie.year} • {movie.director}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {movie.genre}
                      </Badge>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{movie.fans.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="w-3 h-3" />
                          <span>{movie.posts}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedMovies.map((movie, index) => (
                <Card 
                  key={movie.id}
                  className="group hover:bg-card/80 transition-all duration-300 glassmorphic cursor-pointer"
                  onClick={() => onNavigate('movie')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      <div className="relative">
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="w-16 h-24 object-cover rounded"
                        />
                        {index === 0 && (
                          <div className="absolute -top-2 -right-2 easter-egg">
                            <Sparkles className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                            {movie.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span>{movie.rating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-3">
                          {movie.year} • {movie.director} • {movie.genre}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {movie.trending && (
                              <Badge className="gradient-bg text-white">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            {movie.featured && (
                              <Badge variant="outline">
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{movie.fans.toLocaleString()} fans</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Play className="w-4 h-4" />
                              <span>{movie.posts} posts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't see your favorite movie?
          </h2>
          <p className="text-muted-foreground mb-8">
            Request a movie to be added to our database and start building its community.
          </p>
          <Button className="gradient-bg text-white">
            Request a Movie
          </Button>
        </div>
      </section>
    </div>
  );
}