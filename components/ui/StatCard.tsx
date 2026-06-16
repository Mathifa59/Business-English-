'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatCard.module.css';

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
}

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export default function StatCard({ number, suffix, label }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuart(progress);
            setCount(Math.round(eased * number));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.number}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
