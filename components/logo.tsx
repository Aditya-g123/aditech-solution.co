import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  variant?: "default" | "white"
  size?: "sm" | "md" | "lg"
  showTagline?: boolean
}

export default function Logo({ className, variant = "default", size = "md", showTagline = false }: LogoProps) {
  // Size mappings
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  }

  // Text size mappings
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  // Color mappings
  const textColorClass = variant === "white" ? "text-white" : "text-slate-900 dark:text-white"
  const accentColorClass = variant === "white" ? "text-white" : "text-primary"

  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn("h-full w-auto", sizeClasses[size])}
        >
          {/* Outer glow ring */}
          <circle 
            cx="30" 
            cy="30" 
            r="28" 
            fill="url(#outerGlow)" 
            fillOpacity="0.1" 
          />
          
          {/* Main circuit background */}
          <circle 
            cx="30" 
            cy="30" 
            r="25" 
            fill="url(#mainGradient)" 
            fillOpacity="0.15" 
          />

          {/* Advanced circuit pattern */}
          <path
            d="M15 20h10v2h-10zM35 20h10v2h-10zM20 15v10h2v-10zM38 35v10h2v-10z"
            fill="url(#circuitGradient)"
            fillOpacity="0.4"
          />
          
          {/* Additional circuit lines */}
          <path
            d="M12 30h8M40 30h8M30 12v8M30 40v8"
            stroke="url(#circuitGradient)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
          />

          {/* Central processor chip with enhanced design */}
          <rect
            x="20"
            y="20"
            width="20"
            height="20"
            rx="3"
            stroke="url(#chipGradient)"
            strokeWidth="2.5"
            fill="url(#chipFill)"
            fillOpacity="0.1"
          />

          {/* Enhanced chip connections */}
          <g fill="url(#connectionGradient)">
            <rect x="22" y="22" width="3" height="3" rx="0.5" />
            <rect x="27" y="22" width="3" height="3" rx="0.5" />
            <rect x="32" y="22" width="3" height="3" rx="0.5" />
            <rect x="22" y="32" width="3" height="3" rx="0.5" />
            <rect x="27" y="32" width="3" height="3" rx="0.5" />
            <rect x="32" y="32" width="3" height="3" rx="0.5" />
          </g>

          {/* AI neural network nodes with glow */}
          <circle cx="30" cy="30" r="3" fill="url(#centerGradient)" />
          <circle cx="25" cy="25" r="1.5" fill="url(#nodeGradient)" fillOpacity="0.8" />
          <circle cx="35" cy="25" r="1.5" fill="url(#nodeGradient)" fillOpacity="0.8" />
          <circle cx="25" cy="35" r="1.5" fill="url(#nodeGradient)" fillOpacity="0.8" />
          <circle cx="35" cy="35" r="1.5" fill="url(#nodeGradient)" fillOpacity="0.8" />

          {/* Enhanced connection lines with animation effect */}
          <g stroke="url(#connectionGradient)" strokeWidth="1.5" strokeOpacity="0.6">
            <path d="M27 27l6 6M33 27l-6 6" />
            <path d="M30 27v6M27 30h6" />
          </g>

          {/* Outer tech rings */}
          <circle 
            cx="30" 
            cy="30" 
            r="26" 
            stroke="url(#ringGradient)" 
            strokeWidth="0.5" 
            fill="none" 
            strokeOpacity="0.3"
          />
          <circle 
            cx="30" 
            cy="30" 
            r="23" 
            stroke="url(#ringGradient)" 
            strokeWidth="0.5" 
            fill="none" 
            strokeOpacity="0.2"
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="outerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="50%" stopColor={variant === "white" ? "#ffffff" : "#4ecdc4"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
            
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
            
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="50%" stopColor={variant === "white" ? "#ffffff" : "#4ecdc4"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
            
            <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
            
            <linearGradient id="chipFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#4ecdc4"} />
            </linearGradient>
            
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
            
            <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#4ecdc4"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
            </radialGradient>
            
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
            </radialGradient>
            
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === "white" ? "#ffffff" : "#00b67a"} />
              <stop offset="50%" stopColor={variant === "white" ? "#ffffff" : "#4ecdc4"} />
              <stop offset="100%" stopColor={variant === "white" ? "#ffffff" : "#45b7d1"} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className={cn("font-bold leading-none", textSizeClasses[size])}>
          <span className={textColorClass}>Aadi</span>
          <span className={cn("bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent")}>
            tech
          </span>
          <span className={textColorClass}>Solutions</span>
        </div>
        {showTagline && (
          <span
            className={cn("text-xs text-gray-500 dark:text-gray-400", {
              "text-white/70": variant === "white",
            })}
          >
            AI-Powered Tech Innovation
          </span>
        )}
      </div>
    </Link>
  )
}
