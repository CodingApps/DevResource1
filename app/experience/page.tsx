"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

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
      technologies: ["Java", "Selenium", "Cucumber", "Jenkins", "CI/CD", "iOS", "Android", "GitHub CoPilot"],
    },
    {
      title: "Product Prototyping",
      company: "Product R&D - Google",
      period: "December 2013 - March 2014",
      description:
        "Assisted ATAP lab with getting feedback on upcoming products. Collected feedback on mobile modular product at various locations, which was compiled and sent to Google developers.",
      technologies: ["Modular Wireless", "A/B Testing", "Mobile Prototyping", ""],
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

        <div className="mt-10 text-center">
          <p className="text-gray-700">
            For a more detailed professional history, please visit my{" "}
            <a
              href="https://www.linkedin.com/in/rickwaalders/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn profile
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
