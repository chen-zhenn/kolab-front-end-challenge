import { Layout } from '@/presentation/layout'
import { Includes } from '@/presentation/includes'
import { Outlet } from 'react-router'


function App() {
  return (
    <Layout.Wrap>

      <Layout.Module type='header'>
        <Includes.Header />
      </Layout.Module>

      <Layout.Module type='content'>
        <Outlet />
      </Layout.Module>

      <Layout.Module type='sidebar'>
        <Includes.Sidebar />
      </Layout.Module>

    </Layout.Wrap>
  )
}

export default App
