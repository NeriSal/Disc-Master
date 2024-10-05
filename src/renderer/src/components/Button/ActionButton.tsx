import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md shadow-bts hover:shadow-btsin duration-300 hover:duration-300 ease-in-out',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
