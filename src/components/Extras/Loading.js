import '../../stylesheets/extras/Loading.scss';
import loading from '../../images/loading.gif';

function Loading() {
  return (
    <article className="Loading">
      <img className="Loading__gift" src={loading} alt="Loading..." />
      <p>Loading...</p>
    </article>
  );
}

export default Loading;
