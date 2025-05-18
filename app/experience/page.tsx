"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Briefcase, GraduationCap, Activity } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "3D Printing Support and Optimization",
      company: "Velocitek",
      period: "May 2025 - Present",
      description:
        "Assisting with hardware support and installation for 3D-Printing hardware. Contributing to process to reduce errors on final printed results. Calibrating printing with 3D-Printing Software tools to optimize process.",
      technologies: ["3D Printing", "Hardware Support", "3D Software Tools"],
    },
    {
      title: "Automation Engineer and Mobile QA",
      company: "Mobile Software Service - talech for U.S. Bank",
      period: "March 2014 - December 2024",
      description:
        "Bolstered coverage for Automation more than 40% with Selenium WebDriver automations in Java within the year, with our group of QA's combined automation for several areas. Primarily with Selenium WebDriver automations in Java, using Cucumber as a BDD framework. Was done with a CI/CD pipeline, deployed with Jenkins. Contributed to deployments, where velocity increased to 25 points per sprint for projects like OBP updates and Post Go Live Services. Contributed to providing Dev group resources for CoPilot usage on IDE's, during U.S. Bank's A.I. launch of internal tools. Earlier in the company supported hardware including Ingenico payment card readers, iPads, Android, Moby, Poynt and Elo devices for QA of iOS and Android devices.",
      technologies: ["Java", "Selenium", "Cucumber", "IntelliJ", "Postman", "Jenkins", "CI/CD", "iOS", "Android", "GitHub CoPilot"],
    },
    {
      title: "Product Prototyping",
      company: "Product R&D - Google",
      period: "December 2013 - March 2014",
      description:
        "Assisted ATAP lab with getting feedback on upcoming products. Collected feedback on mobile modular product at various locations, which was compiled and sent to Google developers.",
      technologies: ["Modular Wireless", "A/B Testing", "Mobile Prototyping"],
    },
    {
      title: "Web Support and Development",
      company: "Community Organizations",
      period: "April 2013 - November 2013",
      description:
        "Lifted business sites to the forefront for community efforts. Elevated design and support for community sites to increase the frequency of visits and feedback on Wordpress 3.8. Improved site incorporating several online tools and Google Analytics. Expanded their engagement with Social Media on Facebook and Twitter. Made YouTube videos for sites and prepared images for display.",
      technologies: ["WordPress", "Google Analytics", "Facebook Ads", "YouTube", "Web Design"],
    },
    {
      title: "Wireless Store Manager and Sales Associate",
      company: "Wireless and Fiber-optic Service Provider – AT&T Retailer",
      period: "2003 - March 2013",
      description:
        "Trailblazed providing mobile solutions starting at our stores in the Bay Area, along the peninsula. Leader in providing wireless solutions with Android, iOS, RIM OS, Symbian and J2ME. Awards included Top Employee Award 2003, Triple Crown Club Award 2004, Lifted store's sales 25 to 30% in several areas including U-verse. Launched wireless solutions for companies like Palo Alto Investors, Facebook, BMW, Speck Products, Sand Hill Investors and the Plug and Play Incubator.",
      technologies: ["Android", "iOS", "RIM OS", "Symbian", "J2ME", "Sales Management"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-yellow-100 to-pink-200 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to main page
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-center">Professional Experience</h1>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h2 className="text-xl font-semibold">{exp.title}</h2>
                <span className="text-gray-600 font-medium">{exp.period}</span>
              </div>
              <h3 className="text-lg text-blue-600 mb-3">{exp.company}</h3>
              <p className="mb-4 text-gray-700">{exp.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Additional Info</h2>

        <div className="space-y-6">
          {/* Other Experience Card */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Other Experience</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Have provided support for youth coding organizations in the Bay Area. Also have developed an iOS app for
              Electric Vehicles, worked for university newspaper, university facilities management and business tech
              hub.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Volunteer</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">iOS Development</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">University Publication</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Facilities Management</span>
            </div>
          </Card>

          {/* Education Card */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Education</h2>
            </div>
            <ul className="space-y-2 mb-4 text-gray-700">
              <li>• University of Arizona: 1993-1995</li>
              <li>• CCSF: 1995-1997 - Networking Certificate</li>
              <li>• SFSU: 2021 towards CS Degree</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Skills</h3>
              <ul className="space-y-1 mb-4 text-gray-700">
                <li>• Spoken Languages: English/Spanish</li>
                <li>• Programming: Java, Python, Swift iOS, SwiftUI iOS, Selenium, Java Android, Javascript, Flutter and C</li>
                <li>• Typing: 60+ WPM</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">University of Arizona</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">CCSF</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SFSU</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Networking</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Computer Science</span>
            </div>
            <div>
             <br />
             </div>
             <p className="text-gray-700 italic">References available upon request.</p>
          </Card>

          {/* Activities Card */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Activities</h2>
            </div>
            <p className="mb-4 text-gray-700">
              Enjoying live music, volunteering in the Bay Area, hiking, kayaking, running marathons and football games.
            </p>
          </Card>
        </div>
        <div className="mt-10 text-center">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to main page
          </Link>
        </div>
      </div>
    </div>
  )
}
