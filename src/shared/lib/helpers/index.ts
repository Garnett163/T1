export function smartCutText(text: string, maxLength: number) {
  const words = text.trim().split(' ');

  let truncatedText = '';
  let currentLength = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (currentLength + word.length <= maxLength) {
      truncatedText += word + ' ';
      currentLength += word.length;
    } else {
      truncatedText += '...';
      break;
    }
  }

  return truncatedText.trim();
}
