
/**
 * Format a duration from seconds to a human-readable string.
 * @param duration - Duration in seconds.
 * @returns A string representing the duration in minutes and seconds.
 */
export const formatDuration = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}m ${seconds}s`;
  };
  
  /**
   * Handle errors by logging them and displaying an alert.
   * @param error - The error object.
   */
  export const handleError = (error: any): void => {
    console.error('An error occurred:', error);
    alert('Something went wrong! Please try again later.');
  };
  
  /**
   * Capitalize the first letter of a string.
   * @param str - The input string.
   * @returns The input string with the first letter capitalized.
   */
  export const capitalizeFirstLetter = (str: string): string => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };