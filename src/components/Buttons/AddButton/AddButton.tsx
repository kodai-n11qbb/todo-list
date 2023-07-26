

type Props = {
    /**
     * 入れたいテキスト
     */
    text?: string;

    /**
     * 押したとき発火させるevent
     */
    onClick?: ()=>void;
}

function AddButton(props: Props) {

    return(
        <button onClick={props.onClick}>
            {(props.text)?props.text:'ADD BUTTON'}
        </button>
    )
}

export default AddButton;
