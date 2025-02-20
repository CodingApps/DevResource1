import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Globe, Twitter, Instagram, Github, Linkedin, Mail, X } from "lucide-react"

export default function HostSidebar() {
  return (
    <div className="lg:w-64 lg:flex-shrink-0">
      <div className="space-y-6 lg:sticky lg:top-4">
        {/* Presented By */}
        <div className="space-y-4">
          <div className="text-sm text-gray-500">Any suggestions, :) lemme know!</div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="http://aitoolset.github.io" target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Website</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="http://twitter.com/enterpriseappit" target="_blank" rel="noreferrer http://twitter.com/enterpriseappit">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="http://instagram.com/seafront3d"
                target="_blank"
                rel="noreferrer http://instagram.com/seafront3d"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="http://github.com/CodingApps" target="_blank" rel="noreferrer http://github.com/CodingApps">
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </a>
            </Button>
            {/*   <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>*/}
          </div>
        </div>

        {/* Hosted By 
        <div className="space-y-4">
          <div className="text-sm text-gray-500">Hosted By</div>
          <div className="space-y-3">
            {hosts.map((host) => (
              <div key={host.name} className="group flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={host.avatar} alt={host.name} />
                    <AvatarFallback>{host.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{host.name}</span>
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Remove host</span>
                </Button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Links */}
        <div className="space-y-2">
        Msg me if you need assistance.
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="mailto:rick@codingkit@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

const hosts = [
  {
    name: "Era Qian",
    avatar: "/placeholder.svg",
  },
  {
    name: "Tom Nakata",
    avatar: "/placeholder.svg",
  },
]

