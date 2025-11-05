import { useEffect, useState } from 'react'

import { getCookie, setCookie } from 'typescript-cookie'

export function GoogleMapEmbed() {
  const COOKIE_CONSENT = 'user-preferences'
  const CONSENT_UPDATE_EVENT = 'consentUpdate'

  const [hasConsent, setHasConsent] = useState(false)

  const readConsent = () => {
    const consentCookie = getCookie(COOKIE_CONSENT)
    if (!consentCookie) return false
    const userPreferences = JSON.parse(consentCookie)
    return userPreferences['functional-cookies']
  }

  const grantConsent = () => {
    const consentCookie = getCookie(COOKIE_CONSENT)
    if (!consentCookie) return false
    let userPreferences = JSON.parse(consentCookie)
    userPreferences['functional-cookies'] = true
    setCookie(COOKIE_CONSENT, JSON.stringify(userPreferences), { expires: 365 })
    setHasConsent(true)
  }

  useEffect(() => {
    const handleConsentUpdate = () => {
      const newConsent = readConsent()
      setHasConsent(newConsent)
    }
    handleConsentUpdate()
    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate)

    return () => {
      window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate)
    }
  }, [])

  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-2xl shadow-md">
      {hasConsent ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.123519580124!2d4.338772911754409!3d52.07903226866742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b7f9a1249af7%3A0xfdde7b7393d18ba1!2sModelverse%20BV!5e1!3m2!1sen!2snl!4v1747067754572!5m2!1sen!2snl"
          className="h-full w-full border-0"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center-safe justify-center-safe gap-2 bg-gray-100 p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            className="size-8 stroke-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
          <h1 className="text-lg">GoogleMaps content blocked</h1>
          <p className="text-center text-sm text-black/70">
            This content is provided by GoogleMaps and requires your consent
          </p>
          <button
            className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
            onClick={grantConsent}
          >
            Accept
          </button>
        </div>
      )}
    </div>
  )
}
