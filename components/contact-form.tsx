"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you! Your message has been sent successfully. We will get back to you soon."
        );
        reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-white p-0 md:p-8 rounded-2xl shadow-none md:shadow-sm md:border border-gray-100 ${className}`}>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center">
          <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
          <p className="text-green-800">{submitMessage}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center">
          <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
          <p className="text-red-800">{submitMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              First Name *
            </label>
            <input
              {...register("firstName")}
              type="text"
              id="firstName"
              className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none ${
                errors.firstName ? "border-red-500" : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Last Name *
            </label>
            <input
              {...register("lastName")}
              type="text"
              id="lastName"
              className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none ${
                errors.lastName ? "border-red-500" : "border-gray-200 hover:border-gray-300"
              }`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none ${
              errors.email ? "border-red-500" : "border-gray-200 hover:border-gray-300"
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none hover:border-gray-300"
            placeholder="+966 5X XXX XXXX"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Company Name
          </label>
          <input
            {...register("company")}
            type="text"
            id="company"
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none hover:border-gray-300"
            placeholder="Company Ltd."
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Service Interested In
          </label>
          <select
            {...register("service")}
            id="service"
            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none hover:border-gray-300"
          >
            <option value="">Select a service</option>
            <option value="manpower-supply">Manpower Supply</option>
            <option value="electrical-subcontracting">Electrical Subcontracting</option>
            <option value="mechanical-subcontracting">Mechanical Subcontracting</option>
            <option value="general-contracting">General Contracting</option>
            <option value="other">Other Inquiries</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Message *
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            className={`w-full px-5 py-3.5 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-[#0071BB] focus:border-[#0071BB] transition-all outline-none ${
              errors.message ? "border-red-500" : "border-gray-200 hover:border-gray-300"
            }`}
            placeholder="Tell us about your project requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0071BB] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#005a94] transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-900/20 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
