function PhotoEditorPage() {
  return (
    <>
      PhotoEditorPage
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

export default PhotoEditorPage;
