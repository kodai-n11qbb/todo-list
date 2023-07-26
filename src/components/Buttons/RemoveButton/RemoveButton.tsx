import './RemoveButton.css'

interface Props {
    onClick?: ()=>void;
}

function RemoveButton(props: Props) {
    return (
        <button onClick={props.onClick}>
            X
        </button>
    )
}

export default RemoveButton;
