import { useNavigate } from 'react-router-dom'

import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import infoFile from '@/data/about.yaml?raw'
import { parse } from 'yaml'

type Message = {
  caption: string
  message: string
}

type Button = {
  text: string
  url: string
}

type Info = {
  title: string
  message: string
  button: Button
  list: Message[]
}

const aboutBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">About ValueTracks</h1>
    <p className="text-lg">
      Empowering organizations to navigate (cyber) security and sustainability
      risks with confidence and clarity.
    </p>
  </Banner>
)

export function About() {
  const navigate = useNavigate()
  const info = parse(infoFile)
  return (
    <Layout about={true} banner={aboutBanner}>
      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold">
          We secure - you succeed!
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          {info.map((item: Info, index: number) => (
            <div
              key={index}
              className="group flex w-full basis-1/3 flex-col items-center-safe gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8"
            >
              <h1 className="text-center text-2xl font-bold text-amber-500">
                {item.title}
              </h1>
              {item.message && <p className="text-sm">{item.message}</p>}
              {item.list && (
                <ul className="list-disc pl-5 text-sm">
                  {item.list.map((listItem: Message, index: number) => (
                    <li key={index}>
                      <span className="font-bold">{listItem.caption}:</span>{' '}
                      {listItem.message}
                    </li>
                  ))}
                </ul>
              )}
              {item.button && (
                <button
                  className="transtion cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
                  onClick={() => navigate(item.button.url)}
                >
                  {item.button.text}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 text-center md:mx-32 xl:mx-64">
        <h1 className="text-center text-4xl font-bold">Testimonial</h1>
        <p className="italic">
          Modelverse is truly a gamechanger. It is a robust platform supporting
          my clients.
        </p>
        <p className="text-lg font-bold italic">
          –Chris Hazewinkel, Certified Information Security Manager
        </p>
      </div>
    </Layout>
  )
}
