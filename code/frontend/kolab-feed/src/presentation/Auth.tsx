import { Outlet } from 'react-router'
import { Layout } from '@/presentation/layout'

// import { 
//   Header,
//   Sidebar, 
// }  from '@/presentation/partials'

function Auth() {

  return (
    <Layout.Wrap grid='split-screen'>

      <Layout.Module>
        Block A
      </Layout.Module>

      <Layout.Module>
        <Outlet />
      </Layout.Module>

    </Layout.Wrap>
  )
}

export default Auth
