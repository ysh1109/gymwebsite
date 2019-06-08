
function add_edit_btn()
{
  var y = document.createElement('div');y.id="edt_img";
   i_h = document.getElementsByTagName('img');
  var p_i_h = [];
  for(var i=0; i<i_h.length; i++)
  {
    p_i_h.push(document.createElement('div')); p_i_h[i].class="edt_img_btn_";
    p_i_h[i].innerHTML='<button id="editor_btn" onclick=img_chng_dbx(this.parentElement) title="Edit This Image"><span class="fa fa-edit"></span><span class="fa">EDIT</span></button>';
    i_h[i].parentElement.appendChild(p_i_h[i]);
  }
}
var t = document.createElement('link');t.href="res/stylesheets/img_edtr.css";t.rel="stylesheet";t.type="text/css";
document.children[0].children[0].appendChild(t);
var i_h;
console.log("A");
add_edit_btn();
function x_img_chng_dbx(the_div){
  the_div.innerHTML='<button id="editor_btn" onclick=img_chng_dbx(this.parentElement) title="Edit This Image"><span class="fa fa-edit"></span><span class="fa">EDIT</span></button>';
}
function img_chng_dbx(div_id)
{
    div_id.innerHTML= '<div id="editor"><div id="title_bar"><span><strong>Edit This Photo</strong></span><span id="x_img_edtr" class="fa fa-window-close-o" onclick="x_img_chng_dbx(this.parentElement.parentElement.parentElement)"></span></div><div id="editing_buttons" style="margin: 10px;"><div style="text-align:center;"><div><input type="file" name="nw_img_fl" onchange="prv_img(this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement,this)" id="upld_img"><input id="chng" type="button" name="fl_ud" onclick="upld_chng_img(this)" value="Change"></div></div><div><form method="post"><input type="text" id="ps_url" name="img" placeholder="Paste Url Here ...."><input id="upld" type="submit" name="img_url" value="Upload"></form></div></div></div>';
}
// var f; var cc;
var xx;
function upld_chng_img(img_id)
{
  xx=img_id;
  console.log("DONE");
  var g= img_id.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.id;
  var fl = img_id.parentElement.firstElementChild.files[0];
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if(xhttp.status == 200)
    {
      console.log(xhttp.responseText);

    }
    else{
      console.log("Could Not Connect To Server!");
    }
  }
  xhttp.open("POST", "admin_page.cgi", true);
  var formdata = new FormData();
  formdata.append("img_inp", fl);
  formdata.append("chg_id", g);
  console.log(formdata);
  xhttp.send(formdata);
  return true;
}
function prv_img(kk, curr)
{
  var rdr = new FileReader();
  rdr.onload = function(e){
    kk.children[0].src=e.target.result;
    console.log("done");
  }
  rdr.readAsDataURL(curr.files[0]);
}



function txt_chg_dbx(elem_id)
{
  // console.log(elem_id.parentElement);
  elem_id.parentElement.innerHTML = "<form class='chg_p' method='post'><input type='text' name='chng_txt' ><input type='hidden' name='elem_id' value='"+elem_id+"'><input type='hidden' name='type' value='p'><input type='submit' name='updt_pr' value='Save'></form>"
}
function hdg_chg_dbx(elem_id)
{
  elem_id.parentElement.innerHTML = "<form class='chg_h' method='post'><input type='text' name='chng_txt' ><input type='hidden' name='elem_id' value='"+elem_id+"'><input type='hidden' name='type' value='h'><input type='submit' name='updt_pr' value='Save'></form>"
}
function add_edit_btn_txt()
{
  var y = document.createElement('div');y.id="edt_txt";
   i_h = document.getElementsByTagName('p');
  var p_i_h = [];
  for(var i=0; i<i_h.length; i++)
  {
    p_i_h.push(document.createElement('div')); p_i_h[i].class="edt_img_btn_";
    p_i_h[i].innerHTML='<button id="editor_btn_p" onclick=txt_chg_dbx(this) title="Edit This Text"><span class="fa fa-edit"></span><span class="fa">EDIT TEXT</span></button>';
    i_h[i].parentElement.appendChild(p_i_h[i]);
  }
}
function add_edit_btn_headg()
{
  var y = document.createElement('div');y.id="edt_txt";
   i_h = document.getElementsByClassName('ttl_hd');
  var p_i_h = [];
  for(var i=0; i<i_h.length; i++)
  {
    p_i_h.push(document.createElement('div')); p_i_h[i].class="edt_img_btn_";
    p_i_h[i].innerHTML='<button id="editor_btn_h" onclick=txt_chg_dbx(this) title="Edit This Text"><span class="fa fa-edit"></span><span class="fa">EDIT TITLE</span></button>';
    i_h[i].parentElement.appendChild(p_i_h[i]);
  }
}
