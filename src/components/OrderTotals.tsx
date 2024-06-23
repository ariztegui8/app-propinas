import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    propina: number;
    placeOrder: () => void;

}

const OrderTotals = ({order, propina, placeOrder} : OrderTotalsProps) => {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0),
    [order])
    const propinaAmount = useMemo(() => subtotalAmount * propina, [propina, subtotalAmount])
    const totalAmount = useMemo(() => subtotalAmount + propinaAmount, [subtotalAmount, propinaAmount])

  return (
    <div className="rounded-md shadow-md p-2">
        <h2 className="font-semibold mb-2 text-center">Totales y Propina:</h2>
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <p >Subtotal a pagar:</p>
                <p className="font-medium">{formatCurrency(subtotalAmount)}</p>
            </div>
            <div className="flex items-center gap-2">
                <p >Propina:</p>
                <p className="font-medium">{formatCurrency(propinaAmount)}</p>
            </div>
            <div className="flex items-center justify-end gap-2 mb-4">
                <p className="text-lg font-medium">Total a pagar:</p>
                <p className=" text-lg font-medium">{formatCurrency(totalAmount)}</p>
            </div>

            <div>
                <button 
                    disabled={totalAmount === 0} 
                    className="bg-sky-500 p-1.5 rounded-md text-white font-semibold w-full hover:bg-sky-600 transition-all hover:duration-500 disabled:opacity-10"
                    onClick={placeOrder}
                    >
                        Guardar Order</button>
            </div>
        </div>

    </div>
  )
}

export default OrderTotals