"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function AIToolsPage() {
  const categories = [
    {
      title: "Design - Templates from AI for Websites",
      description:
        "Explore these AI-powered tools to streamline your web design and development process. From creating WordPress snippets to generating entire website templates, these resources can help you build faster and more efficiently.",
      tools: [
        {
          name: "CodeWP.ai",
          description: "Create Wordpress snippets and layouts with A.I.",
          url: "https://codewp.ai",
        },
        {
          name: "CodeDesign.ai",
          description: "Platform to build your sites based on A.I. generated templates.",
          url: "https://codedesign.ai",
        },
        {
          name: "Hocoos",
          description: "Build A.I. designed sites, based answered questions and prompts.",
          url: "https://hocoos.com",
        },
        {
          name: "Durable",
          description: "Website creator with A.I. based templates, can make basic landing page in less than 5 mins.",
          url: "https://durable.co",
        },
      ],
    },
    {
      title: "Design - Stock Images",
      description:
        "Discover AI-powered platforms for generating and accessing high-quality stock images, product photos, and creative assets.",
      tools: [
        {
          name: "Lummi.ai",
          description: "Stock A.I. based images",
          url: "https://lummi.ai",
        },
        {
          name: "Pebblely",
          description: "To make A.I. generated product stock images",
          url: "https://pebblely.com",
        },
        {
          name: "Recraft.ai",
          description: "Create stock images, icons and logos with A.I. based styles.",
          url: "https://recraft.ai",
        },
      ],
    },
    {
      title: "Design - Logo and Branding",
      description: "Create professional logos and branding materials using AI-powered design tools.",
      tools: [
        {
          name: "Designs.ai",
          description: "Design logo with A.I., based on text and image prompts.",
          url: "https://designs.ai",
        },
        {
          name: "Brandmark.io",
          description: "Based on 3 to 4 prompts, start your new logo design.",
          url: "https://brandmark.io",
        },
        {
          name: "LogoMaster.ai",
          description: "Select templates and get A.I. assisted logo.",
          url: "https://logomaster.ai",
        },
      ],
    },
    {
      title: "Design - Graphics",
      description: "Transform your visual content with AI-powered graphic design tools.",
      tools: [
        {
          name: "Flair.ai",
          description: "Does A.I. designed photoshoots for tools.",
          url: "https://flair.ai",
        },
        {
          name: "Immersity.ai",
          description: "Can convert 2D photos to 3D short-form videos.",
          url: "https://immersity.ai",
        },
      ],
    },
    {
      title: "Design - UI",
      description: "Create stunning user interfaces with AI-assisted design tools.",
      tools: [
        {
          name: "Galileo",
          description: "Platform to design UI with A.I. tools.",
          url: "https://usegalileo.ai",
        },
        {
          name: "Motiff",
          description: "Create various UI with A.I. generation.",
          url: "https://motiff.com",
        },
      ],
    },
    {
      title: "Design - Data Visualization",
      description: "Transform your data into compelling visualizations using AI-powered tools.",
      tools: [
        {
          name: "DeckPilot",
          description: "Have your data processed by A.I. for data visualization",
          url: "https://deckpilot.io",
        },
        {
          name: "Zing Data",
          description: "Create visualizations based on prompts for your data.",
          url: "https://getzingdata.com",
        },
      ],
    },
    {
      title: "User Analytics and Reporting",
      description: "Enhance your meetings and data analysis with AI-powered tools.",
      tools: [
        {
          name: "Otter.ai",
          description: "A web-based A.I. assistant to create notes and transcriptions of meetings.",
          url: "https://otter.ai",
        },
        {
          name: "Limitless",
          description:
            "An A.I. based clip-on you wear to process your voice for meeting notes, calls and transcription.",
          url: "https://limitless.ai",
        },
        {
          name: "Bardeen",
          description: "Automate Saas tasks with A.I. data collection and reports. An IFTTT using A.I.",
          url: "https://bardeen.ai",
        },
      ],
    },
    {
      title: "Marketing",
      description: "Enhance your social media presence with AI-powered content creation tools.",
      tools: [
        {
          name: "RDMC.ai",
          description: "Platform with A.I. tools for social media posts and content.",
          url: "https://rdmc.ai",
        },
        {
          name: "Quso.ai",
          description: "Writes content for social media with A.I. tools.",
          url: "https://quso.ai",
        },
      ],
    },
    {
      title: "Blogging",
      description: "Create engaging blog content with AI-powered writing tools.",
      tools: [
        {
          name: "Reword",
          description: "Write blog articles with A.I.",
          url: "https://reword.com",
        },
        {
          name: "Koala Writer",
          description: "Write blog articles with A.I., in additional to other A.I. based services.",
          url: "https://koala.sh/writer",
        },
        {
          name: "Voila",
          description: "Writes messages, and handles data from sites to provide and can create content for you.",
          url: "https://getvoila.ai",
        },
        {
          name: "Surfer SEO",
          description: "Blog and content A.I. generation with SEO optimization.",
          url: "https://surferseo.com",
        },
      ],
    },
    {
      title: "Blogging SEO",
      description: "Optimize your content for search engines using AI-powered tools.",
      tools: [
        {
          name: "WordLift",
          description: "Improve SEO for your site with A.I. revisions.",
          url: "https://wordlift.io",
        },
        {
          name: "NeuralText",
          description: "Improve content and SEO with A.i. services.",
          url: "https://neuraltext.com",
        },
      ],
    },
    {
      title: "Payments, Billing Distribution",
      description: "Optimize your payment processing with AI-powered solutions.",
      tools: [
        {
          name: "Payments.ai",
          description: "Route payments through best processor to increase your revenue.",
          url: "https://payments.ai",
        },
      ],
    },
    {
      title: "Product Building",
      description: "Create web applications and apps using AI-powered development tools.",
      tools: [
        {
          name: "v0.dev",
          description: "Text to code A.I. tool for web applications.",
          url: "https://v0.dev",
        },
        {
          name: "Appy Pie",
          description: "Tools with A.I. for generating Web and Apps.",
          url: "https://appypie.com",
        },
        {
          name: "Cursor.ai",
          description: "Tool to code, and have A.I. generate structure of Web and Apps.",
          url: "https://cursor.com",
        },
      ],
    },
    {
      title: "Product Building - Voice",
      description: "Create voice content and text-to-speech using AI-powered tools.",
      tools: [
        {
          name: "Synthesys",
          description: "Create A.I. based voice content, in additional to human avatars snd images.",
          url: "https://synthesys.io",
        },
        {
          name: "ElevenLabs",
          description: "Text to speech A.I. based voice service.",
          url: "https://elevenlabs.io",
        },
        {
          name: "Artlist Voice Over",
          description: "Text-to-speech A.I. Voice Generator",
          url: "https://artlist.io/voice-over",
        },
        {
          name: "Play.ht",
          description: "Several A.I. based tools for voice generation.",
          url: "https://play.ht",
        },
        {
          name: "Speechify",
          description: "Text-to-speech A.I. generator with several known voice templates.",
          url: "https://speechify.com",
        },
      ],
    },
    {
      title: "Support - Customer Chat",
      description: "Enhance customer service with AI-powered chat solutions.",
      tools: [
        {
          name: "Druid AI",
          description: "Chat handling for your site based on A.I. agents.",
          url: "https://druidai.com",
        },
        {
          name: "Forethought",
          description: "Customer service handled by A.I. chat bots.",
          url: "https://forethought.ai",
        },
        {
          name: "Sierra.ai",
          description: "Customer chat with A.I. based agents.",
          url: "https://sierra.ai",
        },
        {
          name: "SmartAction",
          description: "Several types of A.I. chat agents for scheduling, orders and handling accounts.",
          url: "https://smartaction.ai",
        },
      ],
    },
    {
      title: "Support - Business Analytics",
      description: "Analyze your company data with AI-powered analytics tools.",
      tools: [
        {
          name: "Fluent HQ",
          description: "Analytics of your company's data, allowing you to get answers from data via chat.",
          url: "https://fluenthq.com",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-yellow-100 to-pink-200 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to main page
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">AI Tools for Building and Design</h1>

        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
            </Card>
            <div className="space-y-6">
              {category.tools.map((tool) => (
                <Card key={tool.name} className="p-6 bg-white/80 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold">
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {tool.name}
                    </a>
                  </h3>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline mt-1 mb-2 block"
                  >
                    {tool.url}
                  </a>
                  <p className="text-gray-600">{tool.description}</p>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
