import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(imagePath: string): string {
  // Handle placeholder images
  if (imagePath.includes("22.jpg")) {
    return imagePath
  }

  // Ensure path starts with / for public directory
  if (!imagePath.startsWith("/")) {
    return `/${imagePath}`
  }

  return imagePath
}
