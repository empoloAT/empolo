import { COLORS } from "constants/colors";

type Props = {
  isHovered: boolean;
  isLaptop: boolean;
}

export const ButtonArrow = ({isHovered, isLaptop}: Props) => {
  return <svg
      width={isLaptop ? 48 : 64}
      height={isLaptop ? 48 : 64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <circle
      cx="32"
      cy="32"
      r="32"
      fill={isHovered ? COLORS.WHITE : COLORS.BLACK}
    />
    <path
      d="M39.3492 26.2064L23.1488 42.4524C22.7837 42.8175 22.3499 43 21.8473 43C21.3447 43 20.9115 42.8175 20.5476 42.4524C20.1825 42.0873 20 41.6535 20 41.1509C20 40.6483 20.1825 40.2151 20.5476 39.8512L36.7936 23.6508H22.9206C22.4034 23.6508 21.9696 23.4756 21.6191 23.1251C21.2687 22.7746 21.094 22.3414 21.0952 21.8254C21.0952 21.3082 21.2705 20.8744 21.621 20.5239C21.9714 20.1734 22.4047 19.9988 22.9206 20H41.1746C41.6918 20 42.1256 20.1752 42.4761 20.5257C42.8266 20.8762 43.0012 21.3094 43 21.8254V40.0794C43 40.5966 42.8248 41.0304 42.4743 41.3809C42.1238 41.7313 41.6906 41.906 41.1746 41.9048C40.6574 41.9048 40.2236 41.7295 39.8731 41.379C39.5226 41.0286 39.348 40.5953 39.3492 40.0794V26.2064Z"
      fill={isHovered ? COLORS.BLACK : COLORS.YELLOW}
    />
  </svg>  
};