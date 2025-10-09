import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - UnityForLife',
  description: 'Get in touch with UnityForLife for housing assistance, volunteer opportunities, or donations. Apply for accessible housing for veterans, elderly, and disabled individuals.',
  keywords: 'contact UnityForLife, housing assistance application, volunteer opportunities, nonprofit housing contact',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}