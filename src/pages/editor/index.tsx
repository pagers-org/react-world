const EditorPage = () => {
  return (
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ul class="error-messages">
              <li>That title is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Article Title"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="What's this article about?"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <textarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <input type="text" class="form-control" placeholder="Enter tags" />
                  <div class="tag-list">
                    <span class="tag-default tag-pill">
                      {' '}
                      <i class="ion-close-round" /> tag{' '}
                    </span>
                  </div>
                </fieldset>
                <button class="btn btn-lg btn-primary" type="button">
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
