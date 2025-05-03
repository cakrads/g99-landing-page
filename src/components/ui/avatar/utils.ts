/**
 * Google-like avatar colors based on initials
 * Returns a consistent background color for a given string (name/initials)
 */
export const getAvatarColor = (identifier: string): string => {
  if (!identifier) return "#757575"; // Default gray
  
  // Google-like avatar colors palette
  const colors = [
    "#F44336", // Red
    "#E91E63", // Pink
    "#9C27B0", // Purple
    "#673AB7", // Deep Purple
    "#3F51B5", // Indigo
    "#2196F3", // Blue
    "#03A9F4", // Light Blue
    "#00BCD4", // Cyan
    "#009688", // Teal
    "#4CAF50", // Green
    "#8BC34A", // Light Green
    "#CDDC39", // Lime
    "#FFC107", // Amber
    "#FF9800", // Orange
    "#FF5722", // Deep Orange
    "#795548", // Brown
  ];
  
  // Generate a consistent index based on the identifier string
  let hashCode = 0;
  for (let i = 0; i < identifier.length; i++) {
    hashCode += identifier.charCodeAt(i);
  }
  
  // Get color from the palette using the hash
  return colors[hashCode % colors.length];
};