import { ReactElement } from 'react'
import { LinkProps } from 'additional'

export const Anchor: React.FC<LinkProps> = ({ path, route, style }): ReactElement => (
  <a
    href={path.length > 0 ? path : '#'}
    className={`text-white hover:text-gray-400 hover:underline ${style ?? ''}`}
    target='_blank'
    rel='noreferrer'
    data-testid='testing'
  >
    {route}
  </a>
)
