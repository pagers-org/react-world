export default function SettingsPage(): JSX.Element {
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <ul className="error-messages">
              <li>That name is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input className="form-control" placeholder="URL of profile picture" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" placeholder="Your Name" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <textarea className="form-control form-control-lg" placeholder="Short bio about you" rows={8} />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" placeholder="Email" type="text" />
                </fieldset>
                <fieldset className="form-group">
                  <input className="form-control form-control-lg" placeholder="New Password" type="password" />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right" type="button">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button className="btn btn-outline-danger" type="button">
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
