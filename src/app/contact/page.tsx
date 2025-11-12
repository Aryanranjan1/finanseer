
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactForm } from '@/app/actions';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const {formState: { isSubmitting }} = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await submitContactForm(values);
    if (result.success) {
      setIsSubmitted(true);
      form.reset();
    } else {
       toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error || "There was a problem with your submission.",
      });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-28">
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                We'd love to hear from you. Whether you have a question about features, security, partnerships, or anything else, our team is ready to answer all your questions.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-muted-foreground">Fill up the form and our team will get back to you within 24 hours.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">hello@finanseer.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">+1 (555) 000-0000</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-muted-foreground">123 Insight Avenue, Data City, 45678</span>
                    </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                        <h3 className="mt-4 text-2xl font-bold">Thank You!</h3>
                        <p className="mt-2 text-muted-foreground">Your message has been sent successfully. We'll be in touch soon.</p>
                        <Button className="mt-6" onClick={() => setIsSubmitted(false)}>Send another message</Button>
                      </div>
                    ) : (
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="you@example.com" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Send Message'}
                          </Button>
                        </form>
                      </Form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
