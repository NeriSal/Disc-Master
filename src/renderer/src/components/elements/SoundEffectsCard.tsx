import { ComponentProps } from 'react'

export const SoundEffectsCard = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="rounded-[40px] h-[90vh] my-auto mx-[1vw] shadow-nmin flex-1">
      {children}
    </div>
  )
}
