const valuePropina = [
    {
        id: 'propina-1',
        value: .10,
        label: '10%'
    },
    {
        id: 'propina-2',
        value: .20,
        label: '20%'
    },
    {
        id: 'propina-3',
        value: .40,
        label: '40%'
    }
]

type FormPropinaProps = {
    setPropina: React.Dispatch<React.SetStateAction<number>>
    propina: number
}

const FormPropina = ({setPropina, propina} : FormPropinaProps) => {
  return (
    <div className="rounded-md shadow-md p-2 mb-4">
        <h2 className="font-semibold mb-2 text-center">Propina:</h2>

        <form>
            {valuePropina.map(propi => (
                <div key={propi.id} className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        id={propi.id} 
                        value={propi.value} 
                        name="propina" 
                        onChange={(e) => setPropina(+e.target.value)}
                        checked={propi.value === propina}
                    />
                    <label htmlFor={propi.id}>{propi.label}</label>
                </div>
            ))}
        </form>
    </div>
  )
}

export default FormPropina