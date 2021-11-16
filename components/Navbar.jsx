import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
export default function Navbar() {
  const navigationData = [
    { title: 'NeoG Build', link: 'build-questions' },
    { title: 'Mock Interview', link: 'mock-questions' },
  ]
  return (
    <div className={styles.navContainer}>
      <>
        <h2>
          <Link href="/">NeoG Interview</Link>
        </h2>
      </>
      <>
        <ul>
          {navigationData.map((question, i) => (
            <li key={i} className={styles.link}>
              <Link href={`/${question.link}`}>{question.title}</Link>
            </li>
          ))}
        </ul>{' '}
      </>
    </div>
  )
}
