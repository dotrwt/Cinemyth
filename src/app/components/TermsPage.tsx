import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { 
  Shield, 
  FileText, 
  Lock, 
  Users, 
  Eye,
  Cookie,
  Download,
  Mail,
  Clock,
  CheckCircle,
  Star,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
  const [activeTab, setActiveTab] = useState('terms');

  const lastUpdated = 'January 2025';

  const termsHighlights = [
    {
      icon: Users,
      title: 'Community Guidelines',
      description: 'Rules for creating and sharing content respectfully',
    },
    {
      icon: Shield,
      title: 'Content Protection',
      description: 'How we protect your creative work and intellectual property',
    },
    {
      icon: FileText,
      title: 'Usage Rights',
      description: 'What you can and cannot do with Cinemyth content',
    },
  ];

  const privacyHighlights = [
    {
      icon: Lock,
      title: 'Data Security',
      description: 'Industry-standard encryption and security measures',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear information about what data we collect and why',
    },
    {
      icon: Cookie,
      title: 'Cookie Policy',
      description: 'How we use cookies to improve your experience',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMG9mZmljZXxlbnwwfHx8fDE3NTY1NTkwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Legal documents"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Easter Egg */}
            <div className="absolute -top-8 right-0 easter-egg-hint" title="The fine print has secrets too...">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Legal <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Information</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Understanding your rights and responsibilities as part of the Cinemyth community. 
              We believe in transparency and clear communication.
            </p>
            <Badge variant="outline" className="text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: {lastUpdated}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 glassmorphism p-1">
              <TabsTrigger value="terms" className="text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Terms of Service
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Privacy Policy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <div className="space-y-12">
                {/* Terms Overview */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">
                    Terms of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Service</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    These terms govern your use of Cinemyth and outline our mutual rights and responsibilities.
                  </p>
                </div>

                {/* Terms Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {termsHighlights.map((highlight, index) => (
                    <Card 
                      key={highlight.title} 
                      className="group hover:scale-105 transition-all duration-300 glassmorphism text-center"
                    >
                      <CardHeader>
                        <div className="relative">
                          {index === 1 && (
                            <div className="absolute -top-2 -right-2 easter-egg-hint" title="Your work is safe with us...">
                              <Star className="w-4 h-4 text-yellow-400" />
                            </div>
                          )}
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <highlight.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">
                            {highlight.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {highlight.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Terms Sections */}
                <div className="space-y-8">
                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                        1. Acceptance of Terms
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        By accessing and using Cinemyth, you accept and agree to be bound by the terms and provision of this agreement. 
                        If you do not agree to abide by the above, please do not use this service.
                      </p>
                      <p>
                        These terms apply to all users of the platform, including browsers, creators, and contributors of content or other materials.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-blue-400" />
                        2. User Content and Conduct
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        Users are responsible for their content and must ensure it complies with applicable laws and our community guidelines. 
                        Content must be original or properly licensed for use.
                      </p>
                      <p>
                        Prohibited activities include but are not limited to: harassment, spam, copyright infringement, 
                        posting malicious content, or attempting to circumvent security measures.
                      </p>
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-amber-400 mb-1">Fair Use Notice</p>
                            <p className="text-sm">
                              All movie content shared must comply with fair use guidelines. Cinemyth is for fan-created 
                              transformative content and educational purposes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-purple-400" />
                        3. Intellectual Property Rights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        You retain ownership of your original content. By posting on Cinemyth, you grant us a license 
                        to display, distribute, and promote your content within the platform.
                      </p>
                      <p>
                        Cinemyth respects intellectual property rights. We have procedures in place to respond to 
                        claims of copyright infringement in accordance with applicable law.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-green-400" />
                        4. Platform Usage and Limitations
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        Cinemyth is provided "as is" without warranties. We reserve the right to modify, suspend, 
                        or discontinue services with reasonable notice.
                      </p>
                      <p>
                        Usage limits may apply to prevent abuse and ensure fair access for all users. 
                        Commercial use requires separate agreement.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy">
              <div className="space-y-12">
                {/* Privacy Overview */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">
                    Privacy <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Policy</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                  </p>
                </div>

                {/* Privacy Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {privacyHighlights.map((highlight, index) => (
                    <Card 
                      key={highlight.title} 
                      className="group hover:scale-105 transition-all duration-300 glassmorphism text-center"
                    >
                      <CardHeader>
                        <div className="relative">
                          {index === 0 && (
                            <div className="absolute -top-2 -right-2 easter-egg-hint" title="Fort Knox level security...">
                              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                            </div>
                          )}
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <highlight.icon className="w-6 h-6 text-white" />
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors duration-300">
                            {highlight.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground">
                          {highlight.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Privacy Sections */}
                <div className="space-y-8">
                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-blue-400" />
                        Information We Collect
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        We collect information you provide directly (account details, content uploads), 
                        automatically (usage data, device information), and from third parties (social media integrations).
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Personal Information:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Email address</li>
                            <li>• Username</li>
                            <li>• Profile information</li>
                            <li>• Content you create</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Technical Data:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• IP address</li>
                            <li>• Browser type</li>
                            <li>• Device information</li>
                            <li>• Usage analytics</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-green-400" />
                        How We Use Your Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        We use your information to provide services, personalize your experience, communicate with you, 
                        and improve our platform. We do not sell personal information to third parties.
                      </p>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-green-400 mb-1">Data Minimization</p>
                            <p className="text-sm">
                              We only collect data necessary for platform functionality and user experience improvement.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Cookie className="w-5 h-5 mr-2 text-orange-400" />
                        Cookies and Tracking
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        We use cookies and similar technologies to remember your preferences, analyze usage patterns, 
                        and provide personalized content. You can control cookie settings in your browser.
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Cookie Types:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Essential:</strong> Required for basic functionality</li>
                          <li>• <strong>Performance:</strong> Help us understand how you use the site</li>
                          <li>• <strong>Functional:</strong> Remember your preferences</li>
                          <li>• <strong>Marketing:</strong> Deliver relevant content (with your consent)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glassmorphism">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-purple-400" />
                        Your Rights and Controls
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                      <p>
                        You have rights regarding your personal data including access, correction, deletion, 
                        and portability. You can exercise these rights through your account settings or by contacting us.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Your Rights Include:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Access your data</li>
                            <li>• Correct inaccuracies</li>
                            <li>• Delete your account</li>
                            <li>• Export your content</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium text-foreground">Privacy Controls:</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Profile visibility settings</li>
                            <li>• Communication preferences</li>
                            <li>• Data sharing options</li>
                            <li>• Cookie consent management</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact & Download Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glassmorphism text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Questions About Privacy?</h3>
                <p className="text-muted-foreground mb-6">
                  Our privacy team is here to help clarify any concerns you may have.
                </p>
                <Button 
                  variant="outline" 
                  className="glassmorphism"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Privacy Team
                </Button>
              </CardContent>
            </Card>

            <Card className="glassmorphism text-center">
              <CardContent className="p-8">
                <div className="relative">
                  <div className="absolute -top-2 -right-2 easter-egg-hint" title="Even our downloads are special...">
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Download Legal Documents</h3>
                  <p className="text-muted-foreground mb-6">
                    Get PDF copies of our terms and privacy policy for your records.
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" className="glassmorphism" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Terms of Service PDF
                    </Button>
                    <Button variant="outline" className="glassmorphism" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Privacy Policy PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Last Updated Notice */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glassmorphism rounded-lg p-6">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Clock className="w-5 h-5" />
              <span>These documents were last updated in {lastUpdated}</span>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              We'll notify users of significant changes via email and platform announcements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}