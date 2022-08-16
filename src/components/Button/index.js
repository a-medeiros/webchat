import { ButtonComponent } from "./styles"

export default function Button({ title, color }) {
  return (
    <>
      <ButtonComponent color={color}>{title}</ButtonComponent>
    </>
  )
}