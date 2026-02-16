import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Enquiry = {
  id: string;
  name: string;
  course: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  created_at: string;
};

interface AdminDashboardProps {
  enquiries: Enquiry[];
  isLoading?: boolean;
  adminEmail: string | null;
  adminRole?: string | null;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  enquiries,
  isLoading = false,
  adminEmail,
  adminRole,
}) => {
  const [selectedEnquiry, setSelectedEnquiry] =
    useState<Enquiry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");

  const uniqueCourses = Array.from(new Set(enquiries.map((e) => e.course)));

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const matchesSearch =
      enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enquiry.phone?.includes(searchTerm);

    const matchesCourse =
      filterCourse === "all" || enquiry.course === filterCourse;

    return matchesSearch && matchesCourse;
  });

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleString("en-IN");

  if (isLoading) {
    return (
      <div className="section-padding" style={{ backgroundColor: '#EAEFEF' }}>
        <div className="max-w-7xl mx-auto container-padding">
          <p style={{ color: '#BFC9D1' }}>Loading enquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding" style={{ backgroundColor: '#EAEFEF' }}>
      <div className="max-w-7xl mx-auto container-padding space-y-8">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 
              className="text-3xl font-bold"
              style={{ color: '#25343F' }}
            >
              Admin Dashboard
            </h1>
            <p style={{ color: '#BFC9D1' }}>
              Internal Enquiry Management
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">

            {/* ROLE BADGE */}
            {adminRole && (
              <span 
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ 
                  backgroundColor: '#FF9B51',
                  color: '#25343F',
                  borderColor: '#FF9B51'
                }}
              >
                {adminRole.toUpperCase()}
              </span>
            )}

            {/* EMAIL */}
            {adminEmail && (
              <span 
                className="text-sm"
                style={{ color: '#BFC9D1' }}
              >
                {adminEmail}
              </span>
            )}

            {/* LOGOUT */}
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = "/admin-login";
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition"
              style={{ 
                backgroundColor: '#FF9B51',
                color: '#25343F'
              }}
            >
              Logout
            </button>
          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="rounded-xl p-6 shadow-lg"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p 
              className="text-sm"
              style={{ color: '#BFC9D1' }}
            >
              Total Enquiries
            </p>
            <p 
              className="text-3xl font-bold"
              style={{ color: '#25343F' }}
            >
              {enquiries.length}
            </p>
          </div>

          <div 
            className="rounded-xl p-6 shadow-lg"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p 
              className="text-sm"
              style={{ color: '#BFC9D1' }}
            >
              Today
            </p>
            <p 
              className="text-3xl font-bold"
              style={{ color: '#25343F' }}
            >
              {
                enquiries.filter(
                  (e) =>
                    new Date(e.created_at).toDateString() ===
                    new Date().toDateString()
                ).length
              }
            </p>
          </div>

          <div 
            className="rounded-xl p-6 shadow-lg"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            <p 
              className="text-sm"
              style={{ color: '#BFC9D1' }}
            >
              Courses
            </p>
            <p 
              className="text-3xl font-bold"
              style={{ color: '#25343F' }}
            >
              {uniqueCourses.length}
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div 
          className="rounded-xl p-6 shadow-lg flex flex-col md:flex-row gap-4"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
            style={{ 
              borderColor: '#BFC9D1',
              backgroundColor: '#EAEFEF',
              color: '#25343F'
            }}
            onFocus={(e) => e.currentTarget.style.borderColor = '#FF9B51'}
            onBlur={(e) => e.currentTarget.style.borderColor = '#BFC9D1'}
          />

          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{ 
              borderColor: '#BFC9D1',
              backgroundColor: '#EAEFEF',
              color: '#25343F'
            }}
          >
            <option value="all">All Courses</option>
            {uniqueCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* TABLE */}
        <div 
          className="rounded-xl shadow-lg overflow-hidden"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {filteredEnquiries.length === 0 ? (
            <div 
              className="p-8 text-center"
              style={{ color: '#BFC9D1' }}
            >
              No enquiries found.
            </div>
          ) : (
            <table className="w-full text-left">
              <thead 
                className="border-b"
                style={{ 
                  borderColor: '#BFC9D1',
                  backgroundColor: '#EAEFEF'
                }}
              >
                <tr>
                  <th 
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#25343F' }}
                  >
                    Student
                  </th>
                  <th 
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#25343F' }}
                  >
                    Course
                  </th>
                  <th 
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#25343F' }}
                  >
                    Contact
                  </th>
                  <th 
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#25343F' }}
                  >
                    Date
                  </th>
                  <th 
                    className="px-6 py-4 text-sm font-semibold"
                    style={{ color: '#25343F' }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="border-b transition"
                    style={{ borderColor: '#BFC9D1' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#EAEFEF'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <td 
                      className="px-6 py-4 font-medium"
                      style={{ color: '#25343F' }}
                    >
                      {enquiry.name}
                    </td>

                    <td 
                      className="px-6 py-4"
                      style={{ color: '#BFC9D1' }}
                    >
                      {enquiry.course}
                    </td>

                    <td 
                      className="px-6 py-4"
                      style={{ color: '#BFC9D1' }}
                    >
                      {enquiry.email || enquiry.phone || "—"}
                    </td>

                    <td 
                      className="px-6 py-4"
                      style={{ color: '#BFC9D1' }}
                    >
                      {formatDate(enquiry.created_at)}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="hover:underline text-sm transition-colors"
                        style={{ color: '#FF9B51' }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* MODAL */}
        {selectedEnquiry && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(37, 52, 63, 0.8)' }}
            onClick={() => setSelectedEnquiry(null)}
          >
            <div
              className="rounded-xl p-8 max-w-lg w-full shadow-2xl"
              style={{ backgroundColor: '#FFFFFF' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 
                className="text-xl font-bold mb-4"
                style={{ color: '#25343F' }}
              >
                Enquiry Details
              </h2>

              <div className="space-y-3 text-sm" style={{ color: '#25343F' }}>
                <p><strong>Name:</strong> {selectedEnquiry.name}</p>
                <p><strong>Course:</strong> {selectedEnquiry.course}</p>
                <p><strong>Email:</strong> {selectedEnquiry.email ?? "—"}</p>
                <p><strong>Phone:</strong> {selectedEnquiry.phone ?? "—"}</p>

                {selectedEnquiry.message && (
                  <p><strong>Message:</strong> {selectedEnquiry.message}</p>
                )}

                <p 
                  className="text-xs"
                  style={{ color: '#BFC9D1' }}
                >
                  Submitted on {formatDate(selectedEnquiry.created_at)}
                </p>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-4 py-2 rounded-lg font-medium transition-opacity hover:opacity-90"
                  style={{ 
                    backgroundColor: '#FF9B51',
                    color: '#25343F'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;