import React from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

import {
  Play,
  Trophy,
  Search,
  TrendingUp,
  Users,
  Star,
  Edit,
  MessageSquare,
  FileText,
  Smile,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Play,
      title: "Infinite Shorts Feed",
      description:
        "Endless stream of fan-created movie edits, highlights, and creative content.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "Weekly Leaderboard",
      description:
        "Compete with creators worldwide and climb the ranks to become a movie legend.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Search,
      title: "Dialogue Search Bar",
      description:
        "Find any movie scene by searching for memorable quotes and dialogues.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ];

  const trendingMovies = [
    {
      title: "Interstellar",
      year: "2014",
      genre: "Sci-Fi",
      posts: 2847,
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trending: true,
    },
    {
      title: "The Dark Knight",
      year: "2008",
      genre: "Action",
      posts: 3245,
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      trending: true,
    },
    {
      title: "Inception",
      year: "2010",
      genre: "Thriller",
      posts: 2198,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      trending: true,
    },
    {
      title: "Avengers: Endgame",
      year: "2019",
      genre: "Action",
      posts: 4156,
      image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
      trending: true,
    },
    {
      title: "Pulp Fiction",
      year: "1994",
      genre: "Crime",
      posts: 1923,
      image: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trending: false,
    },
    {
      title: "The Matrix",
      year: "1999",
      genre: "Sci-Fi",
      posts: 1687,
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      trending: false,
    },
    {
      title: "Parasite",
      year: "2019",
      genre: "Thriller",
      posts: 1456,
      image: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trending: true,
    },
    {
      title: "Goodfellas",
      year: "1990",
      genre: "Crime",
      posts: 1234,
      image: "https://image.tmdb.org/t/p/w500/hAPeXBdGDGmXRPj4OZZ0poH65Iu.jpg",
      trending: false,
    },
    {
      title: "Spider-Man: No Way Home",
      year: "2021",
      genre: "Action",
      posts: 3789,
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      trending: true,
    }
  ];

  const contentTypes = [
    { icon: Edit, label: "Edits", count: "15.2K" },
    { icon: Smile, label: "Memes", count: "23.8K" },
    { icon: MessageSquare, label: "Reviews", count: "8.9K" },
    { icon: FileText, label: "Facts", count: "12.1K" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
            alt="Cinema background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Easter Egg Star */}
            <div
              className="absolute -top-8 right-0 easter-egg"
              title="Hidden treasure awaits..."
            >
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Where{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Hollywood
              </span>{" "}
              Fans Create Magic
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the ultimate community for movie enthusiasts.
              Create edits, share memes, write reviews, discover
              hidden facts, and compete with creators worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate("movies")}
              >
                <Play className="mr-2 h-5 w-5" />
                Explore Movies
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glassmorphism hover:bg-white/10"
                onClick={() => onNavigate("leaderboard")}
              >
                <Trophy className="mr-2 h-5 w-5" />
                View Leaderboard
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {contentTypes.map((type) => (
                <div
                  key={type.label}
                  className="flex items-center space-x-2"
                >
                  <type.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    {type.count}
                  </span>
                  <span className="text-muted-foreground">
                    {type.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Platform{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to express your love for
              movies and connect with fellow fans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group hover:scale-105 transition-all duration-300 glassmorphism hover:shadow-2xl hover:shadow-primary/20"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Trending
                </span>{" "}
                Movies
              </h2>
              <p className="text-xl text-muted-foreground">
                Most active fan communities this week
              </p>
            </div>
            <Button
              variant="outline"
              className="glassmorphism"
              onClick={() => onNavigate("movies")}
            >
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trendingMovies.map((movie, index) => (
              <Card
                key={movie.title}
                className="group hover:scale-105 transition-all duration-300 glassmorphism overflow-hidden cursor-pointer"
                onClick={() => onNavigate("movie")}
              >
                <div className="relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full aspect-[2/3] object-cover animate-fade-in"
                  />
                  {movie.trending && (
                    <Badge className="absolute top-3 right-3 bg-gradient-to-r from-primary to-secondary text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                  {index === 0 && (
                    <div
                      className="absolute bottom-3 left-3 easter-egg"
                      title="Something special here..."
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold group-hover:text-primary transition-colors duration-300">
                      {movie.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {movie.year}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="text-xs"
                    >
                      {movie.genre}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {movie.posts.toLocaleString()} posts
                      </span>
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
          <div className="relative">
            <div
              className="absolute -top-6 -right-6 easter-egg"
              title="Ready to discover more?"
            >
              <Sparkles className="w-8 h-8 text-secondary animate-bounce" />
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Community
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start creating content, discovering easter eggs,
              and climbing the leaderboard. Your movie journey
              begins here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate("movies")}
              >
                Start Creating
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glassmorphism"
                onClick={() => onNavigate("easter-eggs")}
              >
                <Star className="mr-2 h-5 w-5" />
                Hunt Easter Eggs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}