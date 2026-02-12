import useAuthStore from "../store/store";
import styles from './ui.module.css';

function Dashboard(){
  
  // const handleLogout = () => {
    
  // }

  return(
    <div className={`${styles.glassPanel} ${styles.dashboardPanel}`}>
      <div className={styles.dashboardHeader} >
          <h2 className={styles.title} >Dashboard</h2>
          <button className={styles.btnLogout} >Logout</button>
      </div>

      <div className={styles.userProfile} >
        <h3>Your Info</h3>
        <div className={styles.userInfo} >
          <span className="nameUser">your name : Renium</span>
          <span className="emailUser">your email : example@gmail.com</span>
          <span className="passUser">your password : 1</span>
          
        </div>
      </div>

      <div className={styles.projectInfo} >
        <h3>Project Info</h3>
        <button className={styles.linkButton} > <a href="https://github.com/Mr3DWeb"></a> Github </button>
      </div>

      <div className={styles.socialMedia} >
        <h3>Social Media</h3>
        <button className={styles.linkButton} > <a href="https://www.linkedin.com/in/mr3dweb/">Linkedin</a></button>
        <button className={styles.linkButton} > <a href="https://mr3dweb.com/">Website</a></button>
      </div>
    </div>
  )
}

export default Dashboard;