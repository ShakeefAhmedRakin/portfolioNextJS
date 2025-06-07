import * as runtime from "react/jsx-runtime";
import { createMDXComponents } from "./typography-mdx";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  isSmall?: boolean;
}

export const MDXContent = ({ code, components, isSmall = false }: MDXProps) => {
  const Component = useMDXComponent(code);
  const sharedComponents = createMDXComponents(isSmall);

  return <Component components={{ ...sharedComponents, ...components }} />;
};
