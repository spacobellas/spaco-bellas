import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../server/storage';
import { insertLeadB2BSchema, insertLandingLeadSchema } from '../shared/schema';
import { z } from 'zod';

// Handler para serverless function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { method, url } = req;
  const path = url?.split('?')[0] || '';

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Service Categories
    if (path === '/api/service-categories' && method === 'GET') {
      const categories = await storage.getAllServiceCategories();
      return res.status(200).json(categories);
    }

    // Services
    if (path === '/api/services' && method === 'GET') {
      const services = await storage.getAllServices();
      return res.status(200).json(services);
    }

    // Services by category
    if (path.match(/^\/api\/services\/category\/(.+)$/) && method === 'GET') {
      const categoryId = path.split('/').pop();
      if (!categoryId) {
        return res.status(400).json({ error: 'Category ID required' });
      }
      const services = await storage.getServicesByCategory(categoryId);
      return res.status(200).json(services);
    }

    // Grouped services
    if (path === '/api/services/grouped' && method === 'GET') {
      const categories = await storage.getAllServiceCategories();
      const grouped = await Promise.all(
        categories.map(async (category) => {
          const services = await storage.getServicesByCategory(category.id);
          return {
            id: category.id,
            slug: category.slug,
            name: category.name,
            displayOrder: category.displayOrder,
            services: services,
          };
        })
      );
      return res.status(200).json(grouped);
    }

    // Day Spa Packages
    if (path === '/api/day-spa-packages' && method === 'GET') {
      const packages = await storage.getAllDaySpaPackages();
      return res.status(200).json(packages);
    }

    // B2B Leads
    if (path === '/api/leads/b2b' && method === 'POST') {
      const validated = insertLeadB2BSchema.parse(req.body);
      const lead = await storage.createLeadB2B(validated);
      return res.status(200).json({ success: true, leadId: lead.id });
    }

    // Landing Leads
    if (path === '/api/leads/landing' && method === 'POST') {
      const validated = insertLandingLeadSchema.parse(req.body);
      const lead = await storage.createLandingLead(validated);
      return res.status(200).json({ success: true, leadId: lead.id });
    }

    // Testimonials
    if (path === '/api/testimonials' && method === 'GET') {
      const testimonials = await storage.getActiveTestimonials();
      return res.status(200).json(testimonials);
    }

    // 404
    return res.status(404).json({ error: 'Not found' });

  } catch (error) {
    console.error('API Error:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }

    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
