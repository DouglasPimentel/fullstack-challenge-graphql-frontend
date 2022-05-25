import { TitleWrapper } from "./styled";

type TitleProps = {
  text: string;
};

export default function ({ text }: TitleProps) {
  return <TitleWrapper>{text}</TitleWrapper>;
}
