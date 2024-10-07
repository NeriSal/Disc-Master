import { ActionButton, ActionButtonProps } from '@/components'
import { twMerge } from 'tailwind-merge'

export const OpenButton = ({ className, children, ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props} className={twMerge('ml-4 w-20 h-10', className)}>
      {children}
    </ActionButton>
  )
}
