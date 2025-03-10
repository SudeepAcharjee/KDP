import { MetadataRoute } from "next";
import { technologies } from "@/data/technologies";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const BaseURL = "https://sheryltech.com";

        const staticRoutes = [
            {
                url: `${BaseURL}`,
                lastModified: new Date(),
            },
            {
                url: `${BaseURL}/about`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/services`,
                lastModified: new Date(),
            },
            {
                url: `${BaseURL}/services/bpo`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/services/IPO`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/services/rpo`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/services/software-development`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/services/us-staffing`,
                lastModified: new Date("2025-01-07")
            },
            {
                url: `${BaseURL}/blogs`,
                lastModified: new Date(),
            },
            {
                url: `${BaseURL}/contact`,
                lastModified: new Date("2025-01-07")
            },
        ];
      
        const dynamicRoutes = Object.keys(technologies).map((slug) => ({
            url: `${BaseURL}/services/${slug}`,
            lastModified: new Date(),
        }));
      
        return [...staticRoutes, ...dynamicRoutes];
    }