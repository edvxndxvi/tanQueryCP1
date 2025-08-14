import Home from "./src/app/Home";
import QueryClientProvider from './src/app/QueryClientProvider'


export default function App() {
  return (
   <QueryClientProvider>
    <Home/>
   </QueryClientProvider>
  );
}