import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import HostSidebar from "./components/host-sidebar"
import { PhotoGrid } from "./components/photo-grid"
import Link from "next/link"

const photos = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0919-SVIj57JoKSTFygcJm9WdUolatxcdmE.jpeg",
    alt: "AI and Financial Services presentation with audience in white chairs",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0928-N6874d7O73EOmBQB6RP9UJjp0G9FsS.jpeg",
    alt: "Tech meetup audience view with attendees networking",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3732-IGDvin14jqhC45CdVuYxaMtW0HKWpn.jpeg",
    alt: "Evening tech presentation with string lights and VR demo setup",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0923-UTu9AtwOcnAgPPDsMulTfwmepzueSn.jpeg",
    alt: "AI and Financial Services presentation showing presenter and audience",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0172-nLdVdiN4UK37PfInk5ROruspPTAFIB.jpeg",
    alt: "CBLO branded event space with networking",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3725-7ccM3zpmpKbf6CJ6UDoDa4FIZFKrZv.jpeg",
    alt: "Tech presentation with Thank you slide and string lights",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0170-3F7XzWJc2YZNXT2cQNNLEhVgJVf0X9.jpeg",
    alt: "Industrial space with exposed ceiling and blue lighting",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9374-RgpdcESL9MhDDh5YZzYDrxADNnfm3x.jpeg",
    alt: "Pulze.ai presentation and meetup",
  },
  {
    id: 9,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5591%203-yw1LHVXIVTUqi35WonKSmsQ91X0FIP.jpeg",
    alt: "Tech workspace with red pendant lights and laptop users",
  },
]

export default function EventPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-yellow-100 to-pink-200">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="text-xl font-semibold text-center w-full">Rick&apos;s Dev Resource</div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="w-full mb-8">
            <Image
              src="/images/design-mode/isolandscape3d.png"
              alt="Isometric 3D illustration of kayakers paddling down a winding river through a forest"
              width={600}
              height={200}
              priority
              className="object-cover rounded-lg w-full"
            />
          </div>
          {/* Sidebar - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <HostSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
              <div className="p-6">
                {/* Host Info */}

                {/* Hero Image */}

                {/* Event Title */}
                <h1 className="mb-6 text-2xl font-bold">
                  🎚️ Overview of Projects 🏞️: Open-Source, ML, Mobile Dev, Java, Python
                </h1>
                {/* Agenda Section */}
                <p className="mb-4">
                  Welcome! I put this hub up to get familiar with projects and resources currently in progress. I thrive
                  in developing mobile and web services built to provide fantastic solutions for end-users. I&apos;ve
                  contributed to the growth of mobile services for small businesses for the past 10 years, recently for
                  Restaurant and Retail SMB's. During that time, our teams have innovated on a national and
                  international scale to provide prompt and robust tools for end-users. I enjoy establishing
                  forward-thinking initiatives with Agile approaches for both businesses and users to benefit their
                  daily ventures.
                </p>
                <div>
                  <br />
                </div>
                <div className="mt-8">
                  ✨ <b> Skills : </b> Java, Selenium, Node.js, Android Java, Javascript, iOS Swift, Python, Git
                  <div></div>
                </div>
                <div>
                  <br />
                </div>
                <div className="mt-8">
                  <h2 className="text-lg font-semibold mb-4">✨ Projects:</h2>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">ML, AI and LLM Resource :</div>
                        <p className="text-sm text-gray-600">
                          <a target="_blank" href="http://aitoolset.github.io" rel="noreferrer">
                            🔗 http://aitoolset.github.io
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">AI Tools for Building and Design Resource:</div>
                        <p className="text-sm text-gray-600">
                          <Link href="/ai-tools-page">🔗 AI Tools for Design, Prototyping and Coding</Link>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">Web A.I. Agent Samples:</div>
                        <p className="text-sm text-gray-600">
                          <a target="_blank" href="https://aitoolset.github.io/aihubkayakviews/" rel="noreferrer">
                            🔗 https://aitoolset.github.io/aihubkayakviews/
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">iOS Swift Resource : </div>
                        <p className="text-sm text-gray-600">
                          <a target="_blank" href="https://swiftcurrents.github.io" rel="noreferrer">
                            🔗 https://swiftcurrents.github.io
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">E-Moto Updates : iOS Swift App </div>
                        <p className="text-sm text-gray-600">
                          Electric-Motorcycle Updates{" "}
                          <a href="https://apps.apple.com/sa/app/e-motobike-updates/id1644648261">
                            🔗 https://apps.apple.com/sa/app/e-motobike-updates/id1644648261
                          </a>
                        </p>
                        <p className="text-sm text-gray-600">
                          [GitHub :{" "}
                          <a target="_blank" href="https://github.com/CodingApps/E-BikeUpdatesV1" rel="noreferrer">
                            🔗 https://github.com/CodingApps/E-BikeUpdatesV1
                          </a>
                          ]
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">Android Java Resource :</div>
                        <p className="text-sm text-gray-600">
                          <a target="_blank" href="https://androidflow.github.io" rel="noreferrer">
                            🔗 https://androidflow.github.io
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-mono text-sm text-gray-500">•</div>
                      <div>
                        <div className="font-medium">Git Resource :</div>
                        <p className="text-sm text-gray-600">
                          <a target="_blank" href="http://packgit.org" rel="noreferrer">
                            🔗 http://packgit.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <br />
                </div>
                <div className="mb-6">
                  <p className="mb-4">
                    Also developed Open Source projects for both iOS and Android when possible. Several projects are
                    here to view, in addition to an Open Source app in the iOS App Store :{" "}
                    <a href="https://apps.apple.com/sa/app/e-motobike-updates/id1644648261">"📱 E-Moto Updates"</a>.
                  </p>
                  <Button className="w-full bg-gray-600 hover:bg-gray-700"></Button>
                </div>

                {/* About Event */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">🌳 Misc About 🌳</h2>
                  <div>
                    <p className="italic">
                      Enjoy kayaking in the bay, taking in ⚾ MLB games, hiking in various parts of the world and some good 🍲
                      Ramen. When time&apos;s available, orgs I volunteer with and recommend :
                    </p>
                    <p>
                      <br />
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a target="_blank" href="https://www.openhand.org/" rel="noreferrer">
                          Project Openhand : 🫶🏽 www.openhand.org
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.habitatebsv.org/" rel="noreferrer">
                          Habitat for Humanity : 🫶🏽 www.habitatebsv.org
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.shfb.org/" rel="noreferrer">
                          Second Harvest : 🫶🏽 www.shfb.org
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">💻 AI events and meetups 👀</h3>
                    <p className="mb-4">Recent events and A.I. workshops on emerging innovations:</p>
                    <PhotoGrid photos={photos} />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Shown on mobile, hidden on desktop */}
          <div className="mt-6 lg:hidden">
            <HostSidebar />
          </div>
        </div>
      </main>
    </div>
  )
}
