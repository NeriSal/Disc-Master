import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...props}>
      {children}
    </main>
  )
}

export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('w-[40vw] h-screen overflow-auto', className)} {...props}>
      {children}
    </aside>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 h-screen items-center', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
