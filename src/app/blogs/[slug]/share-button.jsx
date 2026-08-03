"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ title }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {}
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {}
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this article"
      className="flex items-center gap-1.5 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
    >
      <Share2 className="h-4 w-4" />
      <span>{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}
