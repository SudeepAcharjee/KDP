import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BaseURL = "";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin",]
            }
        ],
        sitemap: `${BaseURL}/sitemap.xml`
    }
}