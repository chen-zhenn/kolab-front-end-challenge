import { Outlet } from 'react-router'
import { Layout } from '@/presentation/layout'
import { TopBar }  from '@/presentation/components'

function App() {
  return (
    <Layout.Wrap>

      <Layout.Module type='header'>

          <TopBar.Container>
            <TopBar.Section type='brand' />
            <TopBar.Section type='search' />
            <TopBar.Section type='profile' />
          </TopBar.Container>

      </Layout.Module>

      <Layout.Module type='content'>
        <Outlet />
      </Layout.Module>

      <Layout.Module type='sidebar'>
          Sidebar Block
      </Layout.Module>

    </Layout.Wrap>
  )
}

export default App
