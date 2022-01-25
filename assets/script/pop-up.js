var pop = document.getElementById("overlay");

if ( document.cookie.indexOf("CERTIFIEDAGE18") >= 0 ) 
{
     pop.style.display = "none";
}

document.getElementById("ofAge").onclick = function() 
{
     document.cookie = "CERTIFIEDAGE18=true";
     // should add document.cookie.expires
     // as is, this will just be a session cookie

    pop.style.display = "none";
}