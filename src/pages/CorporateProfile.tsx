import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Globe, Target, Building2, MapPin } from "lucide-react";

const teamMembers = [
  {
    name: "Hendrik J. Lamprecht",
    title: "Founder, Chairman & Group CEO",
    bio: "A seasoned business leader with over 46 years of success across global energy and financial sectors. Hendrik leverages deep expertise in oil and gas trading, vessel chartering, and natural resources to drive organizational growth. His entrepreneurial spirit and multi-industry acuity—spanning mining, financial services, real estate development, and international wine distribution—make him a highly effective leader capable of creating sustainable value in a dynamic global economy.",
  },
  {
    name: "Christian C. Morton Jr.",
    title: "Group COO",
    bio: "An executive leader specializing in global operational management across energy, infrastructure, and mineral sectors. Christian excels at streamlining complex processes and integrating technology to achieve high-level business and financial objectives. With deep expertise in oil and gas design, crude trading, and renewable energy development, he drives multi-industry success through strategic operational development and senior-level international relationships.",
  },
  {
    name: "John H. Bolin",
    title: "Director, Storage & Wholesale",
    bio: "Bringing over 35 years of global petroleum experience, John specializes in engineering, project management, and well-site supervision across construction, production, and deep-water operations. His technical expertise spans complex drilling, completions, well testing, coil tubing, and H₂S management. He is also skilled in maritime surveying, vessel repair, and strategic development of pipeline and platform infrastructure.",
  },
  {
    name: "Jacob Verghese",
    title: "Chief Procurement Officer",
    bio: "A seasoned professional with over a decade of experience in oil and gas, specializing in global procurement and logistics since 2010. Jacob has spearheaded operational expansion and crude oil procurement throughout LATAM markets, with extensive experience sourcing critical drilling materials and managing high-volume fuel supply for the marine and aviation industries. His strategic insights ensure efficient and timely delivery of essential energy resources.",
  },
  {
    name: "Kenia Del Risco",
    title: "Director, Business Development",
    bio: "With over 15 years of experience in fuel industry finance, wholesale operations, and real estate development, Kenia brings a multidisciplinary strategic edge. She specializes in managing complex corporate mergers, acquisitions, and divestments, while excelling in optimizing refinery and fleet logistics for petroleum products. Her expertise extends to multi-site retail management, franchise development, and strategic fuel procurement.",
  },
  {
    name: "Kevin Lee",
    title: "Commodity Marketing Director",
    bio: "A versatile strategist with over 40 years of experience spanning international project management, ICT policy, and oil brokerage. Kevin holds an MBA in Project Management and brings 20 years of mastery in oil brokerage. His career includes directing large-scale construction contracts in Saudi Arabia, managing national ICT networks for the South Korean government, and co-founding tech startups in Singapore and Indonesia.",
  },
  {
    name: "Derick Smith",
    title: "Chief Information Officer",
    bio: "Based in the UAE and Europe, Derick directs strategic business growth initiatives throughout the MENA region. He implements mission-critical AI and real-time data systems to ensure high-fidelity service and operational adaptability, while expertly managing multi-disciplinary teams across five continents. A dedicated environmental advocate, he ensures the group's activities align with global best practices and responsible corporate citizenship.",
  },
];

const CorporateProfile = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 hero-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Corporate Profile</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            A vertically integrated commodities supply organization delivering excellence across global energy markets.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              Our Vision
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              To be a global leader in the energy sector, renowned for our unwavering commitment to excellence, transparency, and innovation. We strive to exceed our clients' expectations by providing them with tailored solutions, timely execution, and superior customer service. We aim to create sustainable value for our stakeholders and to be a responsible corporate citizen, making a positive impact on the environment and communities where we operate.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Who We Are & What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bento-item">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
                <Globe className="w-4 h-4" />
                Who We Are
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We are a vertically integrated commodities supply organization, with a full services offering comprising quantification, sourcing, pricing and timely delivery to the customer. We have the ability to source and procure oil and gas commodities at the highest international and government levels.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our trading business is carried out in key supply areas around the world including the Gulf, the Black Sea, the Mediterranean, the Middle East, Singapore, Houston and Rotterdam.
              </p>
            </div>
            <div className="bento-item">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold mb-4">
                <Building2 className="w-4 h-4" />
                What We Do
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We facilitate the secure and reliable movement of petroleum commodities between points of supply and points of demand.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {["Source", "Store", "Blend", "Deliver"].map((step, i) => (
                  <div key={step} className="bg-secondary rounded-xl p-4 text-center">
                    <span className="text-xs font-bold text-primary block mb-1">0{i + 1}</span>
                    <span className="font-semibold text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Leadership Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="bento-item flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.title}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Corporate Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Corporate Information
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Locations</h2>
            <p className="text-muted-foreground mb-8">
              Our strategically located offices provide comprehensive support across target regions.
            </p>
            <div className="bento-item mb-8">
              <p className="font-semibold text-foreground">AM Energy G.A. LLC</p>
              <p className="text-sm text-muted-foreground">Company Reg. # 25045311 &nbsp;|&nbsp; EIN: 33-3900734</p>
              <p className="text-sm text-muted-foreground mt-2">8735 Dunwoody Place, Ste 6, Atlanta, GA 30350, USA</p>
              <p className="text-sm text-muted-foreground">PO Box 90, Ellenton, FL 34222, USA</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {["Rotterdam", "Greenwich", "Houston", "Atlanta", "Palmetto", "Dubai"].map((city) => (
                <span key={city} className="state-badge">{city}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CorporateProfile;
