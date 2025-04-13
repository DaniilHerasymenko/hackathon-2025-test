import Image from "next/image"
import classes from './main.module.css'

export default function Main(){
    return (
        <div className={classes.wrapper}>
            <div className={classes.firstContainer}>
                <Image
                    src="/kittens.jpg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: '100vw',
                        height: '600px', 
                        objectFit: 'cover'
                    }}
                    alt="Kittens"
                />
                <div className={classes.introduction}>
                    <h1>NEBO-SHELTER</h1>
                    <p>Допоможи тваринкам знайти свій дім!</p>
                </div>
            </div>
            <div className={classes.about} id="about">
                <div className={classes.aboutHeader}>
                    <h1>Про проект</h1>
                    <hr></hr>
                </div>
                <div className={classes.aboutSection}>
                    <article>
                        <h1>NEBO-SHELTER</h1>
                        <p>Ми щороку намагаємось покращити власне становище та боремося за власні права, за краще життя. Та ми інколи забуваємо про наших найменших друзів - тварин. Якщо ми можемо дати собі раду,
                            то вони собі не зможуть. Тому задля їхнього кращого життя було створено цей ресурс для допомоги безпритульним тваринам. Ви можете тут дізнатись більше про самих тварин, забрати собі
                             тваринку, або надати фінансову допомогу притулку з тваринами. <b className={classes.highlight}>Не залиш тварину під відкритим небом!</b>
                        </p>
                        <blockquote className={classes.cite}>
                            <pre>
                            Велич і моральний прогрес нації можна виміряти тим, як в цій нації ставляться до тварин. 
                            - Махатма Ганді.
                            </pre>
                        </blockquote>
                    </article>
                </div>
            </div>
            <div className={classes.usage}>
                <div className={classes.usageHeader}>
                    <h1>Як використовувати?</h1>
                    <hr></hr>
                </div>
                <div className={classes.usageInfo}>
                    <p>Для того, щоб допомогти притулку або забрати тварину треба лише <b className={classes.highlight}>увійти до системи</b>. Завдяки зрозумілому інтерфейсу можна швидко знайти інформацію про тварину та притулок, і забрати тваринку
                        додому якнайшвидше! А якщо Ви не хочете реєструватись на цьому ресурсі, Ви завжди можете допомогти українським тваринкам власним донатом на платформу <a href="https://uanimals.org/how-to-help/" target="_blank">UAnimals</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}