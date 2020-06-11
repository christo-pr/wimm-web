export default function Money(props) {
  const { amount } = props

  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "MXN",
  })
}
