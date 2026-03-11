import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tag, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';



const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/public`);
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          Loading posts...
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Insights
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Blog & insights
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Perspectives from our work across research, strategy, branding and
            on‑ground execution.
          </p>
        </motion.div>

        {/* Posts grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.5 },
            },
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article
              key={post._id}
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.97 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45 },
                },
              }}
              whileHover={{
                y: -6,
                boxShadow: '0 18px 40px rgba(251,191,36,0.25)',
              }}
              className="rounded-2xl border border-amber-100 bg-white/95 p-5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-700">
                  <Tag className="w-3 h-3" />
                  <span>{post.tag}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>

              <h2 className="text-base md:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-2">
               <Link
  to={`/blog/${post.slug}`}
  className="px-0 text-xs md:text-sm text-amber-600 hover:text-amber-700 hover:bg-transparent flex items-center gap-2"
>
  Read article
  <ArrowRight className="w-3 h-3" />
</Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
