import { ReactNode } from 'react'

// structure
export interface FooterProps {
  links: FooterLinksColumns[]
}

// components
export interface FooterLinksColumns {
  id: number
  title: string
  column: LinkProps[]
}

export interface LinkProps {
  path: string
  route: string
  style?: string
}

export interface Route {
  label: string
  options: string[]
}

