import { Banner } from '@/components/app/misc/banner'
import { Layout } from '@/components/layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import infoFile from '@/data/team.yaml?raw'
import { parse } from 'yaml'

type Member = {
  name: string
  role: string
  bio: string
  img: string
}

const teamBanner = (
  <Banner>
    <h1 className="text-4xl font-bold">Meet the Team</h1>
    <p className="text-lg">
      The passionate individuals driving Customer Success at ValueTracks
      Services.
    </p>
  </Banner>
)

export function Team() {
  const info = parse(infoFile)
  return (
    <Layout team={true} banner={teamBanner}>
      <div className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32">
        <h1 className="text-center text-4xl font-bold">
          Your Virtual Security Team
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {info.map((member: Member, memberNumber: number) => (
            <div
              className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 transition duration-300 hover:-translate-y-3"
              key={memberNumber}
            >
              <div className="flex flex-row items-center justify-start gap-4 xl:flex-col xl:items-start">
                <Avatar className="size-24">
                  <AvatarImage src={`${member.img}`} className="object-cover" />
                  <AvatarFallback>{member.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-amber-500">
                    {member.name}
                  </h1>
                  <h1 className="inline-flex flex-wrap italic">
                    {member.role}
                  </h1>
                </div>
              </div>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      {/* {info.map((team: Team, teamNumber: number) => (
        <div
          className="mx-4 flex flex-col items-center-safe justify-center-safe gap-8 md:mx-32"
          key={teamNumber}
        >
          <h1 className="text-center text-4xl font-bold">{team.name}</h1>
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {team.members.map((member: Member, memberNumber: number) => (
              <div
                className="flex w-full flex-col gap-8 rounded-lg bg-gradient-to-br from-green-500/10 to-teal-500/10 p-8 transition duration-300 hover:-translate-y-3"
                key={memberNumber}
              >
                <div className="flex flex-row items-center justify-start gap-4 xl:flex-col xl:items-start">
                  <Avatar className="size-24">
                    <AvatarImage
                      src={`${member.img}`}
                      className="object-cover"
                    />
                    <AvatarFallback>{member.name}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-amber-500">
                      {member.name}
                    </h1>
                    <h1 className="inline-flex flex-wrap italic">
                      {member.role}
                    </h1>
                  </div>
                </div>
                <p className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </Layout>
  )
}
