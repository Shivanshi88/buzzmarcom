// src/Pages/AdminDashboard.jsx
const AdminDashboard = () => {
  return (
    <section className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
      <p className="text-sm text-gray-600 mb-6">
        Use the sidebar to manage blogs and view enquiries.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-amber-100 bg-white p-4">
          <h2 className="text-sm font-semibold mb-1">Blogs</h2>
          <p className="text-xs text-gray-600">
            Create, edit and manage blog posts with thumbnails.
          </p>
        </div>
        <div className="rounded-xl border border-amber-100 bg-white p-4">
          <h2 className="text-sm font-semibold mb-1">Enquiries</h2>
          <p className="text-xs text-gray-600">
            View who contacted you from the website and mark enquiries as read.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
