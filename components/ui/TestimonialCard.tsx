import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
}

export default function TestimonialCard({ name, role, text }: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      <p className={styles.text}>&ldquo;{text}&rdquo;</p>

      <div className={styles.author}>
        <div className={styles.avatar}>
          {name.charAt(0)}
        </div>
        <div className={styles.authorInfo}>
          <strong className={styles.name}>{name}</strong>
          <span className={styles.role}>{role}</span>
        </div>
      </div>
    </div>
  );
}
