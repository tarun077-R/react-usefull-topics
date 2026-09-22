import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [isOnline,setIsOnline] = useState(navigator.onLine)
  useEffect(()=>{
      const handleonline=()=>{
          setIsOnline(true);
        }
        const handleoffline=()=>{
            setIsOnline(false)
        }

        window.addEventListener("online",handleonline)
        window.addEventListener("offline",handleoffline)
        
        return ()=>{
            window.removeEventListener("online",handleonline)
            window.removeEventListener("offline",handleoffline)
        }
    },[])
    return isOnline;
}


export default useOnlineStatus;