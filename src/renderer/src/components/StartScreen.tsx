import { ComponentProps } from 'react'
import applicationIcon from '../../../../resources/icon.svg'
import { Content, Sidebar } from './AppLayout'
import { StartScreenMenu } from './StartScreenMenu'

export const StartScreen = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <>
      <Sidebar className="rounded-r-[40px] shadow-nm"></Sidebar>
      <Content className="">
        <div {...props} className="mx-20 flex flex-col justify-evenly items-center h-screen">
          <div className="flex flex-col items-center">
            <img src={applicationIcon} alt="Application Icon" className="max-h-[30vh]"></img>
            <span className="text-center text-4xl items-center"> Disc Master </span>
          </div>
          <StartScreenMenu />
        </div>
      </Content>
    </>
  )
}
