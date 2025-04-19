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
import { Check } from "lucide-react";

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

  const { mutate, isPending, isError, error } = useMutation({
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
    <section id={id} className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-gray-200">
          <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-center mb-2">
            Reserve Your Spot
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Complete the form below to secure your exclusive lifetime deal.
          </p>
          
          {/* Success Message */}
          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6">
              <div className="w-16 h-16 bg-[#4CAF50] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-[#4CAF50]" />
              </div>
              <h3 className="font-['Poppins',sans-serif] font-semibold text-xl text-[#4CAF50] mb-2">Thank You!</h3>
              <p className="text-gray-700 mb-1">Your spot has been reserved successfully.</p>
              <p className="text-gray-600 text-sm">We'll contact you soon with details on how to secure your lifetime deal.</p>
            </div>
          ) : (
            /* Form */
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="Enter your phone number (optional)"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
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
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full sm:w-auto bg-[#F5C518] hover:bg-yellow-500 text-[#333] font-['Poppins',sans-serif] font-bold px-8 py-3 rounded-lg text-lg shadow-md transition hover:shadow-lg h-auto"
                  >
                    {isPending ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#333]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Reserve My Spot"
                    )}
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting, you agree to our <a href="#" className="text-[#4A90E2] hover:underline">Terms of Service</a> and <a href="#" className="text-[#4A90E2] hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
