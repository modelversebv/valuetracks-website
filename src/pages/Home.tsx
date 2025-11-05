import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import infoFile from '@/data/home.yaml?raw'
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

const homeBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">
      Oversight and Control of all your Cyber Risks
    </h1>
    <p className="text-lg">
      We deliver tailored and effective cybersecurity services to help our
      clients navigate the evolving threats and increasing regulatory pressures.
    </p>
  </Banner>
)

export function Home() {
  const info = parse(infoFile)

  return (
    <Layout home={true} banner={homeBanner}>
      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold">Why ValueTracks?</h1>
        <div className="flex w-full flex-col gap-8 lg:flex-row">
          {info.map((item: Info, index: number) => (
            <div
              key={index}
              className="flex w-full basis-1/3 flex-col items-center-safe gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8"
            >
              <h1 className="text-center text-2xl font-bold text-amber-500">
                {item.title}
              </h1>
              {item.message && <p className="text-sm">{item.message}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold">Our Approach</h1>
        <div className="flex w-full flex-col gap-8 lg:flex-row xl:mx-auto xl:justify-center-safe">
          <div className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 lg:basis-1/2 xl:basis-1/3">
            <div className="flex flex-row text-2xl font-bold">
              <div className="mr-2 flex items-center-safe justify-center-safe text-4xl text-amber-500">
                1
              </div>
              <div className="flex flex-wrap items-center-safe">
                Protecting Success
              </div>
            </div>
            <ul className="w-full list-disc pl-5 text-sm">
              <li>Top-down Risk based Strategies</li>
              <li>Capability-driven Roadmaps</li>
              <li>Automated Control Selections</li>
              <li>Control and Reporting Automation</li>
            </ul>
          </div>
          <div className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 lg:basis-1/2 xl:basis-1/3">
            <div className="flex flex-row text-2xl font-bold">
              <div className="mr-2 flex items-center-safe justify-center-safe text-4xl text-amber-500">
                2
              </div>
              <div className="flex flex-wrap items-center-safe">
                Protecting Investments
              </div>
            </div>
            <ul className="w-full list-disc pl-5 text-sm">
              <li>Due Dilligence on Security and Sustainability</li>
              <li>Strategic Integration Advice</li>
              <li>Portfolio and Compliance Management</li>
              <li>Intelectual Property Protection</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 text-center md:mx-32 xl:mx-64">
        <h1 className="text-center text-4xl font-bold">How?</h1>
        <p className="text-center text-sm">
          We provide our digitally-enabled advisory services using the unique
          Modelverse security platform
        </p>
        <button
          className="transtion cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
          onClick={() => (window.location.href = 'https://modelverse.online/')}
        >
          Explore
        </button>
      </div>

      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 text-center md:mx-32 xl:mx-64">
        <h1 className="text-center text-4xl font-bold">Testimonial</h1>
        <p className="italic">
          Reshma and the Team helped us to close our gaps.
        </p>
        <p className="text-lg font-bold italic">
          -Christiaan Rood, CEO LeydenJar Technologies
        </p>
      </div>
    </Layout>
  )
}
