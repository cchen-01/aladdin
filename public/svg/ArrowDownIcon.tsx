type ArrowDownIconProps = {
  color?: string;
  className?: string;
};

const ArrowDownIcon = ({
  color = "#121216",
  className = "w-6 h-6 md:w-8 md:h-8",
  ...props
}: ArrowDownIconProps) => (
  <svg
    className={className}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.3938 12C24.3938 12 18.5018 20 16.3938 20C14.2858 20 8.3938 12 8.3938 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowDownIcon;
