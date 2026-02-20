import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  Star,
  LogOut,
  Users,
  Calendar,
  BookOpen,
  ToggleLeft,
  ToggleRight,
  Trash2,
  ChevronRight,
  Search,
  Shield,
} from "lucide-react";

type Enquiry = {
  id: string;
  name: string;
  course: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  created_at: string;
};

type Testimonial = {
  id: string;
  student_name: string;
  class: string;
  message: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
};

interface AdminDashboardProps {
  enquiries: Enquiry[];
  isLoading?: boolean;
  adminEmail: string | null;
  adminRole?: string | null;
}

const avatarColors = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-500 to-blue-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-purple-500",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  enquiries,
  isLoading = false,
  adminEmail,
  adminRole,
}) => {
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCourse, setFilterCourse] = useState("all");
  const [activeTab, setActiveTab] = useState<"enquiries" | "testimonials">(
    "enquiries"
  );

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);

  /* ===============================
     FETCH TESTIMONIALS WHEN TAB OPENS
  =============================== */

  useEffect(() => {
    if (activeTab === "testimonials") {
      fetchTestimonials();
    }
  }, [activeTab]);

  const fetchTestimonials = async () => {
    setLoadingTestimonials(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) {
      setTestimonials(data);
    }
    setLoadingTestimonials(false);
  };

  /* ===============================
     ENQUIRY FILTERING
  =============================== */

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

  /* ===============================
     LOADING STATE
  =============================== */

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080810] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center animate-pulse">
            <Shield size={20} className="text-white" />
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.3s]" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.15s]" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
          </div>
        </div>
      </div>
    );
  }

  /* ===============================
     MAIN UI
  =============================== */

  const todayCount = enquiries.filter(
    (e) =>
      new Date(e.created_at).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="min-h-screen bg-[#080810] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] rounded-full bg-violet-700/10 blur-[140px]" />
        <div className="absolute top-1/2 -right-60 w-[400px] h-[400px] rounded-full bg-indigo-700/8 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[300px] rounded-full bg-fuchsia-700/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">

        {/* ── HEADER ── */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Admin Dashboard
              </h1>
              <p className="text-white/35 text-xs mt-0.5">
                Internal Management Panel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Tabs */}
            <div className="flex items-center bg-white/5 border border-white/8 rounded-xl p-1 gap-1">
              {(["enquiries", "testimonials"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-500/30"
                      : "text-white/45 hover:text-white/70"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Role badge */}
            {adminRole && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs font-semibold tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                {adminRole.toUpperCase()}
              </span>
            )}

            {/* Email */}
            {adminEmail && (
              <span className="hidden md:block text-xs text-white/30 bg-white/5 border border-white/8 px-3 py-1.5 rounded-xl">
                {adminEmail}
              </span>
            )}

            {/* Logout */}
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                window.location.href = "/admin-login";
              }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/5 border border-white/8 text-white/60 hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all duration-200 text-sm"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </header>

        {/* ── ENQUIRIES TAB ── */}
        {activeTab === "enquiries" && (
          <>
            {/* Stat cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: "Total Enquiries",
                  value: enquiries.length,
                  icon: <Users size={18} />,
                  color: "from-violet-500 to-fuchsia-500",
                  glow: "violet",
                },
                {
                  label: "Today",
                  value: todayCount,
                  icon: <Calendar size={18} />,
                  color: "from-cyan-500 to-blue-500",
                  glow: "cyan",
                },
                {
                  label: "Courses",
                  value: uniqueCourses.length,
                  icon: <BookOpen size={18} />,
                  color: "from-amber-500 to-orange-500",
                  glow: "amber",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="relative group rounded-2xl p-px overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative rounded-2xl bg-[#0e0e1a] p-6 flex items-center justify-between">
                    <div>
                      <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">
                        {stat.label}
                      </p>
                      <p className="text-4xl font-bold text-white tabular-nums">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Search + filter bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={15}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
                />
                <input
                  type="text"
                  placeholder="Search by name, email or phone…"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white/80 placeholder:text-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-white/8 transition-all"
                />
              </div>
              <select
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white/70 text-sm focus:outline-none focus:border-violet-500/50 transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Courses</option>
                {uniqueCourses.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Enquiries table */}
            <div className="rounded-2xl border border-white/8 bg-[#0e0e1a] overflow-hidden">
              {filteredEnquiries.length === 0 ? (
                <div className="py-16 text-center text-white/30 text-sm">
                  No enquiries found.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/8 bg-white/3">
                        {["Student", "Course", "Contact", "Date"].map((h) => (
                          <th
                            key={h}
                            className="px-6 py-3.5 text-xs font-semibold text-white/35 uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEnquiries.map((enquiry, i) => (
                        <tr
                          key={enquiry.id}
                          className="border-b border-white/5 hover:bg-white/3 transition-colors duration-150 group"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                                  avatarColors[i % avatarColors.length]
                                } flex items-center justify-center text-white text-xs font-bold shrink-0`}
                              >
                                {getInitials(enquiry.name)}
                              </div>
                              <span className="font-medium text-white/85 text-sm">
                                {enquiry.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                              {enquiry.course}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-white/45 text-sm">
                            {enquiry.email || enquiry.phone || "—"}
                          </td>
                          <td className="px-6 py-4 text-white/35 text-xs">
                            {formatDate(enquiry.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {/* ── TESTIMONIALS TAB ── */}
        {activeTab === "testimonials" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Manage Testimonials
                </h2>
                <p className="text-white/35 text-xs mt-0.5">
                  Toggle visibility or remove entries
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/8 text-white/40 text-xs">
                {testimonials.length} total
              </span>
            </div>

            {loadingTestimonials ? (
              <div className="py-16 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" />
              </div>
            ) : testimonials.length === 0 ? (
              <div className="py-16 text-center text-white/30 text-sm rounded-2xl border border-white/8 bg-[#0e0e1a]">
                No testimonials yet.
              </div>
            ) : (
              <div className="rounded-2xl border border-white/8 bg-[#0e0e1a] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/8 bg-white/3">
                        {["Student", "Class", "Rating", "Featured", "Actions"].map(
                          (h) => (
                            <th
                              key={h}
                              className="px-6 py-3.5 text-xs font-semibold text-white/35 uppercase tracking-wider"
                            >
                              {h}
                            </th>
                          )
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {testimonials.map((testimonial, i) => (
                        <tr
                          key={testimonial.id}
                          className="border-b border-white/5 hover:bg-white/3 transition-colors duration-150"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                                  avatarColors[i % avatarColors.length]
                                } flex items-center justify-center text-white text-xs font-bold shrink-0`}
                              >
                                {getInitials(testimonial.student_name)}
                              </div>
                              <span className="font-medium text-white/85 text-sm">
                                {testimonial.student_name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-white/45 text-sm">
                            {testimonial.class}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, idx) => (
                                <Star
                                  key={idx}
                                  size={12}
                                  className={
                                    idx < testimonial.rating
                                      ? "text-amber-400 fill-amber-400"
                                      : "text-white/15 fill-white/10"
                                  }
                                />
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {testimonial.is_featured ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/12 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Featured
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/35 text-xs font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
                                Hidden
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={async () => {
                                  await supabase
                                    .from("testimonials")
                                    .update({
                                      is_featured: !testimonial.is_featured,
                                    })
                                    .eq("id", testimonial.id);
                                  fetchTestimonials();
                                }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 hover:bg-violet-500/20 transition-all text-xs font-medium"
                              >
                                {testimonial.is_featured ? (
                                  <ToggleRight size={13} />
                                ) : (
                                  <ToggleLeft size={13} />
                                )}
                                Toggle
                              </button>

                              <button
                                onClick={async () => {
                                  await supabase
                                    .from("testimonials")
                                    .delete()
                                    .eq("id", testimonial.id);
                                  fetchTestimonials();
                                }}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/8 border border-red-500/20 text-red-400 hover:bg-red-500/18 transition-all text-xs font-medium"
                              >
                                <Trash2 size={12} />
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;