"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, Sparkles, HelpCircle, Phone } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
  quickReplies?: string[]
}

const quickStartOptions = [
  "Tell me about your services",
  "I need web development",
  "Learning programs info",
  "Book a consultation",
  "Pricing information",
  "Contact details",
]

const botResponses = {
  greeting: [
    "Hello! I'm Ria, your AI assistant for Aaditech Solutions. How can I help you today?",
    "Hi there! I'm Ria from Aaditech Solutions. What would you like to know about our services?",
    "Welcome! I'm Ria, here to assist you with all things Aaditech Solutions. How may I help?",
  ],
  services: [
    "Aaditech Solutions offers comprehensive tech services including:\n\n🌐 Web Development\n📱 Mobile App Development\n📊 Data Analysis & AI\n🎨 UI/UX Design\n☁️ Cloud Solutions\n📈 Digital Marketing\n🛒 E-commerce Platforms\n🤖 AI Chatbot Solutions\n🔧 DevOps & Automation\n\nWhich service interests you most?",
    "We provide cutting-edge technology solutions:\n\n✨ Custom Web Development\n📊 Advanced Data Analytics\n📱 Mobile Applications\n☁️ Cloud Infrastructure\n📈 Digital Marketing Strategies\n🤖 AI-powered solutions\n\nWhat would you like to know more about?",
  ],
  learning: [
    "Our learning programs include:\n\n💻 Web Development (Full-Stack)\n📊 Data Science & AI\n📱 Mobile Development\n☁️ Cloud Computing\n🎨 UI/UX Design\n📈 Digital Marketing\n🔧 DevOps & Automation\n\nAll courses are designed by industry experts with hands-on projects. Which program interests you?",
    "We offer comprehensive tech education:\n\n🚀 Full-Stack Development\n🤖 Data Science & AI\n📱 Mobile App Development\n☁️ Cloud Technologies\n🎨 Design & User Experience\n📈 Digital Marketing\n\nOur courses have helped 200+ students land great jobs! Want to know more about any specific program?",
  ],
  contact: [
    "📞 Phone: +91 9120984300\n📧 Email: info@aaditech.com\n📍 Location: Noida, India\n💬 WhatsApp: Available for instant support\n\n🆓 Free consultation available! Would you like me to help you book one?",
    "Contact us easily:\n\n📞 Call: +91 9120984300\n📧 Email: info@aaditech.com\n💬 WhatsApp for instant support\n📍 Office: Noida, India\n\n✨ We offer free consultations! Shall I guide you to book one?",
  ],
  about: [
    "🏢 Aaditech Solutions - Founded by Aditya\n\n📈 10+ years of experience\n🚀 500+ projects delivered\n👥 200+ students trained\n🏆 50+ awards won\n⭐ 98% client satisfaction rate\n\n🎯 Mission: Transform ideas into digital reality!\n\nWhat would you like to know more about?",
    "About Aaditech Solutions:\n\n👨‍💼 Founded by visionary leader Aditya\n🌟 Leading technology company\n📊 500+ successful projects\n🎓 200+ students placed\n🏆 50+ industry awards\n\n💡 We've been transforming businesses through technology for over a decade!",
  ],
  automation: [
    "🤖 Our automation services:\n\n💬 WhatsApp Business Automation\n• 24/7 customer support\n• Bulk messaging\n• Lead generation\n\n📱 Bulk SMS Services\n• Marketing campaigns\n• OTP & notifications\n• Event alerts\n\n🔗 Custom API Development\n• Seamless integrations\n• Workflow automation\n• Cost reduction up to 60%!",
    "Automation Solutions:\n\n🚀 WhatsApp Chatbots\n📨 Automated SMS Campaigns\n🔗 API Integrations\n⚡ Workflow Automation\n📊 Process Optimization\n\nOur automation services help businesses reduce operational costs significantly! Interested in learning more?",
  ],
  pricing: [
    "💰 Our pricing is transparent and competitive:\n\n🌐 Web Development: Starting from ₹25,000\n📱 Mobile Apps: Starting from ₹50,000\n📊 Data Analysis: Starting from ₹15,000\n🎨 UI/UX Design: Starting from ₹20,000\n\n💡 Custom quotes available based on requirements\n🆓 Free consultation included\n\nWould you like a detailed quote for your project?",
    "Pricing Information:\n\n✨ Competitive & Transparent Pricing\n🆓 Free Initial Consultation\n📋 Custom Quotes Available\n💳 Flexible Payment Options\n🎯 No Hidden Costs\n\nFor accurate pricing, I'd recommend booking a free consultation where our experts can understand your specific needs!",
  ],
  default: [
    "That's a great question! 🤔\n\nFor detailed information about our services, pricing, or to discuss your specific requirements, I'd recommend booking a free consultation with our experts.\n\n📅 Would you like me to help you schedule one?",
    "I'd be happy to help you with that! 😊\n\nFor personalized assistance and detailed discussions about your project, our expert team is available for a free consultation.\n\n🚀 Shall I guide you to book one?",
  ],
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Ria, your AI assistant for Aaditech Solutions. I can help you learn about our services, learning programs, and how we can transform your business with technology. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
      quickReplies: quickStartOptions,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): { text: string; quickReplies?: string[] } => {
    const message = userMessage.toLowerCase()

    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return {
        text: botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)],
        quickReplies: ["Tell me about services", "Learning programs", "Contact info", "Book consultation"],
      }
    } else if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
      return {
        text: botResponses.services[Math.floor(Math.random() * botResponses.services.length)],
        quickReplies: ["Web Development", "Mobile Apps", "Data Analysis", "Digital Marketing"],
      }
    } else if (
      message.includes("learn") ||
      message.includes("course") ||
      message.includes("training") ||
      message.includes("education")
    ) {
      return {
        text: botResponses.learning[Math.floor(Math.random() * botResponses.learning.length)],
        quickReplies: ["Web Development Course", "Data Science", "Mobile Development", "UI/UX Design"],
      }
    } else if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("email") ||
      message.includes("reach")
    ) {
      return {
        text: botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)],
        quickReplies: ["Book consultation", "WhatsApp support", "Visit office"],
      }
    } else if (
      message.includes("about") ||
      message.includes("company") ||
      message.includes("aditya") ||
      message.includes("founder")
    ) {
      return {
        text: botResponses.about[Math.floor(Math.random() * botResponses.about.length)],
        quickReplies: ["Our projects", "Team info", "Awards", "Client testimonials"],
      }
    } else if (
      message.includes("automation") ||
      message.includes("whatsapp") ||
      message.includes("sms") ||
      message.includes("api")
    ) {
      return {
        text: botResponses.automation[Math.floor(Math.random() * botResponses.automation.length)],
        quickReplies: ["WhatsApp automation", "SMS services", "API development"],
      }
    } else if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("pricing") ||
      message.includes("quote")
    ) {
      return {
        text: botResponses.pricing[Math.floor(Math.random() * botResponses.pricing.length)],
        quickReplies: ["Get custom quote", "Book consultation", "Payment options"],
      }
    } else {
      return {
        text: botResponses.default[Math.floor(Math.random() * botResponses.default.length)],
        quickReplies: ["Book consultation", "View services", "Contact us"],
      }
    }
  }

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue
    if (!textToSend.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: textToSend,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const response = getResponse(textToSend)
      const botResponse: Message = {
        id: messages.length + 2,
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        quickReplies: response.quickReplies,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </Button>
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <Sparkles size={12} className="text-white" />
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px]">
          <Card className="h-full flex flex-col shadow-2xl border-2 border-primary/20 bg-white dark:bg-slate-900">
            <CardHeader className="bg-gradient-to-r from-primary to-blue-500 text-white p-4 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot size={24} />
                Ria - AI Assistant
                <Sparkles size={16} className="animate-pulse" />
              </CardTitle>
              <p className="text-xs opacity-90">Powered by Aaditech Solutions • Online</p>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    

                    {/* Quick Replies */}
                    {message.quickReplies && (
                      <div className="flex flex-wrap gap-2 mt-2 ml-2">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className="px-3 py-1 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-200"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-bl-none">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t bg-gray-50 dark:bg-slate-800">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Aaditech Solutions..."
                    className="flex-1"
                  />
                  <Button onClick={() => handleSendMessage()} size="sm" className="bg-primary hover:bg-primary/90">
                    <Send size={16} />
                  </Button>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleQuickReply("Contact details")}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-primary hover:bg-primary/10 rounded transition-colors"
                  >
                    <Phone size={12} />
                    Contact
                  </button>
                  <button
                    onClick={() => handleQuickReply("Tell me about services")}
                    className="flex items-center gap-1 px-2 py-1 text-xs text-primary hover:bg-primary/10 rounded transition-colors"
                  >
                    <HelpCircle size={12} />
                    Services
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
