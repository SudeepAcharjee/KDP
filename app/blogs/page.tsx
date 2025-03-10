import BlogSection from "./components/blogsections";
import BlogHero from "./components/hero";

const BlogsPage = () => {
  return (
    <section className="flex flex-col justify-center py-10 space-y-10">
      <BlogHero />
      <BlogSection />
    </section>
  );
};

export default BlogsPage;
