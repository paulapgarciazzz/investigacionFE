import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './Context/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from '@tanstack/react-router'
import router from './routes.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </QueryClientProvider>

  ,
)
