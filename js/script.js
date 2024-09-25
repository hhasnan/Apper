$('.count').counterUp({
    delay: 10,
    time: 1000
});
function myFunction(){
    var checkBox = document.getElementById("mycheck");
    var ms_price = document.getElementById("ms_price");
    var ys_price = document.getElementById("ys_price");
    var ms_website = document.getElementById("ms_website");
    var ys_website = document.getElementById("ys_website");
    var ms_disk = document.getElementById("ms_disk");
    var ys_disk = document.getElementById("ys_disk");
    var ms_subpage = document.getElementById("ms_subpage");
    var ys_subpage = document.getElementById("ys_subpage");
    var ms_domain = document.getElementById("ms_domain");
    var ys_domain = document.getElementById("ys_domain");

    var mu_price = document.getElementById("mu_price");
    var yu_price = document.getElementById("yu_price");
    var mu_disk = document.getElementById("mu_disk");
    var yu_disk = document.getElementById("yu_disk");
    var mu_subpage = document.getElementById("mu_subpage");
    var yu_subpage = document.getElementById("yu_subpage");
    var mu_domain = document.getElementById("mu_domain");
    var yu_domain = document.getElementById("yu_domain");

    var mp_price = document.getElementById("mp_price");
    var yp_price = document.getElementById("yp_price");
    var mp_website = document.getElementById("mp_website");
    var yp_website = document.getElementById("yp_website");
    var mp_disk = document.getElementById("mp_disk");
    var yp_disk = document.getElementById("yp_disk");
    var mp_subpage = document.getElementById("mp_subpage");
    var yp_subpage = document.getElementById("yp_subpage");
    var mp_domain = document.getElementById("mp_domain");
    var yp_domain = document.getElementById("yp_domain");

    if (checkBox.checked == true){
        ms_price.style.display = "none";
        ys_price.style.display = "block";
        ms_website.style.display = "none";
        ys_website.style.display = "block";
        ms_disk.style.display = "none";
        ys_disk.style.display = "block";
        ms_subpage.style.display = "none";
        ys_subpage.style.display = "block";
        ms_domain.style.display = "none";
        ys_domain.style.display = "block";

        mu_price.style.display = "none";
        yu_price.style.display = "block";
        mu_disk.style.display = "none";
        yu_disk.style.display = "block";
        mu_subpage.style.display = "none";
        yu_subpage.style.display = "block";
        mu_domain.style.display = "none";
        yu_domain.style.display = "block";
        
        mp_price.style.display = "none";
        yp_price.style.display = "block";
        mp_website.style.display = "none";
        yp_website.style.display = "block";
        mp_disk.style.display = "none";
        yp_disk.style.display = "block";
        mp_subpage.style.display = "none";
        yp_subpage.style.display = "block";
        mp_domain.style.display = "none";
        yp_domain.style.display = "block";
    }
    else {
        ms_price.style.display = "block";
        ys_price.style.display = "none";
        ms_website.style.display = "block";
        ys_website.style.display = "none";
        ms_disk.style.display = "block";
        ys_disk.style.display = "none";
        ms_subpage.style.display = "block";
        ys_subpage.style.display = "none";
        ms_domain.style.display = "block";
        ys_domain.style.display = "none";

        mu_price.style.display = "block";
        yu_price.style.display = "none";
        mu_disk.style.display = "block";
        yu_disk.style.display = "none";
        mu_subpage.style.display = "block";
        yu_subpage.style.display = "none";
        mu_domain.style.display = "block";
        yu_domain.style.display = "none";

        mp_price.style.display = "block";
        yp_price.style.display = "none";
        mp_website.style.display = "block";
        yp_website.style.display = "none";
        mp_disk.style.display = "block";
        yp_disk.style.display = "none";
        mp_subpage.style.display = "block";
        yp_subpage.style.display = "none";
        mp_domain.style.display = "block";
        yp_domain.style.display = "none";
    }
}
  // pricing