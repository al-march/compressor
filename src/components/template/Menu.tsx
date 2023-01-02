import type { JSX } from "solid-js"
import { Link } from "../base/link"

type Props = {} & JSX.HTMLAttributes<HTMLDivElement>;

export const Menu = (props: Props) => {
  return (
    <div
      role="navigation"
      itemscope
      itemtype="http://schema.org/SiteNavigationElement"
      {...props}
    >
      <Link itemprop="url" class="link link-hover justify-self-start" to="/">Главная</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/editor">Редактор</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/convert">Конвертер</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/about">О продукте</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/features">Возможности</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/contact">Контакты</Link>
      <Link itemprop="url" class="link link-hover justify-self-start" to="/faq">FAQ</Link>
    </div>
  )
}