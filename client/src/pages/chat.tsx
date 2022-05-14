import PrincipalMessagesContainer from '../components/chat'
import Users from '../components/chat/users'

export default function Chat() {
    return (
        <div className="container mx-auto">
            <div className="min-w-full border rounded lg:grid lg:grid-cols-3">
                <Users />
                <PrincipalMessagesContainer />
            </div>
        </div>
    )
}
