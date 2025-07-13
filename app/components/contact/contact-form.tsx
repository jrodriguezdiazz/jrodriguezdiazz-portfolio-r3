"use client";

import { Mail, User, MessageSquare, Send, Loader2, Clock } from "lucide-react";
import { useState } from "react";
import * as React from "react";
import { FormStatus } from "react-dom";

import { ContactInfoItem } from "./contact-info-item";
import { FormField } from "./form-field";

import { StatusMessage } from "@/app/components/contact/status-message";
import { CONTACT_INFO, RESPONSE_TYPE } from "@/lib/constants";
import { ValidationError } from "@/lib/types";
import { event } from "@/lib/gtag";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ValidationError[]>([]);
  //  const formRef = useRef<HTMLFormElement>(null);

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear field-specific error when user starts typing
    if (errors.some(error => error.field === field)) {
      setErrors(prev => prev.filter(error => error.field !== field));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("pending");
    setErrors([]);

    try {
      event("contact_form_submit", {
        event_category: "engagement",
        event_label: "contact_form",
      });
      const response = await submitContactForm(formData);
      setMessage(response.message);
      setStatus("success");

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setMessage(
        `Something went wrong. Please try again or contact me directly., ${error instanceof Error ? error.message : "Unknown error"}`
      );
      setStatus("error");
    }
  };

  const characterCount = formData.message.length;
  const maxCharacters = 500;
  const isNearLimit = characterCount > maxCharacters * 0.8;

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          I'd love to hear from you. Send me a message and I'll respond as soon
          as possible.
        </p>
      </div>

      <div className='grid gap-6 lg:grid-cols-2'>
        {/* Contact Information */}
        <Card className='p-6'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Mail className='w-5 h-5 text-primary' />
              <h2 className='text-xl font-semibold'>Contact Information</h2>
            </div>

            <div className='space-y-2'>
              {CONTACT_INFO.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}
            </div>

            <div className='mt-6 p-3 bg-muted/30 rounded-lg'>
              <div className='flex items-center gap-2 text-sm'>
                <Clock className='w-4 h-4 text-muted-foreground' />
                <span className='text-muted-foreground'>{RESPONSE_TYPE}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className='p-6'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 mb-4'>
              <MessageSquare className='w-5 h-5 text-primary' />
              <h2 className='text-xl font-semibold'>Send a Message</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <FormField
                label='Name'
                icon={User}
                error={getFieldError("name")}
                required
              >
                <Input
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={e => handleInputChange("name", e.target.value)}
                  placeholder='Your full name'
                  className={getFieldError("name") ? "border-destructive" : ""}
                />
              </FormField>

              <FormField
                label='Email'
                icon={Mail}
                error={getFieldError("email")}
                required
              >
                <Input
                  id='email'
                  name='email'
                  type='email'
                  value={formData.email}
                  onChange={e => handleInputChange("email", e.target.value)}
                  placeholder='your.email@example.com'
                  className={getFieldError("email") ? "border-destructive" : ""}
                />
              </FormField>
            </div>

            <FormField
              label='Subject'
              icon={MessageSquare}
              error={getFieldError("subject")}
              required
            >
              <Input
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={e => handleInputChange("subject", e.target.value)}
                placeholder="What's this about?"
                className={getFieldError("subject") ? "border-destructive" : ""}
              />
            </FormField>

            <FormField
              label='Message'
              icon={MessageSquare}
              error={getFieldError("message")}
              required
            >
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={e => handleInputChange("message", e.target.value)}
                placeholder='Tell me about your project, question, or just say hello!'
                className={`min-h-[120px] ${getFieldError("message") ? "border-destructive" : ""}`}
                maxLength={maxCharacters}
              />
              <div className='flex justify-between items-center mt-1'>
                <span className='text-xs text-muted-foreground'>
                  Minimum 10 characters
                </span>
                <span
                  className={`text-xs ${isNearLimit ? "text-orange-600" : "text-muted-foreground"}`}
                >
                  {characterCount}/{maxCharacters}
                </span>
              </div>
            </FormField>

            <Button
              onClick={handleSubmit}
              className='w-full'
              disabled={status === "pending"}
            >
              {status === "pending" ? (
                <>
                  <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                  Sending...
                </>
              ) : (
                <>
                  <Send className='w-4 h-4 mr-2' />
                  Send Message
                </>
              )}
            </Button>

            <StatusMessage status={status} message={message} />
          </div>
        </Card>
      </div>
    </div>
  );
}
