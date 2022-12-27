import type { JSX } from "solid-js"
import { Link } from "../base/link"

type Props = {} & JSX.HTMLAttributes<HTMLDivElement>;

export const Menu = (props: Props) => {
  return (
    <div itemscope itemtype="http://schema.org/SiteNavigationElement" {...props}>
      <Link itemprop="url" class="link link-hover" to="/">Главная</Link>
      <Link itemprop="url" class="link link-hover" to="/editor">Редактор</Link>
      <Link itemprop="url" class="link link-hover" to="/about">О продукте</Link>
      <Link itemprop="url" class="link link-hover" to="/features">Возможности</Link>
      <Link itemprop="url" class="link link-hover" to="/contact">Контакты</Link>
      <Link itemprop="url" class="link link-hover" to="/faq">FAQ</Link>
    </div>
  )
}