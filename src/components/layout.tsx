import { useEffect, useRef, useState } from 'react'

import { throttle } from 'lodash'

import { CookieBanner } from './app/cookies/cookieBanner'
import { Footer } from './app/footer/footer'
import { NavBar } from './app/navigation/navbar'

type LayoutProps = {
  banner?: React.ReactNode
  children?: React.ReactNode
  home?: boolean
  about?: boolean
  services?: boolean
  team?: boolean
  contact?: boolean
}

export function Layout({
  banner,
  children,
  home = false,
  about = false,
  services = false,
  team = false,
  contact = false,
}: LayoutProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Cookie consent
  const [showConsentPreferences, setShowConsentPreferences] = useState(false)

  // Scrolling behaviour
  const HEIGHT_THRESHOLD = 0
  const lastScrollY = useRef(0)
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = () => {
    if (!scrollRef.current) return

    const currentScrollY = scrollRef.current.scrollTop

    if (currentScrollY > HEIGHT_THRESHOLD) {
      if (lastScrollY.current < currentScrollY) {
        // console.log('down')
        setIsVisible(false)
      } else if (lastScrollY.current > currentScrollY) {
        // console.log('up')
        setIsVisible(true)
      }
    } else {
      setIsVisible(true)
    }

    lastScrollY.current = currentScrollY
  }
  useEffect(() => {
    const currentElement = scrollRef.current
    if (!currentElement) return

    currentElement.addEventListener('scroll', throttle(handleScroll, 150))
    return () =>
      currentElement.removeEventListener('scroll', throttle(handleScroll, 150))
  }, [])

  return (
    <>
      <CookieBanner
        preferences={showConsentPreferences}
        setPreferences={setShowConsentPreferences}
      ></CookieBanner>
      <div
        className="scrollbar-hide flex h-screen w-screen flex-col overflow-auto bg-gradient-to-br from-green-500 to-teal-500"
        ref={scrollRef}
      >
        <header
          className={`z-10 shrink-0 bg-white shadow-md transition duration-300 md:sticky md:top-0 ${!isVisible ? 'md:-translate-y-full' : 'md:translate-y-0'}`}
        >
          <NavBar
            home={home}
            about={about}
            services={services}
            team={team}
            contact={contact}
          />
        </header>

        {banner}
        <div className="relative container mx-auto flex grow flex-col justify-around gap-16 bg-gray-50 py-16 sm:rounded-t-lg">
          {children}
        </div>

        <footer className="shrink-0 bg-white">
          <Footer onManagePrivacy={setShowConsentPreferences} />
        </footer>
      </div>
    </>
  )
}
