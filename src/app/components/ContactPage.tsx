import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

import { 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Github,
  Star,
  Sparkles,
  HelpCircle,
  Bug,
  Lightbulb
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: ''
    });
    alert('Message sent! We\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with technical issues or general inquiries',
      contact: 'support@cinemyth.com',
      response: 'Within 24 hours',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help from our community team',
      contact: 'Available in app',
      response: 'Immediate',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Twitter,
      title: 'Social Media',
      description: 'Follow us for updates and quick responses',
      contact: '@cinemyth',
      response: 'Within hours',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: 'Location',
      info: 'Los Angeles, CA',
      details: 'Heart of the entertainment industry',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: '9 AM - 6 PM PST',
      details: 'Monday through Friday',
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-400' },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: HelpCircle },
    { value: 'bug', label: 'Bug Report', icon: Bug },
    { value: 'feature', label: 'Feature Request', icon: Lightbulb },
    { value: 'partnership', label: 'Partnership', icon: Star },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTY1NTkwMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern office building"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Easter Egg */}
            <div className="absolute -top-8 right-0 easter-egg-hint" title="We're always listening...">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Have questions, suggestions, or just want to say hello? Our team is here to help 
              you make the most of your Cinemyth experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Preferred</span> Method
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer multiple ways to connect with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title} 
                className="group hover:scale-105 transition-all duration-300 glassmorphism hover:shadow-2xl hover:shadow-primary/20 text-center"
              >
                <CardHeader>
                  <div className="relative">
                    {index === 1 && (
                      <div className="absolute -top-2 -right-2 easter-egg-hint" title="Instant magic awaits...">
                        <Star className="w-4 h-4 text-yellow-400 animate-spin" />
                      </div>
                    )}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center mb-4 mx-auto`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                      {method.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {method.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">{method.contact}</p>
                    <p className="text-sm text-muted-foreground">Response: {method.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4">
                  Send us a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Message</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="glassmorphism">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="glassmorphism"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="glassmorphism"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type">Inquiry Type</Label>
                      <Select onValueChange={(value) => handleInputChange('type', value)}>
                        <SelectTrigger className="glassmorphism">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center space-x-2">
                                <type.icon className="w-4 h-4" />
                                <span>{type.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your message"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        required
                        className="glassmorphism"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        className="glassmorphism"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Social */}
            <div className="space-y-8">
              {/* Office Information */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Office <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Information</span>
                </h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="relative">
                        {index === 0 && (
                          <div className="absolute -top-1 -right-1 easter-egg-hint" title="Where the magic happens...">
                            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                          </div>
                        )}
                        <div className="w-12 h-12 glassmorphism rounded-full flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        <p className="text-primary font-medium">{info.info}</p>
                        <p className="text-muted-foreground text-sm">{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  Follow <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Us</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Stay updated with the latest news, features, and community highlights.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="lg"
                      className={`glassmorphism hover:scale-110 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="sr-only">{social.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* FAQ Link */}
              <Card className="glassmorphism">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Need Quick Answers?</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Check out our FAQ section for common questions.
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onNavigate('about')}
                      >
                        View FAQ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute -top-6 -right-6 easter-egg-hint" title="Your feedback shapes our future...">
              <Sparkles className="w-8 h-8 text-secondary animate-bounce" />
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              Have a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Great</span> Idea?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for ways to improve Cinemyth. Share your suggestions 
              and help shape the future of movie fan communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform duration-300"
              >
                <Lightbulb className="mr-2 h-5 w-5" />
                Share Your Idea
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glassmorphism"
                onClick={() => onNavigate('about')}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}