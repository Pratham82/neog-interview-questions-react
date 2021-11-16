import styles from '../styles/Heading.module.css'
export default function Heading({ heading }) {
  return <h1 className={styles.title}> {heading}</h1>
}
