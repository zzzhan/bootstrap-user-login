<form class="form-horizontal">
  <div class="form-group">
    <label for="loginEmail" class="col-sm-2 control-label">${email}</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="loginEmail" placeholder="${email}">
    </div>
  </div>
  <div class="form-group">
    <label for="loginPassword" class="col-sm-2 control-label">${password}</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="loginPassword" placeholder="${password}">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> ${rememberme}
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button class="btn btn-default" data-url="/serv/auth/login">${login}</button>
    </div>
  </div>
</form>