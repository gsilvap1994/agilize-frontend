export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = ({ onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="rounded bg-brown text-white hover:bg-darkGold px-2 py-1"
  >
    {children}
  </button>
);

export default StyledButton;
