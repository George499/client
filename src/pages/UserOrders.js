import { useState, useEffect } from 'react'
import { userGetAll as getAllOrders } from '../http/orderAPI.js'
import { Container, Spinner } from 'react-bootstrap'
import Orders from '../components/Orders.js'
import { Helmet } from 'react-helmet';

const UserOrders = () => {
    const [orders, setOrders] = useState(null)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        getAllOrders()
            .then(
                data => setOrders(data)
            )
            .finally(
                () => setFetching(false)
            )
    }, [])

    if (fetching) {
        return <Spinner animation="border" />
    }

    return (
        <Container>
            <Helmet>
                <title>ваши заказы в магазине швейцарских часов - Aksessuary.KZ</title>
                <meta name="description" content="Онлайн магазин часов"/>
            </Helmet>
            <h1>Ваши заказы</h1>
            <Orders items={orders} admin={false} />
        </Container>
    )
}

export default UserOrders