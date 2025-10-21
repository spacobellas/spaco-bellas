import { z } from "zod";

export const insertServiceCategorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  displayOrder: z.number().int().default(0),
});

export type InsertServiceCategory = z.infer<typeof insertServiceCategorySchema>;

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  displayOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export const insertServiceSchema = z.object({
  categoryId: z.string().uuid(),
  name: z.string().min(1),
  price: z.string().or(z.number()),
  maintenancePrice: z.string().or(z.number()).nullable().optional(),
  description: z.string().nullable().optional(),
  duration: z.string().nullable().optional(),
});

export type InsertService = z.infer<typeof insertServiceSchema>;

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  price: string;
  maintenancePrice: string | null;
  description: string | null;
  duration: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export const insertDaySpaPackageSchema = z.object({
  tier: z.enum(['Bronze', 'Prata', 'Ouro', 'Diamante', 'Personalizado']),
  price: z.string().or(z.number()).nullable().optional(),
  description: z.string().min(1),
  features: z.array(z.string()),
  featured: z.boolean().default(false),
  displayOrder: z.number().int().default(0),
});

export type InsertDaySpaPackage = z.infer<typeof insertDaySpaPackageSchema>;

export interface DaySpaPackage {
  id: string;
  tier: string;
  price: string | null;
  description: string;
  features: string[];
  featured: boolean;
  displayOrder: number;
  createdAt?: string;
  updatedAt?: string;
}

export const insertLeadB2BSchema = z.object({
  companyName: z.string().min(1, "Nome da empresa é obrigatório"),
  contactName: z.string().min(1, "Nome do contato é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  employees: z.string().optional(),
  message: z.string().optional(),
});

export type InsertLeadB2B = z.infer<typeof insertLeadB2BSchema>;

export interface LeadB2B {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  employees: string | null;
  message: string | null;
  status: string;
  convertedToClientId: number | null;
  createdAt: string;
  updatedAt?: string;
  contactedAt?: string | null;
  convertedAt?: string | null;
}

export const insertLandingLeadSchema = z.object({
  fullName: z.string().min(1, "Nome é obrigatório"),
  phone: z.string().min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido").optional(),
  message: z.string().optional(),
  source: z.string().default('landing_page'),
  packageInterest: z.string().optional(),
  serviceInterest: z.string().optional(),
});

export type InsertLandingLead = z.infer<typeof insertLandingLeadSchema>;

export interface LandingLead {
  id: string;
  fullName: string;
  phone: string;
  email: string | null;
  message: string | null;
  source: string;
  packageInterest: string | null;
  serviceInterest: string | null;
  status: string;
  convertedToClientId: number | null;
  createdAt: string;
  updatedAt?: string;
  contactedAt?: string | null;
  convertedAt?: string | null;
}

export const insertTestimonialSchema = z.object({
  customerName: z.string().min(1),
  content: z.string().min(1),
  service: z.string().min(1),
  rating: z.number().int().min(1).max(5).default(5),
  displayOrder: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

export interface Testimonial {
  id: string;
  customerName: string;
  content: string;
  service: string;
  rating: number;
  displayOrder: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
