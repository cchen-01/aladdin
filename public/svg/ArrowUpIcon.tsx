type ArrowUpIconProps = {
  color?: string;
  className?: string;
};

const ArrowUpIcon = ({
  color = "white",
  className = "w-6 h-6 md:w-8 md:h-8",
  ...props
}: ArrowUpIconProps) => (
  <svg
    className={className}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.3938 20C24.3938 20 18.5018 12 16.3938 12C14.2858 12 8.3938 20 8.3938 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowUpIcon;
