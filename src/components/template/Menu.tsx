import { Link } from "../base/link"

export const Menu = () => {
  return (
    <>
      <Link class="link link-hover" to="/">Главная</Link>
      <Link class="link link-hover" to="/editor">Редактор</Link>
      <Link class="link link-hover" to="/about">О продукте</Link>
      <Link class="link link-hover" to="/features">Возможности</Link>
      <Link class="link link-hover" to="/contact">Контакты</Link>
      <Link class="link link-hover" to="/faq">FAQ</Link>
    </>
  )
}