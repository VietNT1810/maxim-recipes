import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './About.scss'

export default function About() {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* About */}
            <div className=".about">
                <div className="about__image"></div>
                <Container>
                    <div className="about__section">
                        <h2>ABOUT MAXIM LAVROV</h2>
                        <hr></hr>
                        <div className="about__content">
                            <h3>THE EARLY DAYS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore inventore laboriosam sequi minima sint veniam obcaecati necessitatibus. Quod accusamus a optio in, aliquid explicabo veniam perferendis expedita exercitationem sit fugit. Sed blanditiis doloribus, accusamus voluptatum minus inventore debitis vero reprehenderit et eveniet sint unde laudantium ad velit nesciunt neque repellendus earum nemo aperiam? Minima quia ipsum quae earum id accusamus possimus autem aliquid provident assumenda, maxime laborum rerum, veniam delectus libero fugiat magnam soluta! Exercitationem maiores aspernatur vitae tempora iste hic obcaecati laboriosam distinctio pariatur neque natus voluptas iusto quasi nemo earum, et amet nisi quibusdam voluptates vero autem atque?</p>
                        </div>

                        <div className="about__content">
                            <h3>MICHELIN-STARRED RESTAURANTS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae, aperiam perferendis adipisci sapiente at a, quas ducimus officia dolores quis commodi eligendi quae deleniti quo molestias sunt dignissimos et libero distinctio saepe nam modi omnis. Quos assumenda nobis placeat tempora deleniti quo at inventore quae asperiores nostrum voluptas blanditiis, quia eius doloribus? Ipsa velit corrupti porro eveniet facilis, excepturi at tempore accusantium similique odio doloremque temporibus, maiores quo cumque, est ea. Enim deleniti rem repellendus neque. Ut doloribus repellendus sequi aperiam earum autem voluptate dolor fuga, vitae odit deserunt incidunt obcaecati architecto illum repudiandae modi id quasi quis facere expedita nobis. Labore quo eos quam natus, modi assumenda veritatis ipsa sint eaque, sapiente distinctio numquam! Enim accusamus quibusdam possimus? Quo sunt aut odio odit, cupiditate consequatur error quod corporis! Unde qui veritatis ea, sapiente accusantium praesentium dignissimos doloremque voluptates maxime ab ducimus libero quasi eius incidunt quisquam dolorum! Assumenda?</p>
                        </div>

                        <div className="about__content">
                            <h3>GLOBAL RESTAURANTS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quas, fuga facilis quia sunt eligendi vero veniam vel excepturi ducimus sed aliquam a. Voluptates nostrum tempora quaerat odio ipsum adipisci, optio accusantium molestiae consequuntur dolorum mollitia, quidem, provident quia sit? Quaerat laboriosam voluptate non ullam pariatur rem eligendi vel tempora, inventore aliquam excepturi adipisci facere, mollitia praesentium hic maxime aliquid nulla quasi delectus? Velit, molestiae explicabo, sint, officia voluptates possimus adipisci autem impedit qui porro officiis ratione voluptas suscipit ex nostrum! Expedita dolorem repellendus repellat voluptatibus quibusdam deleniti numquam libero. Molestiae rerum qui sit distinctio, vel repellendus! Provident nihil esse cumque ut non impedit, suscipit ex consequatur magnam optio modi at sapiente porro quam, corporis aliquam perspiciatis ipsa error, illo facere. Tempore quia saepe eligendi nam repudiandae rem nulla quas in. Consequuntur suscipit perspiciatis doloremque est minus ea repudiandae omnis molestiae. Assumenda ad illum eveniet repudiandae optio quam non debitis quo, maiores repellendus sed consequatur neque! Autem voluptatibus aliquid beatae magni impedit, voluptatem itaque non, consequuntur molestias laborum ea! Unde odit assumenda, minus quia, animi atque cumque, illo vero ratione tempora impedit! Ipsa rerum, esse minus non a beatae cum, sunt recusandae ratione aspernatur magni accusamus! Consequatur similique nostrum odit ipsum nemo dolorum iure amet veritatis magni, ad itaque quas debitis. Voluptates quis dolorum eius, reiciendis eligendi deserunt suscipit eos omnis nisi minima, cupiditate doloribus eveniet unde maiores commodi magni velit deleniti ipsum alias eaque non totam. Dignissimos repudiandae, cupiditate minus eligendi esse sint illum. Nisi, dolor sed alias ipsum, non modi aliquid perferendis tenetur quaerat, excepturi ullam. Earum nobis eum provident nisi et, recusandae maxime nemo sequi quam aliquid dolor excepturi ex vitae laborum! Facere exercitationem, repellendus tempora omnis autem esse blanditiis saepe. Alias officiis, totam reprehenderit expedita fugit iusto quam quod, illum assumenda iure officia nostrum, dignissimos obcaecati.</p>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}
