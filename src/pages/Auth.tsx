
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { ArrowRight, Check, LockIcon, MailIcon } from 'lucide-react';

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
          options: {
            emailRedirectTo: window.location.origin,
            // Disable email confirmation
            data: {
              email_confirmed: true
            }
          }
        });
        
        if (error) throw error;
        
        // Automatically sign in after signing up (no email confirmation)
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (signInError) throw signInError;
        
        toast({
          title: "Account created!",
          description: "You're now signed in.",
        });
        navigate("/");
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
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background inspired by Prisma.io */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-full h-full bg-gradient-to-br from-brand-50/80 to-brand-100/80 dark:from-brand-900/80 dark:to-brand-950/80"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>
        
        {/* Animated blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-300/10 dark:bg-brand-700/10 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-300/10 dark:bg-purple-700/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-brand-400/10 dark:bg-brand-600/10 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          {/* Left Column: Branding & Features */}
          <div className="relative animate-fade-up">
            <a href="/" className="inline-block mb-8">
              <img 
                src="/lovable-uploads/a1ea0507-5673-4393-86ca-3b5900287a72.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </a>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400 animate-background-shine bg-[length:400%_100%]">
                {isSignUp ? "Join our platform" : "Welcome back"}
              </span>
            </h1>
            
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-10">
              {isSignUp 
                ? "Create an account to start building amazing products with our enterprise-grade platform." 
                : "Sign in to continue building with our powerful development tools."}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Enterprise-ready</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Secure and scalable for teams of any size</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Lightning fast</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Optimized for performance at every level</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center">
                  <Check className="h-5 w-5 text-brand-600 dark:text-brand-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Developer experience</h3>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Built by developers, for developers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Auth Form */}
          <div className="flex flex-col justify-center animate-fade-up animation-delay-500">
            <div className="relative max-w-md mx-auto w-full">
              <div className="relative overflow-hidden bg-white/90 dark:bg-brand-900/90 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-brand-900/10">
                {/* Prisma-like gradient strip at top */}
                <div className="h-1 w-full bg-gradient-to-r from-brand-400 via-brand-600 to-purple-500"></div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    {isSignUp ? "Create your account" : "Sign in to your account"}
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MailIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-10 bg-white/50 dark:bg-brand-800/50 border-gray-300 dark:border-gray-700 focus:ring-brand-500 focus:border-brand-500 hover:border-brand-400 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="pl-10 bg-white/50 dark:bg-brand-800/50 border-gray-300 dark:border-gray-700 focus:ring-brand-500 focus:border-brand-500 hover:border-brand-400 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white group relative overflow-hidden transition-all duration-300"
                        disabled={isLoading}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isLoading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute bottom-0 left-0 h-1 bg-white/20 w-0 group-hover:w-full transition-all duration-300"></span>
                      </Button>
                    </div>
                  </form>

                  <div className="mt-8 text-center">
                    <Button
                      variant="link"
                      onClick={() => setIsSignUp(!isSignUp)}
                      className="text-brand-600 hover:text-brand-500 text-sm"
                    >
                      {isSignUp
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign up"}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 inset-0 blur-2xl opacity-20 animate-pulse-slow">
                <div className="h-full w-full bg-gradient-to-br from-brand-400 via-brand-600 to-purple-600 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
