import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import styles from "./login.module.css"
import { login } from "../api/authService";
import { matchesGlob } from "path";


const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const noticicacao = (msg: string) => toast.success(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(email, senha);
            noticicacao("Login efetuado");

            setTimeout(() => {
                router.push("/home");
            }, 2000);
        }
        catch (error: any) {
            erro(error.message)
        }
    }

    return (
        <>
            <ToastContainer />
            <main id={styles.main}>

                <img src="../imgs/mulherlogin.png" alt="" />


                <div className={styles.div_forms}>
                    <img className={styles.img} src="../imgs/LogoHeader.png" alt="" />
                    <form className={styles.forms} onSubmit={autenticar}>

                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>Email</label>
                            <input type="email" name="email" className={styles.input} required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" />
                        </div>

                        <div className={styles.camp_form}>
                            <label htmlFor="" className={styles.label}>Senha</label>
                            <input type="password" name="senha" className={styles.input} required value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="*******" />
                        </div>

                        <button type="submit" className={styles.btn}>Entrar</button>

                    </form>
                </div>
            </main>
        </>
    )
}

export default Login;