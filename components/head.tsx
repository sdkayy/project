import NextHead from 'next/head';

interface HeadProps {
  title: string;
  description: string;
}

export const Head = (props: HeadProps) => {
  return (
    <NextHead>
      <title>{props.title} | Project</title>
      <meta name="description" content={props.description} />
    </NextHead>
  );
};
