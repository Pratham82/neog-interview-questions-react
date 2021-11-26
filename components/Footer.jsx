import styles from '../styles/Home.module.css'
import Image from 'next/image'
import GithubIcon from '../public/icons/github'
import LinkedInIcon from '../public/icons/linkedin'
import TwitterIcon from '../public/icons/twitter'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div> */}
      <div className={styles.socials}>
        <span style={{ paddingRight: '10px' }}>
          <a href="https://github.com/pratham82" target="_blank">
            <GithubIcon />
          </a>
        </span>
        <span style={{ paddingRight: '10px' }}>
          <a href="https://www.linkedin.com/in/prathameshmali/" target="_blank">
            <LinkedInIcon />
          </a>
        </span>
        <span style={{ paddingRight: '10px' }}>
          <a href="https://twitter.com/Pratham_82" target="_blank">
            <TwitterIcon />
          </a>
        </span>
      </div>
      <div className={styles.credits}>
        <a href="https://github.com/pratham82" target="_blank">
          Created with ❤️ by Prathamesh Mali © 2021
        </a>
      </div>
    </footer>
  )
}
