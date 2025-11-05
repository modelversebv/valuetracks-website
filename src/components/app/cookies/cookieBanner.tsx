import { useEffect, useState } from 'react'

import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import infoFile from '@/data/cookies.yaml?raw'
import { getCookie, setCookie } from 'typescript-cookie'
import { parse } from 'yaml'

import CustomSwitch from '../misc/customSwitch'

type PurposeCardProps = {
  children: React.ReactNode
  title: string
  state?: boolean
  disabled?: boolean
  necessary?: boolean
  onToggle?: (value: boolean) => void
}

const PurposeCard = ({
  children,
  title,
  state = false,
  disabled = false,
  necessary = false,
  onToggle,
}: PurposeCardProps) => {
  return (
    <div className="flex flex-col gap-2 border-t-2 py-2">
      <div className="flex flex-row justify-between">
        <div>
          {title}{' '}
          {necessary && (
            <Badge className="ml-2 bg-gradient-to-br from-green-500 to-teal-500 font-bold">
              Necessary
            </Badge>
          )}
        </div>
        <CustomSwitch state={state} disabled={disabled} onChange={onToggle} />
      </div>
      <p className="text-sm text-black/70">{children}</p>
    </div>
  )
}

type Cookie = {
  title: string
  desc: string
}

type CookieBannerProps = {
  preferences: boolean
  setPreferences: (value: boolean) => void
}

export function CookieBanner({
  preferences,
  setPreferences,
}: CookieBannerProps) {
  const info = parse(infoFile)
  const COOKIE_CONSENT = 'user-preferences'
  const CONSENT_UPDATE_EVENT = 'consentUpdate'

  // Banner and Animation states
  const [showBanner, setShowBanner] = useState(() => {
    const consentCookie = getCookie(COOKIE_CONSENT)
    if (!consentCookie) return true
    return false
  })
  const [animateBanner, setanimateBanner] = useState(false)

  const [showPreferences, setShowPreferences] = useState(preferences)
  const [animatePreferences, setAnimatePreferences] = useState(false)

  // Cookie states
  const [choices, setChoices] = useState<boolean[]>(() => info.map(() => false))
  const setChoiceAt = (index: number, value?: boolean) => {
    setChoices((prev) => {
      const next = [...prev]
      next[index] = typeof value === 'boolean' ? value : !next[index]
      return next
    })
  }

  // Button functions
  const handleSave = () => {
    const consent = info.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = choices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleAccept = () => {
    const newChoices = new Array(choices.length).fill(true)
    setChoices(newChoices)
    const consent = info.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = newChoices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleReject = () => {
    const newChoices = new Array(choices.length).fill(false)
    setChoices(newChoices)
    const consent = info.reduce(
      (acc: Record<string, boolean>, cookie: Cookie, index: number) => {
        acc[cookie.title.toLowerCase().replace(' ', '-')] = newChoices[index]
        return acc
      },
      {}
    )
    setCookie(COOKIE_CONSENT, JSON.stringify(consent), { expires: 365 })
    setShowBanner(false)
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATE_EVENT))
    setPreferences(false)
  }

  const handleManage = () => {
    setShowPreferences(true)
    requestAnimationFrame(() => setAnimatePreferences(true))
  }

  useEffect(() => {
    requestAnimationFrame(() => setanimateBanner(true))
  }, [])

  useEffect(() => {
    const handlePreferencesChange = () => {
      console.log('preferences')
      if (preferences) {
        const consentCookie = getCookie(COOKIE_CONSENT)
        if (!consentCookie) return
        const userPreferences = JSON.parse(consentCookie)

        const newChoices = info.map((cookie: Cookie) => {
          const key = cookie.title.toLowerCase().replace(' ', '-')
          return userPreferences[key] ?? false
        })
        setChoices(newChoices)

        setShowBanner(true)
        setShowPreferences(true)
        requestAnimationFrame(() => setAnimatePreferences(true))
      }
    }
    handlePreferencesChange()
  }, [preferences])

  return (
    <div
      className={`fixed top-0 z-999 flex h-full w-full items-center-safe justify-center-safe bg-black/50 ${showBanner ? 'block' : 'hidden'}`}
    >
      {!showPreferences ? (
        <div
          className={`fixed bottom-0 w-full bg-white transition-transform duration-1000 ${!animateBanner ? 'translate-y-full' : '-translate-y-0'}`}
        >
          <div className="container mx-auto flex flex-col gap-4 p-8 md:flex-row">
            <div className="flex flex-col gap-4 md:basis-2/3 lg:basis-3/4 xl:basis-4/5 2xl:basis-5/6">
              <h1 className="text-xl font-bold text-amber-500">
                Manage your cookie preferences
              </h1>
              <p className="text-sm text-black/70">
                This website uses two third-party services: Google Maps (for
                location features) and YouTube (for embedded videos). These
                services may set cookies and process your data. By clicking
                'Accept', you consent to this; otherwise, content from these two
                services will not be accessible unless you later decide to
                modify your preferences.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
              <button
                className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
                onClick={handleAccept}
              >
                Accept all
              </button>
              <button
                className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
                onClick={handleReject}
              >
                Reject non-essential
              </button>
              <button
                className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 p-1 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
                onClick={handleManage}
              >
                <div className="w-full rounded-full bg-white px-3 py-1">
                  <span className="bg-gradient-to-br from-green-500 to-teal-500 bg-clip-text font-bold text-transparent">
                    Manage preferences
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto flex max-w-2xl flex-col bg-white transition-transform duration-1000 md:rounded-md ${animatePreferences ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        >
          <div className="flex flex-row border-b-2 px-8 py-4">
            <img src="icon.png" alt="Modelverse" className="h-8" />
          </div>
          <ScrollArea className="h-96 max-h-96 px-8 py-4">
            <div className="flex flex-col gap-4 overflow-hidden">
              <h1 className="text-xl font-bold text-amber-500">
                Manage your cookie preferences
              </h1>
              <p className="text-sm text-black/70">
                This website uses two third-party services: Google Maps (for
                location features) and YouTube (for embedded videos). These
                services may set cookies and process your data. By clicking
                'Accept', you consent to this; otherwise, content from these two
                services will not be accessible unless you later decide to
                modify your preferences.
              </p>
              <h1 className="font-bold text-amber-500">Purposes</h1>
              <PurposeCard
                title="Essential Cookies"
                state={true}
                disabled={true}
                necessary={true}
              >
                These cookies are essential for the functioning of our website
                and can not be deactivated.
              </PurposeCard>
              {info.map((cookie: Cookie, index: number) => (
                <PurposeCard
                  title={cookie.title}
                  key={index}
                  state={choices[index]}
                  onToggle={() => setChoiceAt(index)}
                >
                  {cookie.desc}
                </PurposeCard>
              ))}
            </div>
          </ScrollArea>
          <div className="flex flex-row justify-between gap-4 border-t-2 px-8 py-4">
            <div className="flex flex-row gap-4 md:w-66/100 lg:w-fit">
              <button
                className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50 md:w-50/100 lg:w-fit"
                onClick={handleAccept}
              >
                Accept all
              </button>
              <button
                className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50 md:w-50/100 lg:w-fit"
                onClick={handleReject}
              >
                Reject all
              </button>
            </div>

            <button
              className="cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 p-1 font-bold text-white transition duration-300 outline-none hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50 md:w-33/100 lg:w-fit"
              onClick={handleSave}
            >
              <div className="w-full rounded-full bg-white px-3 py-1">
                <span className="bg-gradient-to-br from-green-500 to-teal-500 bg-clip-text font-bold text-transparent">
                  Save
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
