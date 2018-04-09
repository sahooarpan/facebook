 // main document ready function to check if dom is loaded fully or not
$( document ).ready(() => {


    $("#tokenText").trigger("focus");
    //Classes added for NavBar
    $('ul li').click(function() {
        $("li").removeClass("active");
        $(this).addClass("active");
    });

    //Hiding the containers on load
    $("#mainContainer").hide();
    $("#loader").hide();
    $("#containerCoverPic").hide();



    $("#linkBasicDetails").on('click',() => { //animation to Navbar
        $("#basicDetailsCard").show(1000);
        $("#aboutCard").hide(1000);
        $("#educationCard").hide(1000);
        $("#workCard").hide(1000);
        $("#postsCard").hide(1000);
    
    });//end function

    $("#linkAbout").on('click',() =>{


        $("#basicDetailsCard").hide(1000);
        $("#aboutCard").show(1000);
        $("#educationCard").hide(1000);
        $("#workCard").hide(1000);
        $("#postsCard").hide(1000);
    
    });

    $("#linkEducation").on('click',() => {

        $("#basicDetailsCard").hide(1000);
        $("#aboutCard").hide(1000);
        $("#educationCard").show(1000);
        $("#workCard").hide(1000);
        $("#postsCard").hide(1000);
    
    });


    $("#linkWork").on('click',() => {

        $("#basicDetailsCard").hide(1000);
        $("#aboutCard").hide(1000);
        $("#educationCard").hide(1000);
        $("#workCard").show(1000);
        $("#postsCard").hide(1000);
    
    });


    $("#linkPosts").on('click',() => {

        $("#basicDetailsCard").hide(1000);
        $("#aboutCard").hide(1000);
        $("#educationCard").hide(1000);
        $("#workCard").hide(1000);
        $("#postsCard").show(1000);
    
    }); //End function


