'use client';

import { useEffect, useRef } from 'react';
import LevelBadge from './LevelBadge';
import styles from './CourseCard.module.css';

interface CourseCardProps {
  level: string;
  title: string;
  modality: string;
  duration: string;
  price: string;
  spotsUsed: number;
  spotsTotal: number;
  spotsLabel: string;
  moreInfoLabel: string;
}

export default function CourseCard({
  level,
  title,
  modality,
  duration,
  price,
  spotsUsed,
  spotsTotal,
  spotsLabel,
  moreInfoLabel,
}: CourseCardProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const pct = Math.round((spotsUsed / spotsTotal) * 100);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          el.style.width = `${pct}%`;
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el.parentElement!);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className={`${styles.card} card-shine`}>
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.imageLabel}>{title}</span>
        </div>
        <div className={styles.badgeWrap}>
          <LevelBadge level={level} />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {modality}
          </span>
          <span className={styles.metaDot} />
          <span className={styles.metaItem}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            {duration}
          </span>
        </div>

        <div className={styles.price}>{price}</div>

        <div className={styles.spotsWrap}>
          <div className={styles.spotsBar}>
            <div ref={barRef} className={styles.spotsBarFill} style={{ width: 0, transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1)' }} />
          </div>
          <span className={styles.spotsLabel}>
            {spotsTotal - spotsUsed} {spotsLabel}
          </span>
        </div>

        <button className={`btn-primary ${styles.cta}`}>
          {moreInfoLabel}
        </button>
      </div>
    </div>
  );
}
