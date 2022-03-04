import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from '../Sidebar/Sidebar'
import "./Dashboard.scss"

export default function Admin() {
    return (
        <div className="dashboard">
            <Container fluid>
                <Row className="flex-nowrap">
                    <Sidebar />

                    <Col>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque officiis fugit magni odit consequuntur optio autem quod provident sit exercitationem reprehenderit architecto libero, delectus voluptas inventore ipsum expedita, velit, voluptatibus voluptate eveniet iste corrupti fugiat. Quisquam veniam, nesciunt aut quae ducimus laborum mollitia suscipit, molestiae quasi quos molestias sunt earum culpa qui doloribus, sequi repellat sed necessitatibus asperiores non placeat est dolore nulla esse! Deserunt vitae reiciendis laudantium eum. Minus veritatis ipsa magnam mollitia ut dolorum voluptates modi reiciendis. Alias possimus, delectus perspiciatis harum odio autem cumque ab esse. Animi consectetur, sapiente quasi non pariatur ipsa est ducimus vero totam quia repellat voluptatibus voluptatum aspernatur perspiciatis quas minima esse facilis ratione inventore placeat eum ex asperiores autem adipisci. Possimus deserunt nisi quo necessitatibus eaque eos aliquam molestiae numquam placeat minus delectus quam consequatur assumenda, ab quas tempora! Iusto saepe numquam nobis asperiores explicabo ipsa quam labore id dolores odit, eveniet, molestiae tempore suscipit, minima facilis consequuntur ducimus tenetur! Nemo voluptas ipsa quis
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
