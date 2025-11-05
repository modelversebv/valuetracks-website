import { Link } from 'react-router-dom'

import { GoogleMapEmbed } from '@/components/app/embed/googleMapEmbed'
import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'

const contactBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Contact Us</h1>
    <p className="text-lg">
      We are here to help you connect, collaborate, and co-create.
    </p>
  </Banner>
)

export function Contact() {
  const email: string = 'partners@modelverse.online'
  return (
    <Layout contact={true} banner={contactBanner}>
      <div className="mx-4 grid grid-cols-1 gap-8 md:mx-32 lg:grid-cols-2">
        <div className="flex flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
          <h1 className="text-2xl font-bold text-amber-500">Get in Touch</h1>
          <div>
            Email:{' '}
            <Link to={`mailto:${email}`} className="text-teal-500 underline">
              {email}
            </Link>
          </div>
          <p>
            Our office is located in the Hague, the international city of Peace
            and Justice. Visit us at the HSD Campus – the heart of Dutch
            cybersecurity innovation:
          </p>
          <ul>
            <li>HSD Campus, 7th floor</li>
            <li>Wilhelmina van Pruisenweg 104</li>
            <li>2595 AN The Hague</li>
            <li>The Netherlands</li>
          </ul>
          <p>
            The HSD Campus is easily accessible by car and public transport.
            From Den Haag Laan van NOI train station, it’s a 10-minute walk or a
            short tram ride via line 2.
          </p>
        </div>
        <div className="flex flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8">
          <h1 className="text-2xl font-bold text-amber-500">Directions</h1>
          <GoogleMapEmbed></GoogleMapEmbed>
          <div>
            Parking options: limited space is available in the underground HSD
            Campus garage upon request. Alternatively, nearby garages are:{' '}
            <Link
              to="https://maps-web.parkbee.com/nl/pages/garage-details/2281d136-a100-45f6-85a1-9475799c362e"
              className="text-teal-500 underline"
            >
              Parkbee
            </Link>
            ,{' '}
            <Link
              to="https://www.q-park.nl/nl-nl/parkeren/den-haag/p-r-laan-van-noi/"
              className="text-teal-500 underline"
            >
              Parking P+R Laan van NOI
            </Link>{' '}
            or at{' '}
            <Link
              to="https://www.interparking.nl/nl-NL/find-parking/WTCTheHague/"
              className="text-teal-500 underline"
            >
              WTC building/NH Hotel.
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
