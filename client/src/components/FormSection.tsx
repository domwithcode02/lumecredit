import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, Loader2 } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  website: z.string().optional(), // Honeypot field
});

type FormValues = z.infer<typeof formSchema>;

interface FormSectionProps {
  id: string;
  onSuccess?: () => void;
}

export default function FormSection({ id, onSuccess }: FormSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      website: "", // Honeypot field
    },
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/subscribe", data);
      return response.json();
    },
    onSuccess: (data) => {
      setFormSubmitted(true);
      if (onSuccess) onSuccess();
    },
    onError: (error: any) => {
      let errorMessage = "An error occurred. Please try again.";
      
      if (error.message && typeof error.message === "string") {
        errorMessage = error.message;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section id={id} className="py-20 bg-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Secure Your Spot Today
          </h2>
          <p className="section-subtitle">
            Our limited-time offer is available for the first 250 subscribers only. 
            Don't miss this opportunity to transform your credit future.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-[#4A90E2] p-8 text-white flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Premium support included</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Future updates at no extra cost</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">30-day money-back guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="md:col-span-3 p-8">
                {/* Success Message */}
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank You!</h3>
                    <p className="text-slate-600 mb-2">Your spot has been reserved successfully.</p>
                    <p className="text-slate-500 text-sm">We'll contact you soon with details on how to secure your lifetime deal.</p>
                  </div>
                ) : (
                  /* Form */
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <p className="text-xl font-medium text-slate-900 mb-6">
                        Reserve Your Spot
                      </p>
                    
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your full name"
                                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-slate-700">
                              Phone Number <span className="text-slate-400 text-xs font-normal">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      {/* Honeypot field for spam protection */}
                      <div className="hidden" aria-hidden="true">
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  tabIndex={-1}
                                  autoComplete="off"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div>
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="w-full btn-secondary font-medium text-base py-3 h-auto"
                        >
                          {isPending ? (
                            <span className="flex items-center justify-center">
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Processing...
                            </span>
                          ) : (
                            "Reserve My Spot"
                          )}
                        </Button>
                      </div>
                      
                      <p className="text-xs text-slate-500 text-center">
                        By submitting, you agree to our <a href="#" className="text-[#4A90E2] hover:underline">Terms of Service</a> and <a href="#" className="text-[#4A90E2] hover:underline">Privacy Policy</a>.
                      </p>
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
