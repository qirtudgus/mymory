export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre>
      <code className='language-typescript'>{children}</code>
    </pre>
  );
}
