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
      <div className="section-padding bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <p className="text-muted-foreground">Loading enquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding space-y-8">

        {/* HEADER */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Internal Enquiry Management
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">

            {/* ROLE BADGE */}
            {adminRole && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                {adminRole.toUpperCase()}
              </span>
            )}

            {/* EMAIL */}
            {adminEmail && (
              <span className="text-sm text-muted-foreground">
                {adminEmail}
              </span>
            )}

            {/* LOGOUT */}
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = "/admin-login";
              }}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 card-shadow">
            <p className="text-sm text-muted-foreground">Total Enquiries</p>
            <p className="text-3xl font-bold text-foreground">
              {enquiries.length}
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 card-shadow">
            <p className="text-sm text-muted-foreground">Today</p>
            <p className="text-3xl font-bold text-foreground">
              {
                enquiries.filter(
                  (e) =>
                    new Date(e.created_at).toDateString() ===
                    new Date().toDateString()
                ).length
              }
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 card-shadow">
            <p className="text-sm text-muted-foreground">Courses</p>
            <p className="text-3xl font-bold text-foreground">
              {uniqueCourses.length}
            </p>
          </div>
        </div>

        {/* FILTERS */}
        <div className="bg-card rounded-xl p-6 card-shadow flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-background text-foreground"
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
        <div className="bg-card rounded-xl card-shadow overflow-hidden">
          {filteredEnquiries.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              No enquiries found.
            </div>
          ) : (
            <table className="w-full text-left">
              <thead className="border-b border-border bg-muted">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold">Student</th>
                  <th className="px-6 py-4 text-sm font-semibold">Course</th>
                  <th className="px-6 py-4 text-sm font-semibold">Contact</th>
                  <th className="px-6 py-4 text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="border-b border-border hover:bg-muted transition"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {enquiry.name}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {enquiry.course}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {enquiry.email || enquiry.phone || "—"}
                    </td>

                    <td className="px-6 py-4 text-muted-foreground">
                      {formatDate(enquiry.created_at)}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedEnquiry(enquiry)}
                        className="text-accent hover:underline text-sm"
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
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedEnquiry(null)}
          >
            <div
              className="bg-card rounded-xl p-8 max-w-lg w-full card-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-foreground">
                Enquiry Details
              </h2>

              <div className="space-y-3 text-sm">
                <p><strong>Name:</strong> {selectedEnquiry.name}</p>
                <p><strong>Course:</strong> {selectedEnquiry.course}</p>
                <p><strong>Email:</strong> {selectedEnquiry.email ?? "—"}</p>
                <p><strong>Phone:</strong> {selectedEnquiry.phone ?? "—"}</p>

                {selectedEnquiry.message && (
                  <p><strong>Message:</strong> {selectedEnquiry.message}</p>
                )}

                <p className="text-muted-foreground text-xs">
                  Submitted on {formatDate(selectedEnquiry.created_at)}
                </p>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg"
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
