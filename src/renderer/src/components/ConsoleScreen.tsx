import { ComponentProps } from 'react'
import { MasterCard } from './elements/MasterCard'
import { MusicCard } from './elements/MusicCard'
import { SoundEffectsCard } from './elements/SoundEffectsCard'

export const ConsoleScreen = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div className="flex flex-1">
      <MusicCard />
      <MasterCard />
      <SoundEffectsCard />
    </div>
  )
}
