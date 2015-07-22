<form onsubmit="javascript:return false;">
    <label for="signupName" class="sr-only">${userName}</label>
    <input type="text" class="form-control" id="signupName" placeholder="${userName}">
    <label for="signupEmail" class="sr-only">${email}</label>
    <input type="email" class="form-control" id="signupEmail" placeholder="${email}">
    <label for="signupPassword" class="sr-only">${password}</label>
    <input type="password" class="form-control" id="signupPassword" placeholder="${password}">
    <button class="btn btn-lg btn-primary btn-block" type="submit">${signup}</button>
</form>