import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ActionButtonProps = ComponentProps<'button'>

export const ActionButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={twMerge(
        'px-2 py-1 rounded-md shadow-bts active:shadow-btsin active:duration-100 ease',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
