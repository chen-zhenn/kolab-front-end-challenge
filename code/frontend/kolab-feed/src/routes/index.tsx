import { 
    BrowserRouter, 
    Routes,
    Route,
} from 'react-router'

import { View } from '@/presentation'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/app' element={<View.App />} />
                <Route path='/feed' element={<View.Feed />} />
            </Routes>
        </BrowserRouter>
    )
}