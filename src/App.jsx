import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { connectSocket } from "./services/socket";
import { useAuthStore } from "./store/authStore";
<<<<<<< HEAD
=======
import useSyncUser from "./hooks/useSyncUser";
>>>>>>> e10146984f554d5728d7023b097f180da318ef21
import CookieBanner from "./components/ui/CookieBanner";

function App() {
    const { user } = useAuthStore();
<<<<<<< HEAD
=======
    useSyncUser();
>>>>>>> e10146984f554d5728d7023b097f180da318ef21

    useEffect(() => {
        if (user?._id) {
            connectSocket(user._id);
        }
    }, [user]);

    return (
        <>
            <AppRoutes />
            <CookieBanner />
        </>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e10146984f554d5728d7023b097f180da318ef21
