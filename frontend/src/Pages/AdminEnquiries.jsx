// src/Pages/AdminEnquiries.jsx
import { useEffect, useState } from 'react';

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getAuthHeaders = () => {
    let token = localStorage.getItem('adminToken');
    if (token) {
      // Sometimes tokens get saved with literal extra quotes, removing them
      token = token.replace(/^"(.*)"$/, '$1');
    }
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError('');
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiries`, {
        headers: {
          'Content-Type': 'application/json',
          ...getAuthHeaders(),
        },
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 401 && data.error === 'Invalid or expired token') {
          localStorage.removeItem('adminToken');
          window.location.href = '/admin/login';
          return;
        }
        throw new Error(data.error || 'Failed to load enquiries');
      }

      setEnquiries(data);
    } catch (err) {
      console.error('Fetch enquiries error:', err);
      setError(err.message || 'Error fetching enquiries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleMarkRead = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}/read`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/admin/login';
        return;
      }

      if (!res.ok) return;
      fetchEnquiries();
    } catch (err) {
      console.error('Mark read error:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this enquiry?')) return;
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiries/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
          },
        }
      );

      if (res.status === 401) {
        localStorage.removeItem('adminToken');
        window.location.href = '/admin/login';
        return;
      }

      if (!res.ok) return;
      setEnquiries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error('Delete enquiry error:', err);
    }
  };

  return (
    <section className="pt-28 pb-20 max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin: Enquiries</h1>
        <button
          onClick={fetchEnquiries}
          className="px-3 py-1 text-xs rounded border border-gray-200 hover:bg-gray-50"
        >
          Refresh
        </button>
      </div>

      {loading && (
        <p className="text-sm text-gray-500">Loading enquiries...</p>
      )}

      {error && (
        <p className="text-sm text-red-600 mb-3">
          {error}
        </p>
      )}

      {!loading && enquiries.length === 0 && !error && (
        <p className="text-sm text-gray-500">No enquiries yet.</p>
      )}

      {enquiries.length > 0 && (
        <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b px-3 py-2 text-left">Name</th>
                <th className="border-b px-3 py-2 text-left">Email</th>
                <th className="border-b px-3 py-2 text-left hidden md:table-cell">
                  Phone
                </th>
                <th className="border-b px-3 py-2 text-left hidden md:table-cell">
                  Message
                </th>
                <th className="border-b px-3 py-2 text-left">
                  Date
                </th>
                <th className="border-b px-3 py-2 text-center w-28">
                  Status
                </th>
                <th className="border-b px-3 py-2 text-center w-40">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr
                  key={e._id}
                  className={e.isRead ? 'bg-white' : 'bg-amber-50/60'}
                >
                  <td className="border-b px-3 py-2 align-top">
                    <div className="font-medium">{e.name}</div>
                    <div className="md:hidden text-[11px] text-gray-500 line-clamp-2">
                      {e.message}
                    </div>
                  </td>
                  <td className="border-b px-3 py-2 align-top">
                    <a
                      href={`mailto:${e.email}`}
                      className="text-xs text-amber-700 hover:underline"
                    >
                      {e.email}
                    </a>
                  </td>
                  <td className="border-b px-3 py-2 align-top hidden md:table-cell">
                    {e.phone || '-'}
                  </td>
                  <td className="border-b px-3 py-2 align-top hidden md:table-cell">
                    <div className="max-w-xs text-xs text-gray-700 whitespace-pre-wrap">
                      {e.message}
                    </div>
                  </td>
                  <td className="border-b px-3 py-2 align-top">
                    <div className="text-[11px] text-gray-500">
                      {new Date(e.createdAt).toLocaleDateString()}
                    </div>
                    <div className="text-[11px] text-gray-400">
                      {new Date(e.createdAt).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="border-b px-3 py-2 align-middle text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        e.isRead
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : 'bg-amber-50 text-amber-800 border border-amber-100'
                      }`}
                    >
                      {e.isRead ? 'Read' : 'New'}
                    </span>
                  </td>
                  <td className="border-b px-3 py-2 align-middle">
                    <div className="flex items-center justify-center gap-2">
                      {!e.isRead && (
                        <button
                          type="button"
                          onClick={() => handleMarkRead(e._id)}
                          className="px-3 py-1 rounded-full text-[11px] font-medium border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 hover:border-emerald-300 transition"
                        >
                          Mark
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(e._id)}
                        className="px-3 py-1 rounded-full text-[11px] font-medium border border-red-200 text-red-700 bg-red-50 hover:bg-red-100 hover:border-red-300 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default AdminEnquiries;
