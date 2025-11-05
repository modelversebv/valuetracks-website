import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'

const BrochureForm = () => {
  const email = 'partners@valuetracks.io'
  const subject = 'Request TTX paper'
  const [body, setBody] = useState('')

  return (
    <form action="" className="flex w-full flex-col gap-8 text-sm">
      <div className="flex flex-col gap-2">
        <label htmlFor="to" className="font-bold">
          To:
        </label>
        <input
          id="to"
          type="email"
          value="partners@valuetracks.io"
          className="rounded-md border-2 bg-white px-4 py-2 outline-0 focus:border-amber-500!"
          disabled
        />
        {/* <label htmlFor="from" className="font-bold">
          From:
        </label>
        <input
          id="from"
          type="email"
          placeholder="Email"
          className="rounded-md border-2 bg-white px-4 py-2 outline-0 focus:border-amber-500!"
          required
        /> */}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-bold">
          Subject:
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          className="rounded-md border-2 bg-white px-4 py-2 outline-0 focus:border-amber-500!"
          disabled
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-bold">
          Body:
        </label>
        <textarea
          id="message"
          className="scrollbar-hide rounded-md border-2 bg-white px-4 py-2 outline-0 focus:border-amber-500!"
          placeholder="Write your message here..."
          rows={4}
          required
          value={body}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setBody(e.target.value)
          }
        ></textarea>
      </div>
      <button
        className="transtion cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
        type="submit"
        onClick={() =>
          (window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
        }
      >
        Send
      </button>
    </form>
  )
}

const crisisManagementBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">
      Cybersecurity Table Top Excercise (TTX) Service
    </h1>
    <p className="text-lg">
      A Strategic Simulation for Real-World Preparedness
    </p>
  </Banner>
)

export function CrisisManagement() {
  const navigate = useNavigate()

  return (
    <Layout banner={crisisManagementBanner}>
      <button
        className="absolute top-0 left-0 flex cursor-pointer flex-row items-center-safe justify-center-safe px-4 py-2 opacity-70 hover:opacity-100"
        onClick={() => navigate('/services')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="mr-2 size-6 stroke-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
          />
        </svg>
        Back
      </button>
      <div className="flex flex-col gap-16 md:mx-32 xl:flex-row">
        <div className="mx-4 flex flex-col gap-8 xl:basis-1/2">
          <h1 className="text-center text-4xl font-bold">Overview</h1>
          <div className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-amber-500">
                Service Area: Crisis Management
              </h1>
              <p className="text-sm">
                We prepare your organisation in the area of crisis management by
                facilitating so-called Table-Top exercises based on real-world
                security incident scenarios.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-amber-500">Summary</h1>
              <p className="text-sm">
                At Valuetracks, our tabletop cybersecurity exercise service is a
                deliberate, outcome-focused simulation designed to reveal, and
                not confirm, your organization’s cyber response capabilities. We
                challenge assumptions, expose weaknesses, and foster
                institutional reflection through scenario-based testing that
                mirrors the complexity and ambiguity of real cyber incidents.
              </p>
              <p>
                This is not a compliance checkbox. It is a structured
                opportunity to assess how your organization actually performs
                under pressure, and how it can improve.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-amber-500">
                Our Approach: Discomfort by Design, Reflection by Outcome
              </h1>
              <p className="text-sm">
                Effective preparation begins where comfort ends. At Valuetracks,
                we develop scenarios that intentionally disrupt familiar
                procedures and force teams to operate under stress, ambiguity,
                and time constraints. These exercises are structured to:
              </p>
              <ul className="w-full list-disc pl-5 text-sm">
                <li>
                  Expose coordination challenges between business units and
                  departments
                </li>
                <li>
                  Highlight procedural gaps, including those only visible under
                  dynamic conditions
                </li>
                <li>
                  Test operational readiness and awareness across technical and
                  non-technical roles
                </li>
                <li>
                  Drive cross-functional interaction to simulate real-world
                  interdependencies
                </li>
              </ul>
              <p>
                What distinguishes our methodology is a clear emphasis on
                reflection. Post-exercise, we guide participants in evaluating
                their decision-making, communication, and collective response.
                The value lies not only in identifying what failed—but in
                understanding why.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-col gap-16 xl:basis-1/2">
          <div className="flex flex-col gap-8">
            <h1 className="text-center text-4xl font-bold">
              Want more details?
            </h1>
            <div className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
              <h1 className="text-center text-2xl font-bold text-amber-500">
                Send us a message!
              </h1>
              <BrochureForm />
            </div>
          </div>
          <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 text-center">
            <h1 className="text-center text-4xl font-bold">Prefer Offline?</h1>
            <p className="text-center text-sm">
              We are always eager to talk about your future!
            </p>
            <button
              className="transtion cursor-pointer rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
              onClick={() =>
                (window.location.href =
                  'https://outlook.office.com/bookwithme/user/d81d78745f8047d1a0ec05a07d8d40d6@modelverse.online/meetingtype/HEkH_Hmwx06JvFc-tP4ZJw2?anonymous')
              }
            >
              Book a meeting
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
