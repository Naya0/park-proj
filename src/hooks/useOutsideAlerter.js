import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (onOutsideClick) => {
    const ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onOutsideClick(ref, 'outComponent');
            }
        }

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [onOutsideClick])
    return ref;
}

export default useOutsideAlerter;