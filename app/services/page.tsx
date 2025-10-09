import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  HomeIcon, 
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  PhoneIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - UnityForLife',
  description: 'Comprehensive, accessible housing solutions for veterans, elderly, and disabled individuals. Learn about our housing services and support programs.',
  keywords: 'accessible housing services, veteran housing programs, elderly housing assistance, disability housing support',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Our Housing Services
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Comprehensive, accessible housing solutions designed to promote dignity, 
              independence, and community for veterans, elderly, and disabled individuals.
            </p>
          </div>
        </div>
      </section>

      {/* AFC Homes Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <HomeIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                AFC (Adult Foster Care) Homes
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Our AFC homes provide specialized residential facilities for adults who need 
                assistance with daily living activities while maintaining their independence 
                and dignity.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">24/7 care support and supervision</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Homelike environment with private and shared spaces</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Personalized care plans and medication management</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Social activities and community engagement</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Full accessibility features and adaptive equipment</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/services-veterans.jpg"
                alt="Comfortable AFC home living room with accessible design"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Veteran Housing Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Image
                src="/services-elderly.jpg"
                alt="Modern accessible housing with wheelchair ramp and wide pathways"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                <UserGroupIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Accessible Housing for Veterans
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Purpose-built housing units specifically designed for veterans with disabilities, 
                featuring comprehensive ADA compliance and veteran-specific support services.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Specialized Features:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Full ADA-compliant design and construction</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Veteran peer support and community building</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Direct connection to VA services and benefits</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Trauma-informed care approach</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Adaptive housing modifications as needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Senior Living Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <ClockIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Senior Living Communities
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Age-friendly housing developments designed to support aging in place, with 
                comprehensive accessibility features and optional care services.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Community Benefits:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Aging-in-place design with future adaptability</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Social engagement and community activities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Optional care services and wellness programs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Safety features and emergency response systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="mr-3 mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" aria-hidden="true" />
                    <span className="text-gray-700">Transportation and accessibility support</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/services-disability.jpg"
                alt="Senior living community common area with accessible seating"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Application Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We&apos;ve simplified our application process to make it as accessible 
              as possible while ensuring we can match you with the right housing solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                1
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Initial Contact</h3>
              <p className="mb-6 text-gray-600">
                Call our intake line or submit an online inquiry. We&apos;ll discuss your 
                housing needs and determine eligibility.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
              >
                <PhoneIcon className="mr-1 h-4 w-4" aria-hidden="true" />
                Contact Us
              </Link>
            </div>

            {/* Step 2 */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                2
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Assessment & Documentation</h3>
              <p className="mb-6 text-gray-600">
                Complete our housing needs assessment and provide required documentation 
                for income verification and care needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
              >
                <DocumentTextIcon className="mr-1 h-4 w-4" aria-hidden="true" />
                Get Application
              </Link>
            </div>

            {/* Step 3 */}
            <div className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                3
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Placement & Support</h3>
              <p className="mb-6 text-gray-600">
                Once approved, we&apos;ll work with you to find the right housing match 
                and provide ongoing support during your transition.
              </p>
              <div className="font-medium text-blue-600">
                Ongoing Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Eligibility Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Our housing services are designed to serve those who need them most, 
                with sliding-scale pricing based on income and care needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">General Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Income verification and financial assessment
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Medical documentation of care needs (if applicable)
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Commitment to community guidelines and respect
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Background check for safety of all residents
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Priority Populations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Veterans with service-connected disabilities
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Adults with physical or cognitive disabilities
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Elderly individuals needing accessible housing
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" aria-hidden="true" />
                    Those experiencing housing instability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Contact us today to learn more about our housing services and begin 
            your application process. We&apos;re here to help you find a safe, 
            accessible home where you can thrive.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            >
              Apply for Housing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <PhoneIcon className="mr-2 h-6 w-6" aria-hidden="true" />
              Call Us Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              <HeartIcon className="mr-2 h-6 w-6" aria-hidden="true" />
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}