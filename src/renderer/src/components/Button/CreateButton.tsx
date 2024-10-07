import { ActionButton, ActionButtonProps } from '@/components'
import { twMerge } from 'tailwind-merge'

export const CreateButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props} className={twMerge('w-20 h-10', className)}>
      Create
    </ActionButton>
  )
}
