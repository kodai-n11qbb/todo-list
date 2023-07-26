import { createContext, useState } from "react"

export type UrlContextType = {
    value: string;
    setValue: (e: string)=>void;
}

const UrlContext = createContext({
    'value': window.location.pathname.toString(),
    'setValue': ()=>{0},
} as UrlContextType);


function UrlProvider(props: any) {
    
    const {children} = props;
    const [url, setUrl] = useState(window.location.pathname.toString());

    return (
        <UrlContext.Provider value={{'value': url, setValue: setUrl}}>
            {children}
        </UrlContext.Provider>
    )
}

export default UrlProvider;
const UrlConsumer = UrlContext.Consumer
export { UrlContext, UrlConsumer };
