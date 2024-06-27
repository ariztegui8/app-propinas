import { useReducer } from "react";
import FormPropina from "./components/FormPropina";
import MenuItem from "./components/MenuItem";
import Navbar from "./components/Navbar";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/order-reducer";

const App = () => {

  const [state, dispatch] = useReducer(orderReducer, initialState)


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
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div>
          {state.order.length === 0 ?
            <p className="text-center text-xl font-semibold">La orden esta vacia</p>
            :
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch} 
              />

              <FormPropina
                dispatch={dispatch}
                propina={state.propina}
              />

              <OrderTotals
                order={state.order}
                propina={state.propina}
                dispatch={dispatch} 
              />
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default App