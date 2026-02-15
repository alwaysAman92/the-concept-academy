import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "@/components/admin/AdminDashboard";

type Enquiry = {
  id: string;
  name: string;
  course: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState<string | null>(null);
  const [adminRole, setAdminRole] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setEnquiries(data || []);
      }

      setLoading(false);
    };

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();

      if (!data.session) {
        navigate("/admin-login");
        return;
      }

      const user = data.session.user;

      setAdminEmail(user.email ?? null);

      // Fetch role from profiles
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (!profileError && profileData) {
        setAdminRole(profileData.role);
      }

      await fetchEnquiries();
    };

    checkSession();
  }, [navigate]);

  return (
    <AdminDashboard
      enquiries={enquiries}
      isLoading={loading}
      adminEmail={adminEmail}
      adminRole={adminRole}
    />
  );
};

export default Admin;
