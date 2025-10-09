import Link from 'next/link'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  HeartIcon 
} from '@heroicons/react/24/outline'

// Social media icons - using simple SVG icons since Heroicons doesn't have social media icons
const FacebookIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/UnityForLifeOrg',
    ariaLabel: 'Follow us on Facebook',
    icon: FacebookIcon
  },
  {
    name: 'Instagram', 
    href: 'https://instagram.com/UnityForLifeOrg',
    ariaLabel: 'Follow us on Instagram',
    icon: InstagramIcon
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/unityforlife',
    ariaLabel: 'Connect with us on LinkedIn',
    icon: LinkedInIcon
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/UnityForLifeOrg',
    ariaLabel: 'Subscribe to our YouTube channel',
    icon: YouTubeIcon
  }
]



export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-blue-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold">UnityForLife</h2>
            <p className="mb-4 text-lg leading-relaxed text-blue-100">
              Building safe, accessible homes and communities for veterans, the elderly, 
              and people with disabilities—uniting everyone &quot;under one roof&quot; where 
              dignity, independence, and compassion reign.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <div>
                  <a 
                    href="tel:844-864-8945" 
                    className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  >
                    (844) UNITY-4-LIFE
                  </a>
                  <p className="text-xs text-blue-200 mt-1">
                    844-864-8945
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-300" aria-hidden="true" />
                <a 
                  href="mailto:info@unityforlife.org" 
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  info@unityforlife.org
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services" 
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Apply for Housing
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded text-blue-100 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership & Bottom Info */}
        <div className="mt-8 border-t border-blue-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-100">
                Construction Partner: <span className="font-semibold">Numan Construction</span> - 
                Award-winning, BBB-accredited building expertise
              </p>
              <p className="text-blue-100 text-sm mt-1">
                © {currentYear} UnityForLife.org - 501(c)(3) Nonprofit Organization
              </p>
              <p className="text-blue-100 text-sm mt-1">
                Nonprofit Housing Development Website made with 💚 by{' '}
                <a 
                  href="https://gmgwebdesign.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded"
                >
                  Gator Media Group
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <HeartIcon className="h-4 w-4 text-red-400" aria-hidden="true" />
              <span className="text-sm">Building hope, one home at a time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}