// src/Pages/AdminBlogs.jsx
import React, { useEffect, useState } from 'react';

const AdminBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({
    title: '',
    tag: '',
    excerpt: '',
    content: '',
    status: 'draft',
  });
  const [editingId, setEditingId] = useState(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/posts`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? 'PUT' : 'POST';
    const url = editingId
      ? `${import.meta.env.VITE_API_URL}/api/posts/${editingId}`
      : `${import.meta.env.VITE_API_URL}/api/posts`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error('Save error:', errData);
        return;
      }

      setForm({
        title: '',
        tag: '',
        excerpt: '',
        content: '',
        status: 'draft',
      });
      setEditingId(null);
      fetchPosts();
    } catch (err) {
      console.error('Request error:', err);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post._id);
    setForm({
      title: post.title || '',
      tag: post.tag || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      status: post.status || 'draft',
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/posts/${id}`, { method: 'DELETE' });
      fetchPosts();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <section className="pt-28 pb-20 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Admin: Manage Blogs</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 space-y-3 border border-amber-100 shadow-sm p-4 rounded-xl bg-white"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-semibold">
            {editingId ? 'Edit Post' : 'Create New Post'}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({
                  title: '',
                  tag: '',
                  excerpt: '',
                  content: '',
                  status: 'draft',
                });
              }}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          )}
        </div>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border px-2 py-1 text-sm rounded"
          required
        />

        {/* Tag dropdown */}
        <select
          name="tag"
          value={form.tag}
          onChange={handleChange}
          className="w-full border px-2 py-1 text-sm rounded"
          required
        >
          <option value="">Select category</option>
          <option value="Social Research">Social Research</option>
          <option value="Market Research">Market Research</option>
          <option value="Business consultancy">Business consultancy</option>
          <option value="Branding & advertising">Branding & advertising</option>
          <option value="IT Solutions">IT Solutions</option>
          <option value="Manpower support">Manpower support</option>
        </select>

        <input
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Short excerpt"
          className="w-full border px-2 py-1 text-sm rounded"
          required
        />

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Full content"
          className="w-full border px-2 py-1 text-sm h-32 rounded"
        />

        <div className="flex gap-3 items-center">
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border px-2 py-1 text-sm rounded"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button
            type="submit"
            className="px-4 py-1 text-sm bg-amber-600 hover:bg-amber-700 text-white rounded transition"
          >
            {editingId ? 'Update' : 'Create'}
          </button>
        </div>
      </form>

      {/* Table */}
      <h2 className="font-semibold mb-3">All Posts</h2>
      <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="border-b px-3 py-2 text-left">Title</th>
              <th className="border-b px-3 py-2 text-left">Tag</th>
              <th className="border-b px-3 py-2 text-left">Status</th>
              <th className="border-b px-3 py-2 text-center w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="border-b px-3 py-2 align-middle">{p.title}</td>
                <td className="border-b px-3 py-2 align-middle">{p.tag}</td>
                <td className="border-b px-3 py-2 align-middle capitalize">
                  {p.status}
                </td>
                <td className="border-b px-3 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleEdit(p)}
                      className="px-2 py-1 text-[11px] rounded border border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(p._id)}
                      className="px-2 py-1 text-[11px] rounded border border-red-200 text-red-700 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No posts yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminBlogs;
