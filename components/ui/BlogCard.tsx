import LevelBadge from './LevelBadge';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  readLabel: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  readLabel,
}: BlogCardProps) {
  return (
    <article className={`${styles.card} card-shine`}>
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.imageLabel}>{title}</span>
        </div>
        <div className={styles.categoryWrap}>
          <LevelBadge level={category} label={category} />
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>

        <div className={styles.footer}>
          <div className={styles.meta}>
            <span>{date}</span>
            <span className={styles.dot} />
            <span>{readTime}</span>
          </div>
          <span className={styles.readMore}>{readLabel}</span>
        </div>
      </div>
    </article>
  );
}
