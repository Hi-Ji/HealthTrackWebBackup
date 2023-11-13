const EmailField = ({setEmail}) => (
  <div className="usernameField">
      <i className="fa fa-user userIcon"></i>
      <input type="text"
          id="emailname"
          name="Username"
          className="usernameTextInput"
          placeholder="Email" onChange={(e) => setEmail(e.target.value)}
      ></input>
  </div>
)

export default EmailField;