import { useNavigate } from 'react-router-dom'

// Data
import { BuildNumber } from '@/components/buildNumber'
import footerFile from '@/data/footer.yaml?raw'
import { parse } from 'yaml'

type Info = {
  dob: string
  company: string
  cocNumber: string
  linkedinUrl: string
}

type FooterProps = {
  onManagePrivacy: (value: boolean) => void
}

export function Footer({ onManagePrivacy }: FooterProps) {
  const navigate = useNavigate()
  const footer: Info = parse(footerFile)
  const year: number = new Date().getFullYear()

  return (
    <div className="flex h-fit flex-col items-center-safe justify-center-safe gap-4 bg-white p-4 text-center">
      {/* Footer */}
      <div className="text-sm text-black/50">
        © {footer.dob} - {year}. {footer.company} | CoC {footer.cocNumber} -
        All rights reserved. (
        <BuildNumber />)
      </div>
      <div
        className="cursor-pointer text-sm text-black/50 hover:text-black"
        onClick={() => onManagePrivacy(true)}
      >
        Manage Privacy Preferences
      </div>
      <div className="flex flex-row items-center-safe justify-center-safe gap-4 text-amber-500">
        <button className="cursor-pointer" onClick={() => navigate('/contact')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </button>
        <button
          className="cursor-pointer"
          onClick={() => (window.location.href = footer.linkedinUrl)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            strokeWidth={2}
            className="size-6"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
