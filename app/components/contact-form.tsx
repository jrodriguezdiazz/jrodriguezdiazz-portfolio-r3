"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  XCircle,
  Loader2,
  MapPin,
  Phone,
  Globe,
  Linkedin,
  Github,
  Calendar,
  Clock
} from "lucide-react"
import { useState, useRef } from "react"
import * as React from "react"

type FormStatus = "idle" | "pending" | "success" | "error"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}

interface ValidationError {
  field: string
  message: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "jrodriguezdiazz@outlook.com",
    href: "mailto:jrodriguezdiazz@outlook.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Espaillat, Dominican Republic"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jrodriguezdiazz",
    href: "https://linkedin.com/in/jrodriguezdiazz"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jrodriguezdiazz",
    href: "https://github.com/jrodriguezdiazz"
  }
]

const responseTime = "Usually responds within 24 hours"

// Mock submit function - replace with your actual implementation
const submitContactForm = async (formData: FormData): Promise<{ message: string; success: boolean }> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Simulate random success/failure for demo
  const success = Math.random() > 0.3

  if (success) {
    return { message: "Thank you for your message! I'll get back to you soon.", success: true }
  } else {
    throw new Error("Failed to send message")
  }
}

const validateForm = (formData: FormData): ValidationError[] => {
  const errors: ValidationError[] = []

  if (!formData.name.trim()) {
    errors.push({ field: "name", message: "Name is required" })
  } else if (formData.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" })
  }

  if (!formData.email.trim()) {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push({ field: "email", message: "Please enter a valid email address" })
  }

  if (!formData.subject.trim()) {
    errors.push({ field: "subject", message: "Subject is required" })
  }

  if (!formData.message.trim()) {
    errors.push({ field: "message", message: "Message is required" })
  } else if (formData.message.trim().length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters" })
  }

  return errors
}

interface FormFieldProps {
  label: string
  icon: React.ComponentType<{ className?: string }>
  error?: string
  required?: boolean
  children: React.ReactNode
}

const FormField: React.FC<FormFieldProps> = ({ label, icon: Icon, error, required, children }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm font-medium">
      <Icon className="w-4 h-4 text-muted-foreground" />
      {label}
      {required && <span className="text-destructive">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-sm text-destructive flex items-center gap-1">
        <XCircle className="w-3 h-3" />
        {error}
      </p>
    )}
  </div>
)

interface ContactInfoItemProps {
  info: ContactInfo
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ info }) => {
  const content = (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
      <div className="p-2 bg-primary/10 rounded-lg">
        <info.icon className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium">{info.label}</p>
        <p className="text-sm text-muted-foreground">{info.value}</p>
      </div>
    </div>
  )

  if (info.href) {
    return (
      <a href={info.href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    )
  }

  return content
}

interface StatusMessageProps {
  status: FormStatus
  message: string
}

const StatusMessage: React.FC<StatusMessageProps> = ({ status, message }) => {
  if (status === "idle") return null

  const isSuccess = status === "success"
  const Icon = isSuccess ? CheckCircle2 : XCircle
  const className = isSuccess
    ? "text-green-700 bg-green-50 border-green-200"
    : "text-destructive bg-destructive/10 border-destructive/20"

  return (
    <div className={`p-3 rounded-lg border flex items-center gap-2 ${className}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<ValidationError[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear field-specific error when user starts typing
    if (errors.some(error => error.field === field)) {
      setErrors(prev => prev.filter(error => error.field !== field))
    }
  }

  const handleSubmit = async () => {
    // Validate form
    const validationErrors = validateForm(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus("pending")
    setErrors([])

    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      setStatus("success")

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)

    } catch (error) {
      setMessage("Something went wrong. Please try again or contact me directly.")
      setStatus("error")
    }
  }

  const characterCount = formData.message.length
  const maxCharacters = 500
  const isNearLimit = characterCount > maxCharacters * 0.8

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-muted-foreground">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact Information */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </div>

            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}
            </div>

            <div className="mt-6 p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{responseTime}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Send a Message</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Name"
                icon={User}
                error={getFieldError("name")}
                required
              >
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  className={getFieldError("name") ? "border-destructive" : ""}
                />
              </FormField>

              <FormField
                label="Email"
                icon={Mail}
                error={getFieldError("email")}
                required
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  className={getFieldError("email") ? "border-destructive" : ""}
                />
              </FormField>
            </div>

            <FormField
              label="Subject"
              icon={MessageSquare}
              error={getFieldError("subject")}
              required
            >
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                placeholder="What's this about?"
                className={getFieldError("subject") ? "border-destructive" : ""}
              />
            </FormField>

            <FormField
              label="Message"
              icon={MessageSquare}
              error={getFieldError("message")}
              required
            >
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell me about your project, question, or just say hello!"
                className={`min-h-[120px] ${getFieldError("message") ? "border-destructive" : ""}`}
                maxLength={maxCharacters}
              />
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-muted-foreground">
                  Minimum 10 characters
                </span>
                <span className={`text-xs ${isNearLimit ? "text-orange-600" : "text-muted-foreground"}`}>
                  {characterCount}/{maxCharacters}
                </span>
              </div>
            </FormField>

            <Button
              onClick={handleSubmit}
              className="w-full"
              disabled={status === "pending"}
            >
              {status === "pending" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>

            <StatusMessage status={status} message={message} />
          </div>
        </Card>
      </div>
    </div>
  )
}
