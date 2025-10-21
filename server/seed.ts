import 'dotenv/config';
import { supabase } from "./db";

async function seed() {
  console.log("Starting Supabase database seed...");

  try {
    console.log("Deleting existing data...");
    await supabase.from('landing_services').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('landing_service_categories').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('day_spa_packages').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('testimonials').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    console.log("Creating service categories...");
    const { data: categories, error: catError } = await supabase
      .from('landing_service_categories')
      .insert([
        { name: "Sobrancelhas & Micropigmentação", slug: "sobrancelhas", display_order: 1 },
        { name: "Alongamento de Cílios", slug: "cilios", display_order: 2 },
        { name: "Unhas (Nail Design)", slug: "unhas", display_order: 3 },
        { name: "Massagens & Terapias Corporais", slug: "massagens", display_order: 4 },
        { name: "Cabelo", slug: "cabelo", display_order: 5 },
        { name: "Consultoria de Imagem", slug: "consultoria", display_order: 6 },
        { name: "Terapias Integrativas", slug: "terapias", display_order: 7 },
      ])
      .select();

    if (catError) throw catError;
    console.log(`Created ${categories.length} categories`);

    const categoryMap = categories.reduce((acc, cat) => {
      acc[cat.slug] = cat.id;
      return acc;
    }, {} as Record<string, string>);

    console.log("Creating services...");
    const services = [
      { category_id: categoryMap.sobrancelhas, name: "Design de Sobrancelhas", price: 44.90, duration: "30 min", description: "Modelagem personalizada das sobrancelhas" },
      { category_id: categoryMap.sobrancelhas, name: "Henna para Sobrancelhas", price: 54.90, duration: "40 min", description: "Coloração natural com henna" },
      { category_id: categoryMap.sobrancelhas, name: "Nanoblading", price: 619.90, maintenance_price: 199.90, duration: "2h", description: "Micropigmentação ultra-realista fio a fio" },
      { category_id: categoryMap.sobrancelhas, name: "Microblading", price: 549.90, maintenance_price: 179.90, duration: "2h", description: "Micropigmentação clássica" },
      
      { category_id: categoryMap.cilios, name: "Volume Brasileiro", price: 159.90, duration: "2h", description: "Alongamento de cílios com efeito volume" },
      { category_id: categoryMap.cilios, name: "Volume Russo", price: 189.90, duration: "2h 30min", description: "Técnica premium com múltiplos fios" },
      { category_id: categoryMap.cilios, name: "Lash Lifting", price: 119.90, duration: "1h", description: "Permanente natural para cílios" },
      { category_id: categoryMap.cilios, name: "Remoção de Cílios", price: 59.90, duration: "30 min", description: "Remoção segura de alongamento" },
      
      { category_id: categoryMap.unhas, name: "Manicure com Esmaltação", price: 49.90, duration: "45 min", description: "Manicure completa" },
      { category_id: categoryMap.unhas, name: "Pedicure com Esmaltação", price: 59.90, duration: "1h", description: "Pedicure completa" },
      { category_id: categoryMap.unhas, name: "Unha de Gel", price: 129.90, duration: "1h 30min", description: "Aplicação de gel com design" },
      { category_id: categoryMap.unhas, name: "Fibra de Vidro", price: 194.90, duration: "2h", description: "Alongamento resistente com fibra" },
      { category_id: categoryMap.unhas, name: "Alongamento em Acrílico", price: 159.90, duration: "2h", description: "Alongamento clássico em acrílico" },
      { category_id: categoryMap.unhas, name: "Nail Art (por unha)", price: 19.90, duration: "15 min", description: "Decoração artística personalizada" },
      
      { category_id: categoryMap.massagens, name: "Massagem Relaxante", price: 139.90, duration: "50 min", description: "Massagem para relaxamento profundo" },
      { category_id: categoryMap.massagens, name: "Massagem com Pedras Quentes", price: 189.90, duration: "1h 10min", description: "Terapia termal relaxante" },
      { category_id: categoryMap.massagens, name: "Drenagem Linfática", price: 149.90, duration: "50 min", description: "Reduz inchaços e melhora circulação" },
      { category_id: categoryMap.massagens, name: "Massagem Ayurvédica", price: 219.90, duration: "1h 30min", description: "Técnica milenar indiana" },
      { category_id: categoryMap.massagens, name: "Bambuterapia", price: 169.90, duration: "1h", description: "Massagem com bambus aquecidos" },
      { category_id: categoryMap.massagens, name: "Reflexologia Podal", price: 99.90, duration: "40 min", description: "Massagem terapêutica nos pés" },
      { category_id: categoryMap.massagens, name: "Quick Massage", price: 79.90, duration: "30 min", description: "Massagem expressa relaxante" },
      
      { category_id: categoryMap.cabelo, name: "Corte Feminino", price: 89.90, duration: "1h", description: "Corte personalizado" },
      { category_id: categoryMap.cabelo, name: "Escova Progressiva", price: 349.90, duration: "3h", description: "Alisamento duradouro" },
      { category_id: categoryMap.cabelo, name: "Botox Capilar", price: 199.90, duration: "2h", description: "Tratamento de reconstrução" },
      { category_id: categoryMap.cabelo, name: "Coloração Completa", price: 249.90, duration: "2h 30min", description: "Coloração profissional" },
      { category_id: categoryMap.cabelo, name: "Mechas ou Luzes", price: 299.90, duration: "3h", description: "Técnicas de iluminação" },
      { category_id: categoryMap.cabelo, name: "Hidratação Profunda", price: 119.90, duration: "1h 30min", description: "Tratamento intensivo" },
      
      { category_id: categoryMap.consultoria, name: "Análise de Coloração Pessoal", price: 449.90, duration: "2h", description: "Descubra suas cores ideais" },
      { category_id: categoryMap.consultoria, name: "Visagismo Completo", price: 699.90, duration: "3h", description: "Análise de estilo personalizada" },
      { category_id: categoryMap.consultoria, name: "Personal Stylist (sessão)", price: 899.90, duration: "4h", description: "Consultoria de guarda-roupa" },
      { category_id: categoryMap.consultoria, name: "Consultoria Express", price: 299.90, duration: "1h", description: "Análise rápida de estilo" },
      
      { category_id: categoryMap.terapias, name: "Auriculoterapia", price: 89.90, duration: "40 min", description: "Terapia com sementes auriculares" },
      { category_id: categoryMap.terapias, name: "Aromaterapia", price: 119.90, duration: "50 min", description: "Terapia com óleos essenciais" },
      { category_id: categoryMap.terapias, name: "Radiestesia", price: 149.90, duration: "1h", description: "Detecção e harmonização energética" },
      { category_id: categoryMap.terapias, name: "Reiki", price: 129.90, duration: "50 min", description: "Terapia energética japonesa" },
    ];

    const { error: servicesError } = await supabase
      .from('landing_services')
      .insert(services);

    if (servicesError) throw servicesError;
    console.log(`Created ${services.length} services`);

    console.log("Creating day spa packages...");
    const { data: packages, error: pkgError } = await supabase
      .from('day_spa_packages')
      .insert([
        {
          tier: 'Bronze',
          price: 195.00,
          description: 'Um cuidado essencial para você relaxar e sair renovada.',
          features: ["Spa dos Pés (30 min)", "Hidromassagem (30 min)", "Massagem Relaxante (50 min)", "Chá e frutas"],
          featured: false,
          display_order: 1
        },
        {
          tier: 'Prata',
          price: 360.00,
          description: 'Mais completo, inclui relaxamento profundo e cuidados extras.',
          features: ["Tudo do Bronze", "Drenagem Linfática (50 min)", "Esfoliação Corporal", "Hidratação Facial", "Aromaterapia personalizada"],
          featured: false,
          display_order: 2
        },
        {
          tier: 'Ouro',
          price: 520.00,
          description: 'A experiência premium com tratamentos exclusivos.',
          features: ["Tudo do Prata", "Massagem com Pedras Quentes (70 min)", "Tratamento Facial Completo", "Reflexologia Podal", "Lanche gourmet"],
          featured: true,
          display_order: 3
        },
        {
          tier: 'Diamante',
          price: 650.00,
          description: 'O máximo em luxo e bem-estar, uma verdadeira transformação.',
          features: ["Tudo do Ouro", "Massagem Ayurvédica (90 min)", "Spa Facial Luminosidade", "Ritual de Bambuterapia", "Day Use Completo", "Jantar especial incluso"],
          featured: true,
          display_order: 4
        }
      ])
      .select();

    if (pkgError) throw pkgError;
    console.log(`Created ${packages.length} packages`);

    console.log("Creating testimonials...");
    const { data: testimonials, error: testError } = await supabase
      .from('testimonials')
      .insert([
        {
          customer_name: "Ana Paula Silva",
          content: "Experiência incrível! O Day Spa Diamante superou todas as minhas expectativas. A equipe é extremamente profissional e o ambiente é perfeito para relaxar.",
          service: "Day Spa Diamante",
          rating: 5,
          display_order: 1,
          is_active: true
        },
        {
          customer_name: "Mariana Costa",
          content: "O design de sobrancelhas ficou perfeito! A profissional entendeu exatamente o que eu queria. Super recomendo!",
          service: "Design de Sobrancelhas",
          rating: 5,
          display_order: 2,
          is_active: true
        },
        {
          customer_name: "Carolina Mendes",
          content: "A massagem relaxante foi excelente. Saí de lá renovada e sem as dores nas costas. Com certeza voltarei!",
          service: "Massagem Relaxante",
          rating: 5,
          display_order: 3,
          is_active: true
        },
        {
          customer_name: "Juliana Oliveira",
          content: "O alongamento de cílios Volume Russo ficou maravilhoso! Durou mais de um mês e recebi muitos elogios.",
          service: "Volume Russo",
          rating: 5,
          display_order: 4,
          is_active: true
        },
        {
          customer_name: "Beatriz Santos",
          content: "Fiz nanoblading e estou apaixonada pelo resultado. Parece completamente natural e não preciso mais me preocupar com sobrancelhas pela manhã!",
          service: "Nanoblading",
          rating: 5,
          display_order: 5,
          is_active: true
        },
        {
          customer_name: "Fernanda Lima",
          content: "A drenagem linfática me ajudou muito com o inchaço. Profissional super atenciosa e técnica impecável.",
          service: "Drenagem Linfática",
          rating: 5,
          display_order: 6,
          is_active: true
        }
      ])
      .select();

    if (testError) throw testError;
    console.log(`Created ${testimonials.length} testimonials`);

    console.log("✅ Seed completed successfully!");
  } catch (error) {
    console.error("❌ Error during seed:", error);
    throw error;
  }
}

seed()
  .then(() => {
    console.log("Seed process finished");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Seed process failed:", error);
    process.exit(1);
  });
