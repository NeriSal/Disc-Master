import { ComponentProps } from 'react'

export const MasterCard = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="shadow-nm rounded-[40px] h-[85vh] my-auto mx-[1vw] flex-[0.8] ">
      {children}
    </div>
  )
}
