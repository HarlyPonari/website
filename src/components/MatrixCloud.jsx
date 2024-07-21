import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "../styles/rain.css";

const RainEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    const columns = Math.floor(width / 20);
    const drops = Array.from({ length: columns }, (_, i) => {
      const span = document.createElement("span");
      span.textContent = String.fromCharCode(33 + Math.random() * 93);
      span.style.position = "absolute";
      span.style.left = `${i * 20}px`;
      span.style.color = "#0f0";
      span.style.fontFamily = "monospace";
      container.appendChild(span);
      return span;
    });

    const animateDrops = () => {
      drops.forEach((drop) => {
        const initialY = -Math.random() * height;
        anime({
          targets: drop,
          translateY: [initialY, height],
          duration: 4000,
          easing: "linear",
          loop: true,
          delay: anime.random(0, 3000),
          update: (anim) => {
            if (anim.progress === 100) {
              drop.textContent = String.fromCharCode(33 + Math.random() * 93);
            }
          },
        });
      });
    };

    window.onresize = animateDrops();
  }, []);

  return <div ref={containerRef} className="rain-container"></div>;
};

export default RainEffect;
