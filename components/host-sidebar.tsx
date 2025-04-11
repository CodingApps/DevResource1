"use client"

import { Button } from "@/components/ui/button"
import { Globe, Twitter, Instagram, Github, Mail } from "lucide-react"

// Export as both default and named export to fix the deployment error
export function HostSidebar() {
  return (
    <div className="lg:w-64 lg:flex-shrink-0">
      <div className="space-y-6 lg:sticky lg:top-4">
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
              <a href="http://twitter.com/enterpriseappit" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="http://instagram.com/seafront3d" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="http://github.com/codingapps" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">Github</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="mailto:example@example.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Also export as default to maintain compatibility with existing imports
export default HostSidebar
