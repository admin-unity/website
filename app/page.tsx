import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { 
  HomeIcon, 
  HeartIcon, 
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/hero-housing.jpg"
            alt="Modern accessible housing community with wheelchair ramps and wide pathways"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in text-4xl font-bold md:text-6xl">
              Building Hope, One Home at a Time
            </h1>
            <p className="mb-8 animate-slide-up text-xl text-blue-100 md:text-2xl">
              Safe, accessible housing for veterans, elderly, and disabled individuals - 
              because everyone deserves dignity and independence
            </p>
            <div className="flex animate-slide-in-right flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
              >
                <HeartIcon className="mr-2 h-6 w-6" aria-hidden="true" />
                Donate Now
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-6 w-6" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="animate-slide-up">
              <div className="mb-2 text-4xl font-bold text-blue-900">150+</div>
              <div className="text-lg text-gray-600">Families Housed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-2 text-4xl font-bold text-blue-900">75+</div>
              <div className="text-lg text-gray-600">Veterans Served</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="mb-2 text-4xl font-bold text-blue-900">50+</div>
              <div className="text-lg text-gray-600">Accessible Units Built</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Comprehensive housing solutions designed for dignity, accessibility, and independence
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* AFC Homes */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100">
                <HomeIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">AFC Homes</h3>
              <p className="mb-6 text-gray-600">
                Specialized residential facilities providing daily support and care for adults 
                who need assistance while maintaining independence.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Veteran Housing */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-red-100">
                <UserGroupIcon className="h-8 w-8 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Veteran Housing</h3>
              <p className="mb-6 text-gray-600">
                Purpose-built housing units for veterans with disabilities, featuring full 
                ADA compliance and veteran-specific support services.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Senior Living */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-green-100">
                <ClockIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Senior Living Communities</h3>
              <p className="mb-6 text-gray-600">
                Age-friendly housing developments with accessibility features, social 
                programming, and optional care services for elderly residents.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
              >
                Learn More
                <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Mission
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                UnityForLife was founded with a simple yet powerful vision: to ensure that 
                veterans, elderly individuals, and people with disabilities have access to 
                safe, dignified, and accessible housing.
              </p>
              <p className="mb-6 text-lg text-gray-600">
                Through our partnership with Numan Construction—an award-winning, 
                BBB-accredited building company—we bring together nonprofit compassion 
                with professional construction expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircleIcon className="mr-3 h-6 w-6 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Professional construction expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="mr-3 h-6 w-6 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">ADA-compliant design standards</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="mr-3 h-6 w-6 text-green-600" aria-hidden="true" />
                  <span className="text-gray-700">Comprehensive support services</span>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/community-support.jpg"
                alt="Professional construction team working on accessible housing project"
                width={800}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Join Us in Building Hope
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100">
            Every donation, every volunteer hour, and every application helps us create 
            more accessible homes where dignity and independence flourish.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            >
              <HeartIcon className="mr-2 h-6 w-6" aria-hidden="true" />
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Apply for Housing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 