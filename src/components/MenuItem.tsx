import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item : MenuItem
    dispatch: React.Dispatch<OrderActions>
}

const MenuItem = ({item, dispatch} : MenuItemProps) => {
  return (
    <div onClick={()=> dispatch({type: 'add-item', payload: {item}})} className="flex items-center gap-2 justify-between p-2 bg-sky-50 hover:bg-sky-200 border border-sky-300 cursor-pointer transition-all hover:duration-500 rounded-md">
        <p>{item.name}</p>
        <p className="font-semibold">${item.price}</p>
    </div>  
  )
}

export default MenuItem