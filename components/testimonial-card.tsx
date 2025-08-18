import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  type: "Client" | "Student"
}

export default function TestimonialCard({ name, role, content, rating, type }: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>
        <div className="mt-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
            {type}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">"{content}"</p>
      </CardContent>
      <CardFooter className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
