import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getImagePath = (imagePath: string) => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // In production (GitHub Pages), add the repo prefix
  if (process.env.NODE_ENV === 'production') {
    return `/excel-freak/${cleanPath}`;
  }
  
  // In development, use the original path
  return `/${cleanPath}`;
};