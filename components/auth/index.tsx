import Scene from "./Scene";

import styles from './auth.module.css'

function Auth(){
  return (
    <>
    <section className={styles.content} >
      <div className={styles.canvasWrapper} >
        <Scene />
    </div>
    </section>
    
    </>
  )
}

export default Auth;