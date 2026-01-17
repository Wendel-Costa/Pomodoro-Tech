export function getFormattedSeconds(seconds: number): string {
   const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
   const sec = String(Math.floor(seconds % 60)).padStart(2, '0');
   const text = minutes + ':' + sec;
   return text;
}
