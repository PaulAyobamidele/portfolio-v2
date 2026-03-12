import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";
import { Workshops } from "@/components/sections/Workshops";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  const blogPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    tags: post.tags,
    readingTime: post.readingTime,
  }));

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Workshops />
      <Blog posts={blogPosts} />
      <Contact />
    </>
  );
}
