import { Outlet } from 'react-router'
import { Layout } from '@/presentation/layout'
import {  
  BreadNav, 
}  from '@/presentation/components'

import { 
  Header,
  Sidebar, 
}  from '@/presentation/partials'

function App() {

  return (
    <Layout.Wrap grid='golden-ratio'>

      <Layout.Module type='header'>
        <Header />
      </Layout.Module>

      <Layout.Module type='content'>
        <BreadNav />
        <Outlet />
      </Layout.Module>

      <Layout.Module type='sidebar'>
          <Sidebar />
      </Layout.Module>

    </Layout.Wrap>
  )
}

export default App
