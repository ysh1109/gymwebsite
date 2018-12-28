
function add_edit_btn()
{
  var y = document.createElement('div');y.id="edt_img";
  // y.innerHTML=
  //var x = document.getElementById("editor_btn");
  // console.log("y = "+y);
   i_h = document.getElementsByTagName('img');
  // console.log("i_h = "+i_h);
  var p_i_h = [];
  for(var i=0; i<i_h.length; i++)
  {
    p_i_h.push(document.createElement('div')); p_i_h[i].class="edt_img_btn_";
    p_i_h[i].innerHTML='<button id="editor_btn" onclick=img_chng_dbx(this.parentElement) title="Edit This Image"><span class="fa fa-edit"></span><span class="fa">EDIT</span></button>';
    i_h[i].parentElement.appendChild(p_i_h[i]);
    // console.log(i_h[i]);

  }
}
var t = document.createElement('link');t.href="stylesheets/img_edtr.css";t.rel="stylesheet";t.type="text/css";
document.children[0].children[0].appendChild(t);
var i_h;
console.log("A");
add_edit_btn();
function x_img_chng_dbx(the_div){
  the_div.innerHTML='<button id="editor_btn" onclick=img_chng_dbx(this.parentElement) title="Edit This Image"><span class="fa fa-edit"></span><span class="fa">EDIT</span></button>';
}
function img_chng_dbx(div_id)
{
    div_id.innerHTML= '<div id="editor"><div id="title_bar"><span><strong>Edit This Photo</strong></span><span id="x_img_edtr" class="fa fa-window-close-o" onclick="x_img_chng_dbx(this.parentElement.parentElement.parentElement)"></span></div><div id="editing_buttons" style="margin: 10px;"><div style="text-align:center;"><form method="post" action=""><div><input type="file" name="nw_img_fl" onchange="prv_img(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement,this)" id="upld_img"></div><div id="chg_div"><input id="chng" type="submit" name="fl_ud" value="Change"></div></form></div><div><form method="post"><input type="text" id="ps_url" name="img" placeholder="Paste Url Here ...."><input id="upld" type="submit" name="img_url" value="Upload"></form></div></div></div>';
}
// var f; var cc;
function prv_img(kk, curr)
{
  var rdr = new FileReader();
  rdr.onload = function(e){
    kk.children[0].src=e.target.result;
    console.log("done");
  }
  rdr.readAsDataURL(curr.files[0]);
  // console.log("working");
  // f=kk;cc=curr;
  // console.log(kk);
  // console.log(curr);console.log(curr.file);
}
