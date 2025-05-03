/**
 * Generates initials from a name
 * Examples:
 * - "Nasywa putri Khairunnisa" -> "NK"
 * - "Al Ghazali" -> "AG"
 * - "Ziza" -> "Z"
 */
export const getInitials = (name: string): string => {
  if (!name) return "";
  
  const nameParts = name.split(" ").filter(part => part.length > 0);
  
  if (nameParts.length === 0) return "";
  
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  
  // Get first letter of first name and first letter of last name
  const firstInitial = nameParts[0].charAt(0).toUpperCase();
  const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
  
  return firstInitial + lastInitial;
};
