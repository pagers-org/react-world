export default function EditPage(): JSX.Element {
  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              <li>That title is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" placeholder="Article Title" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control" placeholder="What's this article about?" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control" placeholder="Write your article (in markdown)" rows={8} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control" placeholder="Enter tags" type="text" />
                  <div className="tag-list">
                    <span className="tag-default tag-pill">
                      {" "}
                      <i className="ion-close-round" /> tag{" "}
                    </span>
                  </div>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="button">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
