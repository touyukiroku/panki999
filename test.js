function sikaku1(){
  document.getElementById('sikaku1').innerHTML = 'こんちは';

}

document.getElementById('sikaku1').addEventListener('mouseover', function(){
	document.getElementById('sikaku1').innerHTML = '乗った！';
	document.getElementById('sikaku1').style.background = '#cc9900';
});
