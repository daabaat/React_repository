export default function Header() {
  return (
    <>
      <header>
        <h1>자유로운 Review</h1>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Home
        </button>
      </header>
    </>
  );
}
