import { Content, InfoScreen, RootLayout, Sidebar } from '@/components'

function App() {
  return (
    <RootLayout>
      <Sidebar className="rounded-r-[40px] shadow-nm"></Sidebar>
      <Content className="">
        <InfoScreen />
      </Content>
    </RootLayout>
  )
}

export default App
