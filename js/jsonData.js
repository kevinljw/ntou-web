function getValue(varname)
{
  var url = window.location.href;
  var qparts = url.split("?");
  if (qparts.length == 0){return "";}
  var query = qparts[1];
  var vars = query.split("&amp;");
  var value = "";
  for (i=0; i<vars.length; i++)
  {
    var parts = vars[i].split("=");
    if (parts[0] == varname)
    {
      value = parts[1];
      break;
    }
  }
  value = unescape(value);
  value.replace(/\+/g," ");
  return value;
}
    /*    var xhr = new XMLHttpRequest();
    xhr.open('get','data/' + vendor + '.json',false);
	xhr.send(null);
	xhr.onload = function(){
		var datastr = JSON.parse(xhr.responseText);
        var vendor_title = document.querySelector('.vendor-title');
        var vendor_equipment = document.querySelector('.vendor-equipment');
        var vendor_equipment_eng = document.querySelector('.vendor-equipment-eng');
        var tech_intro = document.querySelector('.tech-intro');
        var tech_application = document.querySelector('.tech-application');
        vendor_title.innerHTML = datastr.vendor_title;
        vendor_equipment.innerHTML = datastr.vendor_equipment;
        vendor_equipment_eng.innerHTML = datastr.vendor_equipment_eng;
        tech_intro.innerHTML = datastr.tech_intro;
        tech_application.innerHTML = datastr.tech_application;

        /*btn.onclick = function(e){
		    for (var i = 0; i < len; i++) {
			    var content = '<p>'+'<li>名稱：'+datastr[i].place+'</li>'+'</p>'+'<p>'+'<li>地址：'+datastr[i].address+'</li>'+'</p>';
                console.log(content);
			    str+=content;
		    };
		    info.innerHTML += str;
        };*/



/* vendor-title
 * vendor-equipment
 * Aquaculture-equipment
 * ae-detail
 * detail-foot-text
 */

