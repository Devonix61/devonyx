
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Check, CreditCard, Lock } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('credit-card');
  const [loading, setLoading] = useState<boolean>(false);
  
  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Payment successful",
        description: "Your transaction has been processed successfully.",
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-brand-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="heading-gradient">Simple Payment Solution</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Secure, fast, and reliable payment processing for your subscription
            </p>
          </div>

          <Card className="shadow-lg border-t-4 border-t-brand-500 overflow-hidden">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-2xl">Complete Your Payment</CardTitle>
                  <CardDescription>Choose your preferred payment method</CardDescription>
                </div>
                <div className="flex items-center text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900 p-2 rounded-md">
                  <Lock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Secure Payment</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select defaultValue="credit-card" onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="amount">Amount</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - $49/month</SelectItem>
                        <SelectItem value="standard">Standard - $99/month</SelectItem>
                        <SelectItem value="premium">Premium - $199/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <div className="relative">
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" placeholder="John Smith" />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'paypal' && (
                  <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                    <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" alt="PayPal" className="mb-4 h-8" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Click the button below to complete your payment with PayPal
                    </p>
                  </div>
                )}
                
                {paymentMethod === 'bank-transfer' && (
                  <div className="p-4 border rounded-lg space-y-4">
                    <div>
                      <Label>Bank Account Details</Label>
                      <div className="grid grid-cols-1 gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex justify-between">
                          <span>Bank Name:</span>
                          <span className="font-medium">Global Bank</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Account Name:</span>
                          <span className="font-medium">Devonyx Inc.</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Account Number:</span>
                          <span className="font-medium">1234567890</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Routing Number:</span>
                          <span className="font-medium">021000021</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-md text-yellow-800 dark:text-yellow-200 text-sm">
                      Please include your name and email in the transfer notes for reference.
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-4 w-4 rounded bg-brand-100 dark:bg-brand-800 flex items-center justify-center">
                      <Check className="h-3 w-3 text-brand-600 dark:text-brand-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    I agree to the <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex justify-between items-center border-t p-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                All payments are secure and encrypted
              </div>
              <Button 
                type="submit" 
                onClick={handlePayment} 
                disabled={loading}
                className="bg-brand-600 hover:bg-brand-700"
              >
                {loading ? 'Processing...' : 'Complete Payment'} 
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Payment;
