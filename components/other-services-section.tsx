import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, MessageSquare, Send, Code, CheckCircle, QrCode } from "lucide-react"
import Link from "next/link"

export default function OtherServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Other Services</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Additional specialized services to enhance your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* API Services */}
          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">API Services</CardTitle>
              <CardDescription className="text-base">
                Custom API development, AI APIs, and integration solutions for developers and businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>AI APIs for Developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>RESTful API Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>GraphQL Implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>Third-party API Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>API Documentation & Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span>Developer-friendly APIs</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="https://wa.me/9120984300?text=Hi! I'm interested in your API services. Can you provide more information about AI APIs and custom API development?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">Get API Services</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Automation Services */}
          <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Automation Services</CardTitle>
              <CardDescription className="text-base">
                Streamline your business processes with intelligent automation solutions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* WhatsApp Automation */}
                <Link
                  href="https://wa.me/9120984300?text=Hello! I'm interested in WhatsApp automation services. Can you tell me more about automated customer support and bulk messaging?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                      <h4 className="font-semibold text-green-800 dark:text-green-200">WhatsApp Automation</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-green-700 dark:text-green-300">
                      <li>• Automated customer support</li>
                      <li>• Bulk message broadcasting</li>
                      <li>• Order notifications & updates</li>
                      <li>• Lead generation & nurturing</li>
                    </ul>
                  </div>
                </Link>

                {/* Bulk SMS Services */}
                <Link
                  href="https://wa.me/9120984300?text=Hi! I need bulk SMS services for my business. Can you provide details about marketing campaigns and OTP services?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <Send className="h-5 w-5 text-blue-600" />
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Bulk SMS Services</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                      <li>• Marketing campaigns</li>
                      <li>• OTP & verification messages</li>
                      <li>• Event notifications</li>
                      <li>• Promotional offers</li>
                    </ul>
                  </div>
                </Link>

                {/* QR Code Section */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-3">
                    <QrCode className="h-5 w-5 text-purple-600" />
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Quick Contact</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/qr-automation.png"
                      alt="QR Code for Automation Services"
                      className="w-16 h-16 rounded border"
                    />
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Scan to get instant access to our automation services and quick consultation
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="https://wa.me/9120984300?text=Hello! I'm interested in your automation services. Can you help me streamline my business processes?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    Get Automation Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
