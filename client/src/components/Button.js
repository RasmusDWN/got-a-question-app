import "./Button.css";

export default function Button({ label, onClick}) {
    return (        
        <button type="button" onClick={onClick} className="btn btn-primary">
            {label}
        </button>
    );
}