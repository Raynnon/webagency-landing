type Props = {
    text: string;
    link?: string;
    color?: boolean;
  };

export default function Button({ text, link = "#", color = false }: Props) {
  return (
    <a href={link}>
        <button className={color ? "coloured-button" : "classic-button"}>{text}</button>
    </a>
  );
}
