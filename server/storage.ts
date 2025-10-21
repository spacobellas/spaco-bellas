import { supabase } from "./db";
import {
  type ServiceCategory,
  type Service,
  type DaySpaPackage,
  type LeadB2B,
  type LandingLead,
  type Testimonial,
  type InsertServiceCategory,
  type InsertService,
  type InsertDaySpaPackage,
  type InsertLeadB2B,
  type InsertLandingLead,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  getAllServiceCategories(): Promise<ServiceCategory[]>;
  getServiceCategory(id: string): Promise<ServiceCategory | null>;
  createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory>;
  
  getAllServices(): Promise<Service[]>;
  getServicesByCategory(categoryId: string): Promise<Service[]>;
  getService(id: string): Promise<Service | null>;
  createService(service: InsertService): Promise<Service>;
  
  getAllDaySpaPackages(): Promise<DaySpaPackage[]>;
  getDaySpaPackage(id: string): Promise<DaySpaPackage | null>;
  createDaySpaPackage(pkg: InsertDaySpaPackage): Promise<DaySpaPackage>;
  
  createLeadB2B(lead: InsertLeadB2B): Promise<LeadB2B>;
  getAllLeadsB2B(): Promise<LeadB2B[]>;
  
  createLandingLead(lead: InsertLandingLead): Promise<LandingLead>;
  getAllLandingLeads(): Promise<LandingLead[]>;
  
  getAllTestimonials(): Promise<Testimonial[]>;
  getActiveTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function snakeToCamel(str: string): string {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

function transformKeys<T extends Record<string, any>>(obj: T, transformer: (key: string) => string): any {
  if (Array.isArray(obj)) {
    return obj.map(item => transformKeys(item, transformer));
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = transformer(key);
      acc[newKey] = transformKeys(obj[key], transformer);
      return acc;
    }, {} as any);
  }
  return obj;
}

class SupabaseStorage implements IStorage {
  async getAllServiceCategories(): Promise<ServiceCategory[]> {
    const { data, error } = await supabase
      .from('landing_service_categories')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getServiceCategory(id: string): Promise<ServiceCategory | null> {
    const { data, error } = await supabase
      .from('landing_service_categories')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return transformKeys(data, snakeToCamel);
  }

  async createServiceCategory(category: InsertServiceCategory): Promise<ServiceCategory> {
    const dbData = transformKeys(category, camelToSnake);
    const { data, error } = await supabase
      .from('landing_service_categories')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }

  async getAllServices(): Promise<Service[]> {
    const { data, error } = await supabase
      .from('landing_services')
      .select('*')
      .order('name', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getServicesByCategory(categoryId: string): Promise<Service[]> {
    const { data, error } = await supabase
      .from('landing_services')
      .select('*')
      .eq('category_id', categoryId)
      .order('name', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getService(id: string): Promise<Service | null> {
    const { data, error } = await supabase
      .from('landing_services')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return transformKeys(data, snakeToCamel);
  }

  async createService(service: InsertService): Promise<Service> {
    const dbData = transformKeys(service, camelToSnake);
    const { data, error } = await supabase
      .from('landing_services')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }

  async getAllDaySpaPackages(): Promise<DaySpaPackage[]> {
    const { data, error } = await supabase
      .from('day_spa_packages')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getDaySpaPackage(id: string): Promise<DaySpaPackage | null> {
    const { data, error } = await supabase
      .from('day_spa_packages')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') return null;
      throw error;
    }
    return transformKeys(data, snakeToCamel);
  }

  async createDaySpaPackage(pkg: InsertDaySpaPackage): Promise<DaySpaPackage> {
    const dbData = transformKeys(pkg, camelToSnake);
    const { data, error } = await supabase
      .from('day_spa_packages')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }

  async createLeadB2B(lead: InsertLeadB2B): Promise<LeadB2B> {
    const dbData = transformKeys(lead, camelToSnake);
    const { data, error } = await supabase
      .from('leads_b2b')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }

  async getAllLeadsB2B(): Promise<LeadB2B[]> {
    const { data, error } = await supabase
      .from('leads_b2b')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async createLandingLead(lead: InsertLandingLead): Promise<LandingLead> {
    const dbData = transformKeys(lead, camelToSnake);
    const { data, error } = await supabase
      .from('landing_leads')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }

  async getAllLandingLeads(): Promise<LandingLead[]> {
    const { data, error } = await supabase
      .from('landing_leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async getActiveTestimonials(): Promise<Testimonial[]> {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });
    
    if (error) throw error;
    return transformKeys(data || [], snakeToCamel);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const dbData = transformKeys(testimonial, camelToSnake);
    const { data, error } = await supabase
      .from('testimonials')
      .insert(dbData)
      .select()
      .single();
    
    if (error) throw error;
    return transformKeys(data, snakeToCamel);
  }
}

export const storage = new SupabaseStorage();
