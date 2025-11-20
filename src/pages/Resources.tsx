import { resources, studentDeals, diningApps } from "@/data/locations";
import { ExternalLink, Users, Calendar, MapPin, Phone, Mail, UtensilsCrossed, Smartphone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import foodaIcon from "@/assets/apps/fooda-icon.png";
import grubhubIcon from "@/assets/apps/grubhub-icon.png";

export default function Resources() {
  const beachPantry = resources.find(r => r.id === "beach-pantry");
  
  const appIcons: { [key: string]: string } = {
    "fooda": foodaIcon,
    "grubhub": grubhubIcon
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container px-4 py-12 max-w-7xl mx-auto">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Campus Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about dining assistance, discounts, and food programs at CSULB
          </p>
        </div>

        {beachPantry && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
              Food Pantry
            </h2>
            
            <Card className="border-2 shadow-elevated">
              <CardHeader className="pb-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="text-3xl mb-2">{beachPantry.name}</CardTitle>
                <CardDescription className="text-lg">
                  {beachPantry.description}
                </CardDescription>
                <Button asChild size="lg" className="w-fit mt-4">
                  <a href={beachPantry.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                    Visit Website <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold mb-3">In-Pantry Hours</h3>
                        <Badge variant="secondary" className="mb-3">No appointment needed</Badge>
                        <div className="space-y-2 text-base">
                          <p><span className="font-semibold">Mon-Fri:</span> 10am-3pm & 5-7pm</p>
                          <p><span className="font-semibold">Saturday:</span> 10am-3pm</p>
                          <p><span className="font-semibold">Sunday:</span> Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-base text-muted-foreground">
                          Student Health Services (SHS) Building, Room 115-A
                          <br />
                          <span className="text-sm">(1st floor, next to G3 Parking Lot)</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-accent/10 p-4 rounded-lg border">
                      <p className="font-semibold mb-2 text-base">Usage Limits</p>
                      <ul className="space-y-1 text-base">
                        <li>• Up to 3 visits per week</li>
                        <li>• Up to 5 food items per visit</li>
                      </ul>
                      <p className="text-sm text-muted-foreground italic mt-2">
                        Please bring your own bag
                      </p>
                    </div>
                  </div>

                  
                  <div className="space-y-6">
                    <div className="bg-card border-2 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3">Curbside Pick-Up</h3>
                      <Badge variant="outline" className="mb-3">By appointment only</Badge>
                      <div className="space-y-3 text-base">
                        <div>
                          <p className="font-semibold mb-1">Available Times:</p>
                          <p className="text-muted-foreground">Friday: 2-4pm</p>
                          <p className="text-muted-foreground">Saturday: 12-1pm</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-2">How to Register:</p>
                          <ol className="space-y-1 text-muted-foreground list-decimal list-inside text-sm">
                            <li>Email asi-pantry@csulb.edu</li>
                            <li>Build your online cart</li>
                            <li>Schedule pick-up appointment</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border-2 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold mb-3">Mobile Pantry</h3>
                      <p className="text-base text-muted-foreground mb-3">
                        Free fresh produce and pantry staples at various campus locations
                      </p>
                      <ul className="space-y-2 text-base">
                        <li>✓ No registration required</li>
                        <li>✓ Check Events & Orgs page for dates</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-base">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:asi-pantry@csulb.edu" className="text-primary hover:underline">
                          asi-pantry@csulb.edu
                        </a>
                      </p>
                      <p className="flex items-center gap-2 text-base">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <a href="https://www.instagram.com/csulbpantry/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          @csulbpantry
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* CalFresh Program (Omitted for brevity) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <CreditCard className="h-8 w-8 text-primary" />
            CalFresh Program
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            
            <Card className="border-2">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="text-2xl">Schedule an Appointment</CardTitle>
                <CardDescription className="text-base">
                  Meet with a CalFresh Assister to get started today
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="bg-accent/10 p-5 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Office Location
                  </h3>
                  <p className="text-base mb-4">University Student Union (USU) 112</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold mb-1">Office Hours</p>
                      <p className="text-base">Monday - Friday</p>
                      <p className="text-base">8:00 AM - 5:00 PM</p>
                    </div>
                    
                    <div className="pt-3 border-t space-y-2">
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:562-317-1492" className="text-primary hover:underline">562-317-1492</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:calfresh@csulb.edu" className="text-primary hover:underline">calfresh@csulb.edu</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-primary" />
                        <a href="https://csulb.edu/calfresh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          csulb.edu/calfresh
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                >
                  <a 
                    href="https://www.csulb.edu/sites/default/files/2022/documents/CalFresh%20Application%20Process%20Resource%20Guide%20-%20MASTER_accessible.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    View Application Process Guide <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            
            <Card className="border-2">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-accent/5">
                <CardTitle className="text-2xl">Student Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Basic Requirements</h4>
                  <div className="space-y-2 text-base">
                    <p>✓ Age 18-49 years old</p>
                    <p>✓ Enrolled in 6+ units</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Plus ONE of the following:</h4>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li>• Employed 20+ hours/week (80+ hours/month)</li>
                    <li>• Awarded Federal/State Work Study</li>
                    <li>• Awarded Cal Grant A or B</li>
                    <li>• Participate in LPIE program</li>
                    <li>• Single parent/guardian of child under 12</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-5 rounded-lg border">
                  <h4 className="font-semibold text-lg mb-3">Required Documents</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    After completing your application, submit these documents for verification:
                  </p>
                  <ul className="space-y-1 text-base">
                    <li>• Copy of your ID</li>
                    <li>• Current class schedule</li>
                    <li>• Financial Aid documents</li>
                    <li>• Income verification</li>
                    <li>• Expense documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Student Deals & Apps */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Student Discounts & Apps
          </h2>

          {/* Campus Discounts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Campus Discounts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {studentDeals.map((deal) => (
                <Card key={deal.id} className="border-2 hover:shadow-elevated transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl">{deal.name}</CardTitle>
                    <CardDescription className="text-base">
                      {deal.id === 'outpost-discount' 
                        ? 'Show your student ID for tax off on all purchases'
                        : deal.description
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      asChild 
                      variant="default" 
                      size="lg" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                    >
                      <a href="https://map.concept3d.com/?id=1314#!m/420437?share" className="gap-2">
                        View Details <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dining Apps */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Dining Applications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {diningApps.map((app) => (
                <Card 
                  key={app.id} 
                  className="border-2 hover:shadow-elevated transition-all flex flex-col" // Added flex-col for button alignment
                >
                  <CardHeader>
                    {appIcons[app.id] && (
                      <div className="mb-4">
                        <img 
                          src={appIcons[app.id]} 
                          alt={`${app.name} icon`} 
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl">{app.name}</CardTitle>
                    <CardDescription className="text-base">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-grow items-end"> {/* Added flex-grow items-end for button alignment */}
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-black"
                    >
                      <a 
                        href={
                          app.id === 'grubhub'
                            ? 'https://www.grubhub.com/about/campus' // FIX: Updated Grubhub link
                            : app.id === 'beach-bites'
                            ? 'https://www.csulb.edu/sites/default/files/2024/documents/dsa_BN_Beach_Bites_Tutorial_PDF_ADA.pdf'
                            : app.link
                        } 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="gap-2"
                      >
                        {app.id === 'beach-bites' ? 'Learn More' : 'View App'}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}