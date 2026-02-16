import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const { data, error: signInError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                setError(signInError.message);
                return;
            }

            if (data.user) {
                navigate("/admin");
            }
        } catch (err) {
            setError("An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundColor: '#EAEFEF' }}
        >
            <div className="w-full max-w-md">
                <div 
                    className="rounded-xl p-8 shadow-xl space-y-6"
                    style={{ backgroundColor: '#FFFFFF' }}
                >
                    <div className="text-center">
                        <h1 
                            className="text-3xl font-bold"
                            style={{ color: '#25343F' }}
                        >
                            Admin Login
                        </h1>
                        <p 
                            className="mt-2"
                            style={{ color: '#BFC9D1' }}
                        >
                            Sign in to access the dashboard
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        {error && (
                            <div 
                                className="p-4 rounded-lg text-sm"
                                style={{ 
                                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                                    color: '#dc2626'
                                }}
                            >
                                {error}
                            </div>
                        )}

                        <div>
                            <label 
                                className="block text-sm font-medium mb-2"
                                style={{ color: '#25343F' }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-0"
                                style={{ 
                                    borderColor: '#BFC9D1',
                                    backgroundColor: '#EAEFEF',
                                    color: '#25343F'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = '#FF9B51'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#BFC9D1'}
                                placeholder="admin@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label 
                                className="block text-sm font-medium mb-2"
                                style={{ color: '#25343F' }}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border-2 focus:outline-none focus:ring-0"
                                style={{ 
                                    borderColor: '#BFC9D1',
                                    backgroundColor: '#EAEFEF',
                                    color: '#25343F'
                                }}
                                onFocus={(e) => e.currentTarget.style.borderColor = '#FF9B51'}
                                onBlur={(e) => e.currentTarget.style.borderColor = '#BFC9D1'}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 transition shadow-md"
                            style={{ 
                                backgroundColor: '#FF9B51',
                                color: '#25343F'
                            }}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;