import classes from '@/app/components/footer.module.css'

export default function Footer(){
    return <footer className={classes.mainFooter}>
        <div className={classes.footerMain}>
            <p className={classes.footerLogo}>NEBO-SHELTER</p>
            <p className={classes.p}>Створено командою <b className={classes.highlight}>neboskhyl</b>. <br/>Контент заборонено розповсюджувати без вказання на джерела даного ресурсу. <br/> &copy; <span>{new Date().getFullYear()}</span>. Всі права захищені. </p>
        </div>
    </footer>
}