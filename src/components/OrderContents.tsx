import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/order-reducer";
import { OrderItem } from "../types"
import { MdDelete } from "react-icons/md";

type OrderContentsProps = {
    order: OrderItem[];
    dispatch: React.Dispatch<OrderActions>
}

const OrderContents = ({ order, dispatch}: OrderContentsProps) => {
    return (
        <div className="mb-4">
            <h2 className="font-semibold text-xl mb-4">Consumo</h2>

            <div>
                <div className="space-y-2 ">
                    {order.map(item => (
                        <div key={item.id} className="flex items-center bg-[#fafafa] shadow-md gap-2 justify-between p-2  cursor-pointer transition-all hover:duration-500 rounded-md">
                            <div>
                                <div className="flex items-start gap-4 mb-2">
                                    <p>{item.name}</p>
                                    <p className="">{formatCurrency(item.price)}</p>
                                </div>
                                <div className="flex items-start gap-4">
                                    <p className="font-semibold">Cantidad: {item.quantity}</p>
                                    <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                                </div>
                            </div>
                            <div onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}>
                                <MdDelete color="rgb(239 68 68)" size={24} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrderContents