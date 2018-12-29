var al_dvs = document.getElementsByTagName('div');
var cntnt;var f;
var c = [];
for (var i=0; i<al_dvs.length; i++)
{
  f = al_dvs[i].getAttribute('include-file');
  // console.log(f);
  if(f)
  {
    c.push(al_dvs[i]);
    c.push(f);
    console.log("found!");
  }
}
for (var i=0; i<c.length; i+=2)
{
  load_header_page(c[i+1], c[i]);
}
function load_header_page(f_nme, ob)
{
  var x = document.getElementsByClassName("bgimage"), y;

  console.log("inside load_header_page f = "+f_nme);
  x = x[0];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if(this.readyState == 4)
    {
      if (this.status==200)
      {
        cntnt= this.responseText;
        ob.innerHTML=cntnt;
      }
    }
  }
  xhttp.open("GET", f_nme, true);
  xhttp.send();
  // x.appendChild(y);
}
// window.onload = load_header_page();
