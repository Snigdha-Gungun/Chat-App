import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'
import { useContext } from "react";

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const [online, setOnline] = useState([])
    const { authUser } = useAuthContext()

    useEffect(() => {
        if (authUser) {
            const socketUrl = window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : 'https://chat-app-p7xy.onrender.com';

            const socket = io(socketUrl, {
                query: {
                    userId: authUser._id
                }
            })

            setSocket(socket)

            socket.on('getOnlineUsers', (users) => {
                setOnline(users)
                // console.log(users)
            })
            return () => socket.close()
        }
        else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])

    // return <SocketContext.Provider value={{socket,online}}>{child}</SocketContext.Provider>
    return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
}