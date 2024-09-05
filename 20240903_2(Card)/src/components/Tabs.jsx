export default function Tabs({ children, buttons, container }) {
  let Container = container;

  return (
    <>
      <Container>{buttons}</Container>
      {children}
    </>
  );
}
