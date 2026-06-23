'use client'

import { useRouter } from 'next/navigation'

import styles from '@/components/code_master/Header.module.css'

type AppHeaderProps = {
  title: string
}

export default function AppHeader({ title }: AppHeaderProps) {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => router.back()}
        aria-label="Go back"
      >
        ←
      </button>
      <span className={styles.title}>{title}</span>
      <span className={styles.rightSpace} />
    </header>
  )
}
