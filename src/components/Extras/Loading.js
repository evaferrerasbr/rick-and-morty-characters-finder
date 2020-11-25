import '../../stylesheets/extras/Loading.scss';

function Loading() {
  return (
    <article className="Loading">
      <img
        className="Loading__gift"
        src="https://cdn.hackaday.io/images/original/6625541522281130571.gif"
        alt="Loading..."
      />
      <p>Loading...</p>
    </article>
  );
}

export default Loading;
