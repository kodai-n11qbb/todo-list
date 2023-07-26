import AddButton from '../Buttons/AddButton/AddButton';
import './Sidebar.css';
import { useState } from 'react';
import Menuitem from '../Menuitem/Menuitem';
import Cookie from '../../stores/cookie/Cookie';
import { Link } from 'react-router-dom';
import { UrlConsumer, UrlContextType } from '../../providers/UrlProvider';


function createItemToPush(id: string, currentUrl: UrlContextType) {
    return (
        <Link to={id} key={id} onClick={()=>{currentUrl.setValue(id)}}>
            <li>
                {/* <Menuitem text={Cookie.getCookie(handlingId).title}/> */}
                <Menuitem text={Cookie.getCookie(id).title}/>
            </li>
        </Link>
    )
}


function createInitialList(list: JSX.Element[], currentUrl: UrlContextType): JSX.Element[] {
    const cookies = Cookie.getAllCookie();
    const ids = Object.keys(cookies);
    for( const id of ids ) {
        list.push(createItemToPush(id, currentUrl));
    }
    return list;
}

function Sidebar() {

    const [length, setLength] = useState<number>(0);
    const [handlingId, setHandlingId] = useState<string>('');
    const list = useState<JSX.Element[]>([])[0];

    return (
        <nav>
            <span className='sidebar-container'>
                <ul>
                    <UrlConsumer>
                        {
                            (currentUrl)=>{
                                const n = list;
                                if (list.length == 0) {
                                    const initialList = createInitialList(n, currentUrl);
                                    setTimeout(()=>{
                                        setLength(initialList.length);
                                    })
                                    return initialList;
                                }
                                if (list.length >= length) {
                                    return list;
                                }
                                const id = handlingId;
                                n.push(createItemToPush(id, currentUrl));
                                return n;
                            }
                        }
                    </UrlConsumer>
                </ul>
            </span>

            <span className='add-button-container'>
                <AddButton
                onClick={()=>{
                    const originOfId = Math.random().toString(36);
                    const id = originOfId.slice(2,7);
                    Cookie.setCookie(id, {
                        'contents': {
                            'text': 'text',
                        },
                        'title': id,
                    });
                    setHandlingId(id);
                    console.log(Cookie.getAllCookie());
                    setLength(length+1);
                }}
                />
            </span>
        </nav>
    )
}

export default Sidebar;
