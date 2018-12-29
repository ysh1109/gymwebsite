var ss, active_slide=1;
var slides = document.getElementsByClassName("slide_show_img");
function fade_in(op, el)
{
    if(op<20)
    {
            el.style.opacity = op/2*0.1;
            op+=1;
            setTimeout(fade_in, 20, op, el);
    }
}
function fade_out(op, el)
{
    if(op>1)
    {
            el.style.opacity = op*0.1;
            op-=1;
            setTimeout(fade_in, 50, op, el);
    }
}
function transition(i, j, k)
{
    fade_out(9, j);
    j.className = "inactive slide_show_img";
    k.style.backgroundImage = "url('res/images/dot_inactive.png')";
    j = document.getElementById("img_"+i);
    k = document.getElementById("slide_"+i);
    active_slide=i;
    k.style.backgroundImage = "url('res/images/dot_active.png')";
    j.className = "active slide_show_img";
    j.style.opacity=0;
    fade_in(0, j);
    return i;
}
function slide_show(i, j, k)
{
    i = transition(i, j, k);
    j = document.getElementById("img_"+i);
    k = document.getElementById("slide_"+i);
    if(i<4)
    {
        i+=1;
        ss = setTimeout(slide_show, 3000, i, j, k);}
    else
    {
        ss = setTimeout(slide_show, 3000, 1, document.getElementById("img_4"), document.getElementById("slide_4"));
    }
}
setTimeout(slide_show(1, document.getElementById("img_1"), document.getElementById("slide_1")), 2000);
function click_change_slide(num)
{
        //var all_slides = document.getElementsByClassName("slide_show_img");
        clearTimeout(ss);
            transition(num, document.getElementById("img_"+active_slide), document.getElementById("slide_"+active_slide));
        ss=setTimeout(slide_show, 3000, num%4+1, document.getElementById("img_"+num), document.getElementById("slide_"+num));
}
