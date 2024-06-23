import FormPropina from "./components/FormPropina";
import MenuItem from "./components/MenuItem";
import Navbar from "./components/Navbar";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

const App = () => {

  const { order, propina, addItem, removeItem, setPropina, placeOrder } = useOrder()


  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 p-8">
        <div>
          <h2 className="font-semibold text-xl mb-4">Menú</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div>
          {order.length === 0 ?
            <p className="text-center text-xl font-semibold">La orden esta vacia</p>
            :
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <FormPropina
                setPropina={setPropina}
                propina={propina}
              />

              <OrderTotals
                order={order}
                propina={propina}
                placeOrder={placeOrder}
              />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default App