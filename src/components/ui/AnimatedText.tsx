"use client";

import { useState, useEffect } from "react";

type AnimatedTextProps = {
  texts: string[];
  className?: string;
};

export function AnimatedText({ texts, className }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[currentIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === target) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? target.substring(0, currentText.length - 1)
          : target.substring(0, currentText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-blink text-accent">|</span>
    </span>
  );
}
