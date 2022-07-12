import './myLabel.css';
export interface Props {
    /**
   * This is the message that is in the label
   */
    label: string;
    /**
   * This is the size
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
   * Type of letters
   */
    allCaps?: boolean;
    color: 'primary' | 'secondary' | 'tertiary';
    fontColor?: string;
    backgroundColor?: string;
}
export default function MyLabel({ label, size, allCaps, color, fontColor, backgroundColor }: Props): JSX.Element;
