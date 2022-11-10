import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Justice`
    }, [title])
}

export default useTitle;