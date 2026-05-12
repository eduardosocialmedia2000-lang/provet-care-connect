import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const GMN_URL =
  "https://www.google.com/maps/place/Provet+-+Cl%C3%ADnica+Veterin%C3%A1ria/@-23.4471494,-51.9543562,17z/data=!4m6!3m5!1s0x94ecd71dfb5d3acd:0xd743ad212d48c3c4!8m2!3d-23.4471494!4d-51.9543562!16s%2Fg%2F11y2g9v90g";

const reviews = [
  {
    author: "Vinicius Crepaldi",
    when: "há 2 semanas",
    rating: 5,
    text:
      "Meu cachorro estava com vômitos, diarreia e dor. Pesquisei e pedi indicações, conhecemos a ProVet e descobrimos que ele estava com Parvovirose. Foi uma luta, mas ele teve um bom atendimento e se recuperou. Agradeço a toda equipe!",
  },
  {
    author: "Giovanna Pontarola",
    when: "há 2 semanas",
    rating: 5,
    text:
      "A clínica é linda, um espaço acolhedor tanto para o seu pet quanto para você. O Dr. Ulisses é extremamente cuidadoso, conhecedor dos bichinhos, traz segurança e te auxilia em tudo. Você não sente só o seu pet bem cuidado, você também.",
  },
  {
    author: "Aethur Camargo Jacubovski",
    when: "há 2 semanas",
    rating: 5,
    text:
      "Levo meus dois goldens para atendimento com o Dr. Ulisses desde as primeiras vacinas. A equipe sempre me atendeu com muito carinho e com qualidade nos tratamentos. Recomendo.",
  },
  {
    author: "fabiana saenger",
    when: "há 1 semana",
    rating: 5,
    text:
      "Atendimento, qualidade, cuidado e atenção! Dr. Nobili é excelente, cuida dos meus pets há muitos anos!",
  },
  {
    author: "Pina Souza",
    when: "há 2 semanas",
    rating: 5,
    text:
      "Excelente, muito competentes e amorosos. Amei o atendimento. Indico com maior certeza! 👏",
  },
  {
    author: "Suzi Franceschi",
    when: "há 2 semanas",
    rating: 5,
    text: "Ótimo atendimento e excelentes profissionais. Super indico!",
  },
  {
    author: "isabella anjos",
    when: "há 2 semanas",
    rating: 5,
    text:
      "Ótima! Recomendo super. Pessoal super atencioso e interessado em cuidar do seu pet.",
  },
  {
    author: "Lucas Fancelli",
    when: "há 1 semana",
    rating: 5,
    text: "Ótimo atendimento e cuidados com o animal.",
  },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
      fill="#EA4335"
    />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const ProvetReviews = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api || paused) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [api, paused]);

  return (
  <section
    className="bg-muted py-16 md:py-20"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
  >
    <div className="container mx-auto px-4">
      <ScrollReveal animation="fade-up">
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            O que dizem sobre a ProVet
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <GoogleLogo />
            <Stars rating={5} />
            <span className="font-semibold text-foreground">4,9</span>
            <span>em 28 avaliações no Google</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={120}>
        <Carousel
          opts={{ loop: true, align: "start" }}
          setApi={setApi}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {reviews.map((r, i) => (
              <CarouselItem
                key={i}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-7 w-7 text-primary/30 mb-3" />
                    <p className="text-foreground/90 leading-relaxed text-sm mb-4 flex-1">
                      {r.text}
                    </p>
                    <div className="border-t border-border pt-4 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {r.author}
                        </p>
                        <p className="text-muted-foreground text-xs">{r.when}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Stars rating={r.rating} />
                        <div className="flex items-center gap-1 text-muted-foreground text-[10px]">
                          <GoogleLogo />
                          <span>Google</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-2 md:-left-12" />
          <CarouselNext className="hidden md:flex -right-2 md:-right-12" />
        </Carousel>
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={240}>
        <div className="text-center mt-8">
          <a
            href={GMN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors underline underline-offset-4"
          >
            <GoogleLogo />
            Ver todas as avaliações no Google →
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
  );
};

export default ProvetReviews;
