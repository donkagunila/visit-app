export interface Props {
  title: string;
  variant: string;
  size?: number;
  disabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
  hasIcon?: boolean;
  iconName?: any;
}
