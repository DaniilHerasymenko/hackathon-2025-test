import Link from "next/link";
import classes from "@/app/components/header.module.css"

export default function Header(){
    return <header className={classes.header}>
        <div className={classes.mainLogo}>
            <Link href="/">Nebo-shelter</Link>
        </div>
        <nav className={classes.nav}>
            <div className={classes.navigationLinks}>
                <Link href="#about" className={classes.a}>Про проект</Link>
                {/* <Link href="/blog" className={classes.a}>Блог</Link> */}
                <Link href="/login" className={classes.a}>Увійти</Link>
            </div>
        </nav>
    </header>
}