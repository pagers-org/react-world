import { useParams } from '@solidjs/router';

const ArticlePage = () => {
  const params = useParams();

  console.log(params.slug);

  return (
    <>
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="article-page">
        <div class="banner">
          <div class="container">
            <h1>How to build webapps that scale</h1>

            <div class="article-meta">
              <a href="/profile/eric-simons">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </a>
              <div class="info">
                <a href="/profile/eric-simons" class="author">
                  Eric Simons
                </a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-plus-round" />
                &nbsp; Follow Eric Simons <span class="counter">(10)</span>
              </button>
              &nbsp;&nbsp;
              <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart" />
                &nbsp; Favorite Post <span class="counter">(29)</span>
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-edit" /> Edit Article
              </button>
              <button class="btn btn-sm btn-outline-danger">
                <i class="ion-trash-a" /> Delete Article
              </button>
            </div>
          </div>
        </div>

        <div class="container page">
          <div class="row article-content">
            <div class="col-md-12">
              <p>
                Web development technologies have evolved at an incredible clip over the past few
                years.
              </p>
              <h2 id="introducing-ionic">Introducing RealWorld.</h2>
              <p>It's a great solution for learning how other frameworks work.</p>
              <ul class="tag-list">
                <li class="tag-default tag-pill tag-outline">realworld</li>
                <li class="tag-default tag-pill tag-outline">implementations</li>
              </ul>
            </div>
          </div>

          <hr />

          <div class="article-actions">
            <div class="article-meta">
              <a href="profile.html">
                <img src="http://i.imgur.com/Qr71crq.jpg" />
              </a>
              <div class="info">
                <a href="" class="author">
                  Eric Simons
                </a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-plus-round" />
                &nbsp; Follow Eric Simons
              </button>
              &nbsp;
              <button class="btn btn-sm btn-outline-primary">
                <i class="ion-heart" />
                &nbsp; Favorite Article <span class="counter">(29)</span>
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-edit" /> Edit Article
              </button>
              <button class="btn btn-sm btn-outline-danger">
                <i class="ion-trash-a" /> Delete Article
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2">
              <form class="card comment-form">
                <div class="card-block">
                  <textarea class="form-control" placeholder="Write a comment..." rows="3" />
                </div>
                <div class="card-footer">
                  <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                  <button class="btn btn-sm btn-primary">Post Comment</button>
                </div>
              </form>

              <div class="card">
                <div class="card-block">
                  <p class="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="/profile/author" class="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/profile/jacob-schmidt" class="comment-author">
                    Jacob Schmidt
                  </a>
                  <span class="date-posted">Dec 29th</span>
                </div>
              </div>

              <div class="card">
                <div class="card-block">
                  <p class="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="/profile/author" class="comment-author">
                    <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="/profile/jacob-schmidt" class="comment-author">
                    Jacob Schmidt
                  </a>
                  <span class="date-posted">Dec 29th</span>
                  <span class="mod-options">
                    <i class="ion-trash-a" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
            &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};

export default ArticlePage;
