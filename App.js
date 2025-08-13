import Home from "./src/Home";
import QueryClientProvider from './src/QueryClientProvider'


export default function App() {
  return (
   <QueryClientProvider>
    <Home/>
   </QueryClientProvider>
  );
}