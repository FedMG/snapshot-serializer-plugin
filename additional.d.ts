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

export interface NavLinks {
  normal?: {
    special?: boolean
    route: string
    path: string
  }
  dropdown?: {
    route: Route
    path: string[]
  }
  account?: boolean
  special?: {
    route: string
    path: string
    src: string
  }
}

export interface Route {
  label: string
  options: string[]
}

