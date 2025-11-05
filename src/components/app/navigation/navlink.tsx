import { Link } from 'react-router-dom'

type NavLinkProps = {
  url: string
  children: React.ReactNode
  active: boolean
}

export function NavLink({ url, children, active }: NavLinkProps) {
  return (
    <Link
      to={url}
      className={`text-md rounded-full bg-white px-4 py-2 ${
        active ? 'bg-gradient-to-br from-green-500/30 to-teal-500/30' : ''
      }`}
    >
      <span
        className={`flex flex-row items-center-safe ${
          active ? 'opacity-100' : 'opacity-70 hover:opacity-100'
        }`}
      >
        {children}
      </span>
    </Link>
  )
}
