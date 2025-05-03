"use client";

import React from "react";

import { getInitials } from "@/utils/string";
import { AvatarContent, AvatarImage, AvatarFallback } from "./elements";
import { getAvatarColor } from "./utils";

export interface AvatarProps {
  /**
   * URL to the avatar image
   */
  imageUrl?: string;
  
  /**
   * Name of the person (used for alt text and to generate initials)
   */
  name: string;
  
  /**
   * Optional size of the avatar (applies to both width and height)
   */
  size?: number;
  
  /**
   * Optional custom class names
   */
  className?: string;
  
  /**
   * Optional priority flag for Next.js image loading
   */
  priority?: boolean;
}

/**
 * Avatar - A comprehensive avatar component that handles:
 * 1. Image display when URL is available
 * 2. Automatic fallback to initials when image is unavailable or fails to load
 * 3. Consistent Google-like background colors based on the person's name
 * 4. Accessible alt text
 */
export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  name,
  size = 40,
  className,
  priority = false,
}) => {
  // Generate initials from the name
  const initials = getInitials(name);
  
  // Generate background color based on name
  const bgColor = getAvatarColor(name);

  return (
    <AvatarContent className={className} style={{ width: size, height: size }}>
      {imageUrl ? (
        <AvatarImage 
          src={imageUrl}
          alt={`${name}'s avatar`}
          fallback={initials}
          bgColor={bgColor}
          priority={priority}
        />
      ) : (
        <AvatarFallback style={{ backgroundColor: bgColor }}>
          {initials}
        </AvatarFallback>
      )}
    </AvatarContent>
  );
};