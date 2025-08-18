import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code,
  BarChart,
  Smartphone,
  Palette,
  Cloud,
  Lightbulb,
  Cpu,
  Shield,
  Globe,
  Database,
  Megaphone,
  ShoppingCart,
  Bot,
  Zap,
  MessageSquare,
  Send,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-10 w-10 text-primary" />
      case "BarChart":
        return <BarChart className="h-10 w-10 text-primary" />
      case "Smartphone":
        return <Smartphone className="h-10 w-10 text-primary" />
      case "Palette":
        return <Palette className="h-10 w-10 text-primary" />
      case "Cloud":
        return <Cloud className="h-10 w-10 text-primary" />
      case "Lightbulb":
        return <Lightbulb className="h-10 w-10 text-primary" />
      case "Cpu":
        return <Cpu className="h-10 w-10 text-primary" />
      case "Shield":
        return <Shield className="h-10 w-10 text-primary" />
      case "Globe":
        return <Globe className="h-10 w-10 text-primary" />
      case "Database":
        return <Database className="h-10 w-10 text-primary" />
      case "Megaphone":
        return <Megaphone className="h-10 w-10 text-primary" />
      case "ShoppingCart":
        return <ShoppingCart className="h-10 w-10 text-primary" />
      case "Bot":
        return <Bot className="h-10 w-10 text-primary" />
      case "Zap":
        return <Zap className="h-10 w-10 text-primary" />
      case "MessageSquare":
        return <MessageSquare className="h-10 w-10 text-primary" />
      case "Send":
        return <Send className="h-10 w-10 text-primary" />
      default:
        return <Code className="h-10 w-10 text-primary" />
    }
  }

  return (
    <Card className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 border-2 border-gradient-to-r from-blue-200 to-purple-200 group">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-blue-500/10 group-hover:from-primary/20 group-hover:to-blue-500/20 transition-colors">
          {getIcon()}
        </div>
        <div>
          <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-600 dark:text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
