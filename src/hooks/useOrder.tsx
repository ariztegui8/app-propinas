import { useState } from "react"
import { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [propina, setPropina] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )
            setOrder(updatedOrder)

        } else {
            const newOrder = { ...item, quantity: 1 }
            setOrder([...order, newOrder])
        }
    }

    const removeItem = (id: MenuItem['id']) =>{
        setOrder(order.filter(item => item.id !== id))
    }
    
    const placeOrder = () => {
        setOrder([])
        setPropina(0)
    }


    return {
        order,
        propina,
        addItem,
        removeItem,
        setPropina,
        placeOrder,
    }

}