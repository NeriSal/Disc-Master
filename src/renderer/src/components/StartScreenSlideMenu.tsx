import { CreateButton, InfoButton, LanguageButton, OpenButton } from '@/components'
import { ComponentProps } from 'react'

export const StartScreenSlideMenu = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="flex flex-col w-full">
      <div className="flex flex-row justify-between items-center my-6">
        <div className="flex flex-col ">
          <h2> Create a new jukebox</h2>
          <p> Create a new jukebox under a folder</p>
        </div>
        <CreateButton />
      </div>
      <div className="flex flex-row justify-between items-center my-6">
        <div className="flex flex-col">
          <h2> Open a jukebox </h2>
          <p> Choose an existing folder to open as a jukebox</p>
        </div>
        <OpenButton />
      </div>
      <div className="flex flex-row items-center my-6">
        <InfoButton />
        <LanguageButton className="flex-1" />
      </div>
    </div>
  )
}
