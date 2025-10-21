import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Building2, Users, Sparkles, CheckCircle2, TrendingUp, Award, Target, Zap } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadB2BSchema, type InsertLeadB2B } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";

const benefits = [
  { icon: TrendingUp, text: "Redução de estresse e burnout" },
  { icon: Zap, text: "Aumento da produtividade da equipe" },
  { icon: Award, text: "Melhora no clima organizacional" },
  { icon: Target, text: "Retenção de talentos" },
  { icon: Users, text: "Pacotes flexíveis e personalizados" },
  { icon: Building2, text: "Atendimento in-company disponível" },
];

export function EmpresasSection() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const form = useForm<InsertLeadB2B>({
    resolver: zodResolver(insertLeadB2BSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      employees: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertLeadB2B) => {
      const response = await apiRequest("POST", "/api/leads/b2b", data);
      return response;
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 6000);
      toast({
        title: "✓ Solicitação enviada com sucesso!",
        description: "Em breve entraremos em contato para apresentar nossa proposta.",
      });
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Erro ao enviar solicitação",
        description: error.message || "Por favor, tente novamente mais tarde.",
      });
    },
  });

  const onSubmit = (data: InsertLeadB2B) => {
    mutation.mutate(data);
  };

  return (
    <section 
      id="empresas" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-[var(--neutral-beige-light)] to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--primary-purple)] rounded-full opacity-[0.02] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--accent-gold)] rounded-full opacity-[0.02] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card shadow-lg mb-6">
            <Building2 className="h-4 w-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-body font-semibold text-[var(--primary-purple)] tracking-wide">
              BEM-ESTAR CORPORATIVO
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display text-[var(--primary-purple)] mb-6">
            Programas para Empresas
          </h2>
          
          <p className="text-xl font-body text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Invista no bem-estar da sua equipe com soluções personalizadas que transformam o ambiente de trabalho
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="premium-card shadow-2xl sticky top-32">
              {showSuccess ? (
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl">
                      <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-4xl font-display text-[var(--primary-purple)] mb-4">
                    Solicitação Enviada!
                  </h3>
                  <p className="text-lg font-body text-[var(--text-secondary)] leading-relaxed">
                    Em breve entraremos em contato para apresentar nossa proposta personalizada para sua empresa.
                  </p>
                </CardContent>
              ) : (
                <>
                  <div className="p-8 bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] text-white rounded-t-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="text-3xl font-display text-white">
                        Solicite uma Proposta
                      </h3>
                    </div>
                    <p className="text-white font-body leading-relaxed" style={{ color: '#ffffff', opacity: 1 }}>
                      Preencha o formulário e receba uma proposta personalizada para sua empresa
                    </p>
                  </div>
                  
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                Nome da Empresa *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  {...field}
                                  value={field.value || ""}
                                  placeholder="Sua Empresa Ltda"
                                  className="h-12 text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="contactName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                Nome do Contato *
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  {...field}
                                  value={field.value || ""}
                                  placeholder="Seu nome"
                                  className="h-12 text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                  E-mail *
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field}
                                    value={field.value || ""}
                                    type="email" 
                                    placeholder="contato@empresa.com"
                                    className="h-12 text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                  Telefone *
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    {...field}
                                    value={field.value || ""}
                                    placeholder="(11) 97682-0135"
                                    className="h-12 text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="employees"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                Número de Funcionários
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  {...field}
                                  value={field.value || ""}
                                  placeholder="Ex: 50-100"
                                  className="h-12 text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-body text-base text-[var(--text-primary)] font-semibold">
                                Mensagem (opcional)
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  {...field}
                                  value={field.value || ""}
                                  placeholder="Conte-nos um pouco sobre suas necessidades..."
                                  className="min-h-[120px] text-base rounded-xl border-2 border-[var(--primary-purple)]/20 focus:border-[var(--primary-purple)] transition-all resize-none"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          disabled={mutation.isPending}
                          className="w-full btn-primary-luxury h-14 text-lg"
                        >
                          {mutation.isPending ? (
                            <>
                              <div className="animate-spin mr-3 h-5 w-5 border-2 border-white/20 border-t-white rounded-full"></div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-3 h-5 w-5" />
                              Solicitar Proposta
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </>
              )}
            </Card>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h3 className="text-4xl font-display text-[var(--primary-purple)] mb-6">
                Benefícios Corporativos
              </h3>
              <p className="text-xl font-body text-[var(--text-secondary)] leading-relaxed mb-8">
                Transforme o ambiente de trabalho com programas de bem-estar que aumentam produtividade e satisfação.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className="group p-6 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-[var(--primary-purple)]/10 shadow-lg hover:border-[var(--primary-purple)]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-body text-base text-[var(--text-primary)] font-medium leading-snug">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="premium-card overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--accent-gold)]/20 to-transparent rounded-full blur-3xl"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center flex-shrink-0 shadow-xl">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display text-[var(--primary-purple)] mb-2">
                      Case de Sucesso
                    </h4>
                    <p className="text-sm font-body text-[var(--text-muted)]">
                      TechCorp • 150 colaboradores
                    </p>
                  </div>
                </div>
                
                <p className="text-lg font-body text-[var(--text-secondary)] leading-relaxed italic mb-6">
                  "O programa de bem-estar corporativo do Spaço Bellas transformou nossa equipe. Notamos redução de 40% no absenteísmo e aumento significativo na satisfação dos colaboradores."
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-purple)] to-[var(--primary-purple-light)] flex items-center justify-center text-white font-display text-lg">
                    AS
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[var(--text-primary)]">Ana Silva</p>
                    <p className="text-sm font-body text-[var(--text-muted)]">Diretora de RH</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
