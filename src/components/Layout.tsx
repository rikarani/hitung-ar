type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props): React.JSX.Element {
  return <div className="mx-auto max-w-xl">{children}</div>;
}
