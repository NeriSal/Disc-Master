import { ComponentProps } from 'react'
import applicationIcon from '../../../../resources/icon.svg'
import { StartScreenSlideMenu } from './StartScreenSlideMenu'

export const InfoScreen = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props} className="mx-20 flex flex-col justify-evenly items-center h-screen">
      <div className="flex flex-col items-center">
        <img src={applicationIcon} alt="Application Icon" className="max-h-[30vh]"></img>
        <span className="text-center text-4xl items-center"> Disc Master </span>
      </div>

      <StartScreenSlideMenu />
    </div>
  )
}
