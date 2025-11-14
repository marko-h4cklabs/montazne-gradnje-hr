import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Prednosti montažnih garaža u 2025. godini",
    preview: "Otkrijte zašto su montažne garaže sve popularniji izbor kod vlasnika nekretnina. Brza montaža, dostupne cijene i vrhunska kvaliteta su samo neke od prednosti...",
    image: "/lovable-uploads/fcc31405-5071-46a1-ac40-b422991656a3.png",
    date: "15. siječnja 2024",
    category: "Garaže"
  },
  {
    id: 2,
    title: "Kako odabrati idealnu montažnu kuću za svoju obitelj",
    preview: "Planiranje izgradnje montažne kuće zahtijeva pažljivo razmatranje brojnih faktora. U ovom članku donosimo kompletni vodič kroz proces odabira...",
    image: "/lovable-uploads/624af0ec-f1aa-481d-bae5-9b3145b561c5.png",
    date: "10. siječnja 2024",
    category: "Kuće"
  },
  {
    id: 3,
    title: "Održavanje montažnih hala: Savjeti stručnjaka",
    preview: "Pravilno održavanje industrijskih montažnih hala ključno je za njihovu dugotrajnost. Saznajte koje korake poduzeti za očuvanje vaše investicije...",
    image: "/lovable-uploads/fcc31405-5071-46a1-ac40-b422991656a3.png",
    date: "5. siječnja 2024",
    category: "Hale"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-[100px] pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Beriko Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Najnovije vijesti, savjeti i trendovi iz svijeta montažnih objekata
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base line-clamp-3">
                    {post.preview}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-primary font-semibold group-hover:underline">
                      Pročitaj više →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
