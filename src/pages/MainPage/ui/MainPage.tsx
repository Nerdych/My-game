function MainPage() {
  return (
    <>
      MainPage
      <button
        onClick={() => {
          throw new Error('whaaat');
        }}
        type="button"
      >
        Throw Error
      </button>
    </>
  );
}

export default MainPage;
