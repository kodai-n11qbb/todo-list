import RemoveButton from '../Buttons/RemoveButton/RemoveButton';
import './Menuitem.css';


interface Props {
    text?: string;
}

function Menuitem( props: Props ) {

    return (
        <div className='menuitem-container'>
            <span>
                {(!props.text==false)?props.text:'menu item'}
            </span>
            <RemoveButton
            />
        </div>
    );
}

export default Menuitem;
