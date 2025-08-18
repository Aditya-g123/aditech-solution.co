"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Clock, CheckCircle, Sparkles, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function WhatsAppSupport() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Enhanced WhatsApp Toggle Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <div className="relative">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse opacity-30"></div>
          
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group border-2 border-white/20"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {isOpen ? (
              <X size={28} className="relative z-10 text-white drop-shadow-lg" />
            ) : (
              <MessageCircle size={28} className="relative z-10 text-white drop-shadow-lg animate-bounce" />
            )}
            
            {/* Sparkle effects */}
            <Sparkles size={12} className="absolute top-1 right-1 text-yellow-300 animate-pulse" />
            <Zap size={10} className="absolute bottom-1 left-1 text-blue-200 animate-ping" />
          </Button>
          
          {!isOpen && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced WhatsApp Support Panel */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80">
          <Card className="shadow-2xl border-2 border-green-200 bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900/20 dark:to-emerald-900/20 backdrop-blur-md">
            <CardHeader className="bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white p-4 rounded-t-lg relative overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
              </div>
              
              <CardTitle className="flex items-center gap-3 text-lg relative z-10">
                <div className="relative">
                  <img
                    src="/images/whatsapp-girl.png"
                    alt="Support Representative"
                    className="w-12 h-12 rounded-full border-3 border-white object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-lg">Priya - Support</div>
                  <div className="text-sm opacity-90 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    Online • Responds quickly
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6 space-y-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  👋 Hi! I'm here to help you with any questions about our services. How can I assist you today?
                </p>
                <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                  <Clock size={12} />
                  <span>Typically replies in minutes</span>
                  <Sparkles size={12} className="animate-pulse" />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <Zap size={16} className="text-green-500" />
                  Quick Actions:
                </h4>

                <Link
                  href="https://wa.me/9120984300?text=Hi! I'm interested in your web development services. Can you provide more information?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg hover:from-blue-100 hover:to-cyan-100 dark:hover:from-blue-900/30 dark:hover:to-cyan-900/30 transition-all duration-300 transform hover:scale-105 border border-blue-200 dark:border-blue-800">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">💻</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Web Development</div>
                      <div className="text-xs text-gray-500">Get info about our web services</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/9120984300?text=Hello! I'd like to know more about your learning programs and courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300 transform hover:scale-105 border border-purple-200 dark:border-purple-800">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">📚</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Learning Programs</div>
                      <div className="text-xs text-gray-500">Explore our courses</div>
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://wa.me/9120984300?text=Hi! I need a quote for my project. Can we discuss the requirements?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg hover:from-green-100 hover:to-teal-100 dark:hover:from-green-900/30 dark:hover:to-teal-900/30 transition-all duration-300 transform hover:scale-105 border border-green-200 dark:border-green-800">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm">💰</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Get Quote</div>
                      <div className="text-xs text-gray-500">Request project pricing</div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="pt-4 border-t border-green-200 dark:border-green-800">
                <Link href="https://wa.me/9120984300" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/30">
                    <MessageCircle size={20} className="mr-2" />
                    Start WhatsApp Chat
                    <Sparkles size={16} className="ml-2 animate-pulse" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle size={12} className="text-green-500" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={12} className="text-blue-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
