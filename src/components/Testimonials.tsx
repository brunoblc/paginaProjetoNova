import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importe suas imagens aqui da pasta src/assets/testimonials/
import depoimento1 from "@/assets/testimonials/depoimento1.png";
import depoimento2 from "@/assets/testimonials/depoimento2.png";
import depoimento3 from "@/assets/testimonials/depoimento3.png";

// Adicione as imagens importadas neste array
const testimonialImages: string[] = [
  depoimento1,
  depoimento2,
  depoimento3,
  // Para adicionar mais: importe a imagem acima e adicione aqui
];

const Testimonials = () => {
  // Se não houver imagens, não renderiza a seção
  if (testimonialImages.length === 0) {
    return null;
  }

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-sm font-medium text-secondary uppercase tracking-wide">Depoimentos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes{" "}
            <span className="text-gradient">dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais de profissionais que transformaram suas carreiras.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={image}
                      alt={`Depoimento ${index + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-card border-border hover:bg-secondary hover:text-white" />
            <CarouselNext className="right-0 bg-card border-border hover:bg-secondary hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
