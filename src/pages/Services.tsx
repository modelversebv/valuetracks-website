import { useNavigate } from 'react-router-dom'

import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'

const servicesBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Our Services</h1>
    <p className="text-lg">
      Our advisory services have a proven track-record in different sectors
      across seven European countries and are digitally enabled though the
      innovative Modelverse solution.
    </p>
  </Banner>
)

export function Services() {
  const navigate = useNavigate()

  return (
    <Layout services={true} banner={servicesBanner}>
      <div className="mx-4 grid grid-cols-1 gap-8 md:mx-32 lg:grid-cols-2">
        <div className="flex flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
          <h1 className="text-center text-2xl font-bold text-amber-500">
            Protecting Success
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Security Strategy</h1>
            <p className="text-sm">
              We develop a Security Strategy for your organization that builds a
              bridge between management and IT / security staff. This puts you
              on a clear and sound track for the future, and enables you to
              cater for your NIS2 accountabilities.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">(C)ISO-as-a-Service</h1>
            <p className="text-sm">
              We provide your organization a (part-time) CISO or ISO (as a
              Service). This enables you to benefit from the wealth of IT and
              Security experience embedded in our team at an affordable price
              point.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Crisis Management</h1>
            <p className="text-sm">
              We prepare your organisation in the area of crisis management by
              facilitating so-called Table-Top exercises based on real-world
              security incident scenarios.
            </p>
            <button
              className="transtion w-fit cursor-pointer self-center rounded-full bg-gradient-to-br from-green-500 to-teal-500 px-4 py-2 font-bold text-white duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/50"
              onClick={() => navigate('/services/crisis-management')}
            >
              More..
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
          <h1 className="text-center text-2xl font-bold text-amber-500">
            Protecting Investments
          </h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">
              Security and Sustainability Due Dilligence
            </h1>
            <p className="text-sm">
              We provide you with independent due dilligence regarding your
              Merger and Acquisation investments. This could save up to 15% on
              your investment if your target has significant security and or
              compliance gaps.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Portfolio and Architecture Management</h1>
            <p className="text-sm">
              We help you to get a strong grip on your Portfolio of IT systems
              using insights from Enterprise Architecture and Portfolio
              Management. Security and Compliance improvements often benefits
              from a streamlining of your portfolio.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Internal Audit</h1>
            <p className="text-sm">
              Through our certified staff, we offer independent Internal Audit
              services for Security and Compliance to provide you with the best
              possible starting point for Certification Audits in industry
              frameworks like ISO, NIS2, NEN, and DORA.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
