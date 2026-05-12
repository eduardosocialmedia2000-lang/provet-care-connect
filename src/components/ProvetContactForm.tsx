import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ScrollReveal from "@/components/ScrollReveal";

const WHATSAPP_NUMBER = "5544991232555";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome completo"),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe um telefone válido com DDD")
    .regex(/^[\d\s()\-+]+$/, "Use apenas números e símbolos de telefone"),
  email: z.string().trim().email("E-mail inválido"),
  motivo: z.string().trim().min(5, "Descreva brevemente o motivo do contato"),
});

type FormValues = z.infer<typeof schema>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const onlyDigits = (v: string) => v.replace(/\D/g, "");

const splitName = (full: string) => {
  const parts = full.trim().split(/\s+/);
  return {
    first: parts[0] ?? "",
    last: parts.length > 1 ? parts.slice(1).join(" ") : "",
  };
};

const ProvetContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { nome: "", telefone: "", email: "", motivo: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);

    const { first, last } = splitName(values.nome);
    const phoneDigits = onlyDigits(values.telefone);
    const phoneE164 = phoneDigits.startsWith("55")
      ? `+${phoneDigits}`
      : `+55${phoneDigits}`;
    const emailNorm = values.email.trim().toLowerCase();

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit_lead",
      lead_source: "form_provetmaringa",
      enhanced_conversion_data: {
        email: emailNorm,
        phone_number: phoneE164,
        first_name: first,
        last_name: last,
        address: { country: "BR" },
      },
    });

    const mensagem =
      `Olá, sou ${values.nome.trim()} (${values.telefone.trim()}, ${emailNorm}). ` +
      `Gostaria de agendar um atendimento na ProVet. Motivo: ${values.motivo.trim()}.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    form.reset();
    setSubmitting(false);
  };

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-3 mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Prefere que a gente entre em contato?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Deixe seus dados e o motivo do contato. Vamos te direcionar pelo
              WhatsApp com tudo pronto para a recepção te atender.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={120}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
              noValidate
            >
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        autoComplete="name"
                        placeholder="Como podemos te chamar?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp / Telefone</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="(44) 99999-9999"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="seu@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="motivo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Motivo do contato</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        placeholder="Ex.: agendar consulta, dúvida sobre vacina, viagem com pet, microchip…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="cta"
                size="lg"
                disabled={submitting}
                className="w-full gap-2 transition-transform hover:scale-[1.02] active:scale-95"
              >
                {submitting ? (
                  <>
                    <Send className="h-5 w-5 animate-pulse" />
                    Abrindo WhatsApp…
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5" />
                    Enviar e abrir WhatsApp
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você autoriza a ProVet a entrar em contato pelo
                WhatsApp/telefone informado.
              </p>
            </form>
          </Form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProvetContactForm;
