import styles from "./login.module.css"
import Link from "next/link";
const Login = () => {
    return (
        <>
            <main id={styles.main}>

                <img src="../imgs/mulherlogin.png" alt="" />


                <div className={styles.div_forms}>
                    <img className={styles.img} src="../imgs/LogoHeader.png" alt="" />
                    <form action="" className={styles.forms}>

                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>Email</label>
                            <input type="text" className={styles.input} placeholder="email@example.com" />
                        </div>

                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>Senha</label>
                            <input type="password" className={styles.input} placeholder="*******" />
                        </div>
                        <Link href="/home"> <button type="submit" className={styles.btn}>Entrar</button></Link>

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;