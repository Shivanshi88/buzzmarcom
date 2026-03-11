import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts/public/${slug}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">Loading article...</div>
      </section>
    );
  }

  if (!post || post.error) {
    return (
      <section className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="mb-4 text-red-600">Article not found.</p>
          <Link to="/blogs" className="text-amber-600 text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to blogs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white via-amber-50/20 to-white">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/blogs" className="text-amber-600 text-sm flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to blogs
        </Link>

        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 mb-2">
          {post.tag}
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 text-xs text-gray-500 mb-8">
          <Calendar className="w-3 h-3" />
          <span>
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        </div>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content || post.excerpt}
        </p>
      </div>
    </section>
  );
};

export default BlogDetail;
