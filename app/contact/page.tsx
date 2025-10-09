'use client'

import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  UserGroupIcon,
  HomeIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'volunteer' | 'housing'>('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    // Volunteer specific
    availability: '',
    skills: '',
    // Housing specific
    housingType: '',
    urgency: '',
    accessibility: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your submission! We will contact you within 24 hours.'
        })
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          availability: '',
          skills: '',
          housingType: '',
          urgency: '',
          accessibility: ''
        })
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again or contact us directly.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Ready to make a difference? Whether you want to donate, volunteer, 
              or apply for housing, we&apos;re here to help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* Status Messages */}
      {submitStatus.type && (
        <section className="bg-white py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className={`rounded-lg p-6 ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center">
                {submitStatus.type === 'success' ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ExclamationCircleIcon className="h-6 w-6 text-red-600 flex-shrink-0" aria-hidden="true" />
                )}
                <p className={`ml-3 text-lg font-medium ${
                  submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Options */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Quick Contact */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <PhoneIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Call Us</h3>
              <p className="mb-4 text-gray-600">
                Speak directly with our intake team Monday-Friday, 9am-5pm EST
              </p>
              <a 
                href="tel:844-864-8945" 
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                (844) UNITY-4-LIFE
              </a>
              <p className="text-sm text-gray-500 mt-1">
                844-864-8945
              </p>
            </div>

            {/* Email Contact */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <EnvelopeIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Email Us</h3>
              <p className="mb-4 text-gray-600">
                Send us a message and we&apos;ll respond within 24 hours
              </p>
              <a 
                href="mailto:info@unityforlife.org" 
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                info@unityforlife.org
              </a>
            </div>

            {/* Office Hours */}
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                <ClockIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Office Hours</h3>
              <div className="text-gray-600">
                <p>Monday - Friday</p>
                <p className="font-semibold">9:00 AM - 5:00 PM EST</p>
                <p className="mt-2 text-sm">Emergency housing inquiries welcome 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Forms Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the option that best describes how you&apos;d like to get involved
            </p>
          </div>

          {/* Form Type Selector */}
          <div className="mb-8 flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button
              onClick={() => setFormType('contact')}
              className={`inline-flex items-center rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                formType === 'contact'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <EnvelopeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              General Contact
            </button>
            <button
              onClick={() => setFormType('volunteer')}
              className={`inline-flex items-center rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                formType === 'volunteer'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <UserGroupIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Volunteer
            </button>
            <button
              onClick={() => setFormType('housing')}
              className={`inline-flex items-center rounded-lg px-6 py-3 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                formType === 'housing'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <HomeIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Apply for Housing
            </button>
          </div>

          {/* Contact Form */}
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Conditional Fields */}
              {formType === 'contact' && (
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="What can we help you with?"
                  />
                </div>
              )}

              {formType === 'volunteer' && (
                <>
                  <div>
                    <label htmlFor="availability" className="mb-2 block text-sm font-medium text-gray-700">
                      Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="skills" className="mb-2 block text-sm font-medium text-gray-700">
                      Skills & Interests
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="e.g., Construction, administrative, events, fundraising"
                    />
                  </div>
                </>
              )}

              {formType === 'housing' && (
                <>
                  <div>
                    <label htmlFor="housingType" className="mb-2 block text-sm font-medium text-gray-700">
                      Housing Type Needed
                    </label>
                    <select
                      id="housingType"
                      name="housingType"
                      value={formData.housingType}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select housing type</option>
                      <option value="afc">AFC (Adult Foster Care) Home</option>
                      <option value="veteran">Veteran Housing</option>
                      <option value="senior">Senior Living Community</option>
                      <option value="unsure">Not sure - need guidance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="mb-2 block text-sm font-medium text-gray-700">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="">Select urgency level</option>
                      <option value="immediate">Immediate (within 30 days)</option>
                      <option value="soon">Soon (within 3 months)</option>
                      <option value="planning">Planning ahead (6+ months)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="accessibility" className="mb-2 block text-sm font-medium text-gray-700">
                      Accessibility Needs
                    </label>
                    <input
                      type="text"
                      id="accessibility"
                      name="accessibility"
                      value={formData.accessibility}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="e.g., Wheelchair accessible, visual impairment support, etc."
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder={
                    formType === 'contact' 
                      ? "How can we help you?" 
                      : formType === 'volunteer'
                      ? "Tell us about your interest in volunteering and how you'd like to help"
                      : "Please describe your housing situation and needs in detail"
                  }
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-6 w-6 animate-spin rounded-full border-2 border-white border-b-transparent" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <DocumentTextIcon className="mr-2 h-6 w-6" aria-hidden="true" />
                      Submit {formType === 'contact' ? 'Message' : formType === 'volunteer' ? 'Volunteer Application' : 'Housing Application'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600">
              Find helpful links and information for veterans, seniors, and individuals with disabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Veteran Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">VA Benefits Information</a></li>
                <li><a href="#" className="hover:text-blue-600">Veteran Housing Assistance</a></li>
                <li><a href="#" className="hover:text-blue-600">Disability Compensation</a></li>
                <li><a href="#" className="hover:text-blue-600">Mental Health Support</a></li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Senior Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Medicare Information</a></li>
                <li><a href="#" className="hover:text-blue-600">Social Security Benefits</a></li>
                <li><a href="#" className="hover:text-blue-600">Senior Transportation</a></li>
                <li><a href="#" className="hover:text-blue-600">Meal Programs</a></li>
              </ul>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">Disability Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">ADA Resources</a></li>
                <li><a href="#" className="hover:text-blue-600">Accessibility Grants</a></li>
                <li><a href="#" className="hover:text-blue-600">Assistive Technology</a></li>
                <li><a href="#" className="hover:text-blue-600">Independent Living Centers</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}