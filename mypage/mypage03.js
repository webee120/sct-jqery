$(document).ready(function(){
 
function toggle_pw() {
  const pwInput = document.getElementById('pw');
  const offIcon = document.querySelector('off');
  const onIcon = document.querySelector('.on');

  if (pwInput.type === 'password') {
    pwInput.type = 'text';
    offIcon.style.display = 'none';
    onIcon.style.display = 'inline';
  } else {
    pwInput.type = 'password';
    offIcon.style.display = 'inline';
    onIcon.style.display = 'none';
  }
}
})