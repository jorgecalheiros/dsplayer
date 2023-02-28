import "./style.css";
type ButtonProps = {
  children: any;
  onClick?: () => void;
};

export default function ControlButton({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="control-button">
      {children}
    </button>
  );
}
