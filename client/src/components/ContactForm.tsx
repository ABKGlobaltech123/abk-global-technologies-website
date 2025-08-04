import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isFormValid = formData.name.length >= 2 && 
                     formData.email.includes('@') && 
                     formData.subject.length >= 5 && 
                     formData.message.length >= 10;

  return (
    <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm fade-in-right">
      <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
      
      {/* Setup Instructions - Hidden for production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
          <p className="text-yellow-100 text-sm">
            <strong>Setup Required:</strong> To activate this contact form, please:
            <br />1. Sign up at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-200">formspree.io</a>
            <br />2. Create a new form and get your form ID
            <br />3. Replace "YOUR_FORM_ID" in the code with your actual form ID
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Input
              type="text"
              name="name"
              placeholder="Your Name (min 2 characters)"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/90 focus:outline-none transition-all duration-300 ${
                formData.name.length >= 2 ? 'border-green-400 focus:border-green-300' : 'border-white/30 focus:border-white'
              }`}
              required
            />
            {formData.name.length > 0 && formData.name.length < 2 && (
              <p className="text-red-300 text-xs mt-1">Name must be at least 2 characters</p>
            )}
          </div>
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/90 focus:outline-none transition-all duration-300 ${
                formData.email.includes('@') && formData.email.length > 5 ? 'border-green-400 focus:border-green-300' : 'border-white/30 focus:border-white'
              }`}
              required
            />
            {formData.email.length > 0 && !formData.email.includes('@') && (
              <p className="text-red-300 text-xs mt-1">Please enter a valid email address</p>
            )}
          </div>
        </div>
        <div className="relative">
          <Input
            type="text"
            name="subject"
            placeholder="Subject (min 5 characters)"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/90 focus:outline-none transition-all duration-300 ${
              formData.subject.length >= 5 ? 'border-green-400 focus:border-green-300' : 'border-white/30 focus:border-white'
            }`}
            required
          />
          {formData.subject.length > 0 && formData.subject.length < 5 && (
            <p className="text-red-300 text-xs mt-1">Subject must be at least 5 characters</p>
          )}
        </div>
        <div className="relative">
          <Textarea
            name="message"
            rows={4}
            placeholder="Your Message (min 10 characters)"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/90 focus:outline-none transition-all duration-300 resize-none ${
              formData.message.length >= 10 ? 'border-green-400 focus:border-green-300' : 'border-white/30 focus:border-white'
            }`}
            required
          />
          {formData.message.length > 0 && formData.message.length < 10 && (
            <p className="text-red-300 text-xs mt-1">Message must be at least 10 characters</p>
          )}
          <div className="text-right mt-1">
            <span className={`text-xs ${formData.message.length >= 10 ? 'text-green-300' : 'text-white/60'}`}>
              {formData.message.length}/10 characters
            </span>
          </div>
        </div>
        {/* Form Status Indicator */}
        {isFormValid && (
          <div className="text-center">
            <p className="text-green-300 text-sm mb-2">✓ Form is ready to submit!</p>
          </div>
        )}
        
        <Button
          type="submit"
          disabled={isSubmitting || !isFormValid}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isFormValid 
              ? 'bg-white text-primary hover:bg-neutral-100 hover:scale-105' 
              : 'bg-white/50 text-primary/70 cursor-not-allowed'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : isFormValid ? (
            'Send Message'
          ) : (
            'Complete all fields to send'
          )}
        </Button>
      </form>
    </div>
  );
}
