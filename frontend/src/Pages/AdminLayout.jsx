// src/Pages/AdminLayout.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Simple auth check: agar token nahi hai to login pe bhej do
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const menu = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Blogs', path: '/admin/blogs' },
    { label: 'Enquiries', path: '/admin/enquiries' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-gray-900 text-gray-100">
        <div className="px-4 py-4 border-b border-gray-800">
          <h2 className="text-sm font-semibold tracking-wide">
            Buzzmarcom Admin
          </h2>
          <p className="text-[11px] text-gray-400">Content & Enquiries</p>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {menu.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 text-xs rounded-md transition ${
                  active
                    ? 'bg-amber-500 text-gray-900'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-3 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full text-xs px-3 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (for mobile + title) */}
        <header className="md:hidden px-4 py-3 border-b bg-white flex items-center justify-between">
          <span className="text-sm font-semibold">Admin Panel</span>
          <button
            onClick={handleLogout}
            className="text-xs px-3 py-1 rounded bg-gray-900 text-white"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
