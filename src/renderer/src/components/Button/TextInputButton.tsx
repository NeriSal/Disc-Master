import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const TextInputButton = ({ className, ...props }: ComponentProps<'input'>) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Jukebox name"
      className={twMerge('px-2 py-y rounded-md shadow-btsin bg-transparent', className)}
    ></input>
  )
}
