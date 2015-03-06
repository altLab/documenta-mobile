{{#status}}
<div class="ink-alert basic" role="error">
  <p><b>Error:</b> {{reason}}</p>
</div>
{{/status}}
<div class="column-group">
  <form id="login-form" class="ink-form all-100 gutters">
    <div class="control-group">
      <label for="username">Username</label>
      <div class="control">
	<input id="username" name="username" type="text">
      </div>
    </div>
    <div class="control-group">
      <label for="password">Password</label>
      <div class="control">
	<input id="password" name="password" type="password">
      </div>
    </div>
    <button type="submit" class="ink-button blue">Login</button>
    <input type="checkbox" id="save-credentials" name="save-credentials" value="yes">
    <label for="save-credentials">Save credentials?</label>
  </form>
</div>
