import styles from './LevelBadge.module.css';

type Level = 'A1-A2' | 'B1' | 'B2' | 'C1' | 'Especial' | 'Ejecutivo' |
             'Básico' | 'Intermedio' | 'Avanzado' | string;

interface LevelBadgeProps {
  level: Level;
  label?: string;
}

function getColor(level: string): string {
  const l = level.toLowerCase();
  if (l.includes('a1') || l.includes('a2') || l.includes('básico') || l.includes('basic'))
    return styles.green;
  if (l.includes('b1') || l.includes('b2') || l.includes('intermedio') || l.includes('intermediate'))
    return styles.blue;
  if (l.includes('c1') || l.includes('avanzado') || l.includes('advanced'))
    return styles.orange;
  if (l.includes('especial') || l.includes('ejecutivo') || l.includes('executive'))
    return styles.purple;
  return styles.blue;
}

export default function LevelBadge({ level, label }: LevelBadgeProps) {
  return (
    <span className={`${styles.badge} ${getColor(level)}`}>
      {label ?? level}
    </span>
  );
}
