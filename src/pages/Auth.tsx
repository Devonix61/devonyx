
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: "Success!",
          description: "Please check your email for verification.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate("/");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900 dark:to-brand-950 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto grid gap-20 lg:grid-cols-2">
          <div className="relative flex items-center">
            <div className="space-y-8 lg:pr-8">
              <div className="relative">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  {isSignUp ? "Join Devonyx" : "Welcome Back"}
                </h1>
                <div className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {isSignUp 
                    ? "Create an account to start building amazing products with our enterprise-grade platform." 
                    : "Sign in to your account to continue building with Devonyx."}
                </div>
              </div>
              
              <div className="relative pl-4 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-600"></div>
                  <p className="text-gray-700 dark:text-gray-300">Next-gen developer experience</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-600"></div>
                  <p className="text-gray-700 dark:text-gray-300">Enterprise-ready scalability</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-600"></div>
                  <p className="text-gray-700 dark:text-gray-300">Secure by default</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:pl-8">
            <div className="relative">
              <div className="relative backdrop-blur-xl bg-white/80 dark:bg-brand-900/80 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-900/10 overflow-hidden p-8 animate-fade-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white dark:bg-brand-800"
                      required
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white dark:bg-brand-800"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Button
                    variant="link"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-brand-600 hover:text-brand-500"
                  >
                    {isSignUp
                      ? "Already have an account? Sign in"
                      : "Don't have an account? Sign up"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
