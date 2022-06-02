import {
  ToolListContainer,
  ToolHeader,
  ToolFooter,
  ToolTitle,
  ToolLink,
  ToolDescription,
  ToolTag,
} from "./styled";

type ToolListProps = {
  name: string;
  link: string;
  description: string;
  tags: string[];
};

export default function ToolList({
  name,
  link,
  description,
  tags,
}: ToolListProps) {
  return (
    <ToolListContainer>
      <ToolHeader>
        <ToolTitle>{name}</ToolTitle>
        <ToolLink href={link} target="_blank">
          {link}
        </ToolLink>
      </ToolHeader>
      <ToolDescription>{description}</ToolDescription>
      <ToolFooter>
        {tags.map((tag) => (
          <ToolTag key={tag}>{tag}</ToolTag>
        ))}
      </ToolFooter>
    </ToolListContainer>
  );
}
