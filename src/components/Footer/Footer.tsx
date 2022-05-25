import { FooterWrapper, Text, Span, Link } from "./styled";

export default function Footer() {
  return (
    <FooterWrapper>
      <Text>
        Made with{" "}
        <Span role="img" aria-label="heart">
          ❤️
        </Span>{" "}
        by{" "}
        <Link
          href="https://twitter.com/doug_pimentel"
          target="_blank"
          rel="nofollow"
        >
          Douglas
        </Link>
      </Text>
    </FooterWrapper>
  );
}
