import Routes from "./routes"

import { AuthProvider } from './context/auth'
import { SocketProvider } from "./context/socket"
import { ChatProvider } from "./context/chat"

function App() {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <Routes />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}

export default App
