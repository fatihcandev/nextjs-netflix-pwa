/* eslint-disable @next/next/no-img-element */
import styles from "../styles/home.module.scss"

const profiles = [
  {
    id: 1,
    name: "Fatih",
    img: "/profile-blue.png",
  },
  {
    id: 2,
    name: "Alper",
    img: "/profile-yellow.png",
  },
  {
    id: 3,
    name: "Emirhan",
    img: "/profile-red.png",
  },
]

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="netflix logo" />
      </div>
      <div className={styles.profiles}>
        <span className={styles.profilesLabel}>Who&apos;s watching?</span>
        <div className={styles.profilesList}>
          {profiles.map((profile) => (
            <div key={profile.id} className={styles.profile}>
              <img
                className={styles.profileImage}
                src={profile.img}
                alt="profile image"
              />
              <span className={styles.profileName}>{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
