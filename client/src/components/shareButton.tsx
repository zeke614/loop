import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface ShareButtonProps {
  article: {
    title: string;
    url: string;
    description?: string;
  };
}

export default function ShareButton({ article }: ShareButtonProps) {
  const [showFallback, setShowFallback] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.description || article.title,
      url: window.location.origin + article.url,
    };

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log("Share canceled:", error);
      }
    } else {
      // Fallback: copy to clipboard and show feedback
      setShowFallback(true);
      try {
        await navigator.clipboard.writeText(shareData.url);
        setTimeout(() => setShowFallback(false), 2000);
      } catch (error) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = shareData.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setShowFallback(true);
        setTimeout(() => setShowFallback(false), 2000);
      }
    }
  };

  return (
    <div className="relative">
      <ArrowUpOnSquareIcon
        onClick={handleShare}
        className="size-5 cursor-pointer text-gray-800 hover:text-[#0ab39c] transition-colors duration-200"
      />

      {showFallback && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
}
