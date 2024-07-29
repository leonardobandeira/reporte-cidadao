interface ButtonProps {
    title: string;
    onClick: () => void;
    style?: string
}

export default function Button({ title, onClick, style }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${style}`}
        >
            {title}
        </button>
    );
}