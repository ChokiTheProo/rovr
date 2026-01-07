import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  icon: LucideIcon;
  title: string;
  titleHighlight: string;
  lastUpdate: string;
  accentColor?: "primary" | "accent";
  children: React.ReactNode;
  relatedLinks?: {
    label: string;
    href: string;
  }[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const LegalPageLayout = ({
  icon: Icon,
  title,
  titleHighlight,
  lastUpdate,
  accentColor = "primary",
  children,
  relatedLinks
}: LegalPageLayoutProps) => {
  const colorClasses = {
    primary: {
      iconBg: "bg-primary/20 border-primary/50",
      iconText: "text-primary",
      blob: "bg-primary/10"
    },
    accent: {
      iconBg: "bg-accent/20 border-accent/50",
      iconText: "text-accent",
      blob: "bg-accent/10"
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden flex flex-col">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />
        <div className={`absolute top-20 right-0 w-[800px] h-[500px] ${colors.blob} rounded-full blur-[120px] opacity-40`} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <main className="container mx-auto px-6 py-12 pt-32 relative z-10 flex-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div 
              className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${colors.iconBg} border mb-8 shadow-lg`}
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className={`w-10 h-10 ${colors.iconText}`} />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              {title}{" "}
              <span className="text-gradient bg-clip-text">{titleHighlight}</span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <span className="px-4 py-2 rounded-full bg-muted/50 text-sm font-medium">
                {lastUpdate}
              </span>
            </div>

            {/* Related Links */}
            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {relatedLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            {children}
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export { LegalPageLayout, containerVariants, itemVariants };
