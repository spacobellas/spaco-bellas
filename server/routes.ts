import type { Express } from "express";
import { storage } from "./storage";
import { insertLeadB2BSchema, insertLandingLeadSchema } from "@shared/schema";
import { z } from "zod";

// Retorna void ao invés de Server - não criamos HTTP server para serverless
export async function registerRoutes(app: Express): Promise<void> {
  app.get("/api/service-categories", async (req, res) => {
    try {
      const categories = await storage.getAllServiceCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching service categories:", error);
      res.status(500).json({ error: "Failed to fetch service categories" });
    }
  });

  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/category/:categoryId", async (req, res) => {
    try {
      const { categoryId } = req.params;
      const services = await storage.getServicesByCategory(categoryId);
      res.json(services);
    } catch (error) {
      console.error("Error fetching services by category:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/services/grouped", async (req, res) => {
    try {
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
      res.json(grouped);
    } catch (error) {
      console.error("Error fetching grouped services:", error);
      res.status(500).json({ error: "Failed to fetch grouped services" });
    }
  });

  app.get("/api/day-spa-packages", async (req, res) => {
    try {
      const packages = await storage.getAllDaySpaPackages();
      res.json(packages);
    } catch (error) {
      console.error("Error fetching day spa packages:", error);
      res.status(500).json({ error: "Failed to fetch day spa packages" });
    }
  });

  app.post("/api/leads/b2b", async (req, res) => {
    try {
      const validated = insertLeadB2BSchema.parse(req.body);
      const lead = await storage.createLeadB2B(validated);
      res.json({ success: true, leadId: lead.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation error",
          details: error.errors
        });
      } else {
        console.error("Error creating B2B lead:", error);
        res.status(500).json({ error: "Failed to create B2B lead" });
      }
    }
  });

  app.post("/api/leads/landing", async (req, res) => {
    try {
      const validated = insertLandingLeadSchema.parse(req.body);
      const lead = await storage.createLandingLead(validated);
      res.json({ success: true, leadId: lead.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: "Validation error",
          details: error.errors
        });
      } else {
        console.error("Error creating landing lead:", error);
        res.status(500).json({ error: "Failed to create landing lead" });
      }
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getActiveTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });
}
