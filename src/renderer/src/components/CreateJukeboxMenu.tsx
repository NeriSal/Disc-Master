import { CreateButton, OpenButton, TextInputButton } from '@/components'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const CreateJukeboxMenu = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center my-6">
        <div className="flex flex-col ">
          <h2> Jukebox Name</h2>
          <p> Choose a name for your Jukebox </p>
        </div>
        <TextInputButton className={twMerge('max-w-[40%] h-10')} />
      </div>
      <hr></hr>
      <div className="flex flex-row justify-between items-center my-6">
        <div className="flex flex-col">
          <h2> Location </h2>
          <p> Pick a place to put your new Jukebox </p>
        </div>
        <OpenButton> Locate </OpenButton>
      </div>
      <hr></hr>
      <CreateButton className={twMerge('my-6 mx-auto')} />
    </div>
  )
}
