
answer = (function transformEntry(source) {
	// Add your code here
  var username = source.u_username.toString();
  var mail = "@dkcompany.com"
  var split_usernames = username.split ("/");
  var res = split_usernames[1].concat(mail);
	return res; // return the value to be put into the target field

})(source);
