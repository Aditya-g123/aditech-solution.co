import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export default function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-primary font-medium">{role}</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-4 pt-0">
        <Link href="#" className="text-gray-500 hover:text-primary">
          <Linkedin size={18} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-primary">
          <Twitter size={18} />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-gray-500 hover:text-primary">
          <Mail size={18} />
          <span className="sr-only">Email</span>
        </Link>
      </CardFooter>
    </Card>
  )
}
