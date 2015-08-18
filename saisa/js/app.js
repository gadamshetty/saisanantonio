
//google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var latlng = new google.maps.LatLng(29.5263619, -98.5760333);



    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
        center: new google.maps.LatLng(29.5263619, -98.5760333),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
};

 
//Facebook like.........
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk')); 


//twitter like.................

window.twttr = (function (d, s, id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src= "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
}(document, "script", "twitter-wjs"));
 

$(document).ready(function (e) {
    $('.navlinks').click(function (e) { $('#bs-example-navbar-collapse-1').css("height", "0px") });
    
    $.get("../eventsdata/babaidolsponsors.txt", function (data) {
        var sponsordata = JSON.parse(data);
        //var futureevents = eventsdata.eventdata.filter(function (event) { if (Date.parse(event.eventdate) >= Date.now()) { return event; } });
        var sponsors = sponsordata.sponsors;
        $('#babasponsors').html('');
        sponsors.forEach(function (sponsor) {
            $('#babasponsors').append('<span style="padding-right:100px;">' + sponsor.sname + '</span>')
        });
        $('.marquee').marquee();
    });

});

function showREplaceContent(){
    //scroll to replacecontent when any menu item clicked....
    $('html, body').animate({
        scrollTop: $("#contentdivider").offset().top - 100
    }, 2000);
};


$('#home').click(function (e) {
    $("#container").scrollTop();
    $.get("../home.html", function (data) {
        $("#replacecontent").html(data);
        showREplaceContent();
        //alert("Load was performed.");
    });

});


$('#events').click(function (e) {
    //scroll to replacecontent when any menu item clicked....
    //$("#replacecontent").toggle('slide');




    $.get("../events.html", function (data) {
        $("#replacecontent").html(data);
        $.get("../eventsdata/events.txt", function (data) {
            //debugger;
            var eventsdata = JSON.parse(data);
            //var futureevents = eventsdata.eventdata.filter(function (event) { if (Date.parse(event.eventdate) >= Date.now()) { return event; } });
            var futureevents = eventsdata.eventdata.filter(function (event) {
                var m1 = moment(moment(new Date()).format('MM-DD-YYYY'));
                var m2 = moment(moment(event.eventdate).format('MM-DD-YYYY'));
                if (m2.diff(m1, 'days') >= 0) { return event; }
            });
            var sortedevents = futureevents.sort(function (event1, event2) { return Date.parse(event1.eventdate) > Date.parse(event2.eventdate) });
            //console.log(sortedevents);
            $('#event1name').html(sortedevents[0].eventname + ", " + sortedevents[0].eventdate);
            $('#event1desc').html(sortedevents[0].eventdesc);
            $('#event1flyer').attr("data-eventflyer", sortedevents[0].eventid);

            $('#event2name').html(sortedevents[1].eventname + ", " + sortedevents[1].eventdate);
            $('#event2desc').html(sortedevents[1].eventdesc);
            $('#event2flyer').attr("data-eventflyer", sortedevents[1].eventid);

            $('#event3name').html(sortedevents[2].eventname + ", " + sortedevents[2].eventdate);
            $('#event3desc').html(sortedevents[2].eventdesc);
            $('#event3flyer').attr("data-eventflyer", sortedevents[2].eventid);

            //showREplaceContent();
        });
    });

    
});



$('#ehundi').click(function (e) {

    $("#container").scrollTop();

    $("#replacecontent").load("../ehundi.html")

    //setTimeout(showREplaceContent(),2000);
});

$('#dailyservices').click(function (e) {
    //alert("Load was performed for services.");
    $("#container").scrollTop();
    $.get("../dailyservices.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});

$('#thursdayservices').click(function (e) {
    //alert("Load was performed for services.");
    $("#container").scrollTop();
    $.get("../thursdayservices.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});

$('#priestservices').click(function (e) {
    //alert("Load was performed for services.");
    $("#container").scrollTop();
    $.get("../priestservices.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});

$('#support').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../support.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});


$('#location').click(function (e) {
    $("#container").scrollTop();
    $("#replacecontent").load("../contact.html");
    setTimeout(showREplaceContent(), 2000);
});

$('#mapit').click(function (e) {
    e.preventDefault();
    $("#container").scrollTop();
    $("#replacecontent").load("../contact.html");
    setTimeout(showREplaceContent(), 2000);
});


$('#mailinglist').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../mailinglist.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});

$('#mailinglist2').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../mailinglist.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });

});

$('.suggestionbox').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../frmSuggestion.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });

});
$('#quicklinks').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../quicklinks.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});

$('#volunteer').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../volunteerguidelines.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        showREplaceContent();
    });
    
});


$('#gallery').click(function (e) {
    //alert("Load was performed for support.");
    $("#container").scrollTop();
    $.get("../gallery.html", function (data) {
        $("#replacecontent").html(data);
        //alert("Load was performed.");
        //now get picture galleries
        $.get("../eventsdata/picturegallery.txt", function (data) {
            //debugger;
            var galleries = JSON.parse(data).gallerydata;
            var sortedgalleries = galleries.sort(function (event1, event2) { return Date.parse(event1.galleryid) < Date.parse(event2.galleryid) });
            var topgalleries = sortedgalleries.splice(0, 15);
            //console.log(topgalleries);
            //$('#gallerycontainer').html(topgalleries[0].galleryname);

            topgalleries.forEach(function (gallery) {
                $('#gallerycontainer').append('<div class="col-md-10 galleryrow"><i class="fa fa-hand-o-right fa-lg"> </i>&nbsp;&nbsp;<a target="_new" href="' + gallery.galleryurl + '">' + gallery.galleryname + '</a></div>')
            });
        showREplaceContent();
        });


    });
    
});

