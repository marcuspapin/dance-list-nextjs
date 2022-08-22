import PillInterface from "./interface"
import { getVariantClassname } from "./helpers"

function Pill({children, variant}: PillInterface) {
  const variantClassName = getVariantClassname(variant)

  return (
    <div className={`rounded-full py-2 px-3 m-2 inline-block text-h6 text-light ${variantClassName}`}>{children}</div>
  )
}

export default Pill