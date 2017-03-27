// jQuery(function() {

//     getData("#");

//     function getData(track) {
//         $.ajax({
//             url: `https://api.soundcloud.com/tracks/?q=${track}&client_id=03e4633e2d85874a921380e47cac705d`,
//             success: function(response) {
//                 console.log(response);
//                 response.forEach(function(music) {
//                     if (music.artwork_url === null) {
//                         music.artwork_url = 'http://www.focusonthecoast.com/wp-content/uploads/2014/02/making-music-placeholder-image.jpg';
//                     }
//                     $('#musicapp').append(`
//                         <div class="drake col-md-2">
//                           <img src="${music.artwork_url}" class="prince">
//                           <h4 class="jackson">${music.title}</h4>
//                           <button class="btn btn-primary" data-id="${music.id}" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Play Track</button> 
//                         </div> 

//                     `);
//                 })
//             }
//         })
//     }

//     $('form').on("submit", function(day) {

//         day.preventDefault();
//         var input = $('input').val();
//         $("#musicapp").html("");
//         getData(input);
//     })

//     $("body").on('click', ".btn", function() {
//         $('.collapse').toggleClass('collapse')
//         var id = $(this).data("id");
//         $('#playsong').attr(`src`, `http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d`)
//     })
// });

$.ajax({
    url: "https://api.github.com/users/spmitchell10/repos",
    success: function(response) {

        response.forEach(function(repo) {
            $('#repositories').append(`
            <div class="col-md-12 bottomLine">
            <div class="col-md-6 repoTabLeft">
              <h4 class="charactername"><a href="${repo.html_url}">${repo.name}</a></h4>
              <h6 class="description">${repo.description}</h6>
              <h6 class="updatedAt">${moment(repo.updated_at).from()}</h6>
            </div>  
            <div class="col-md-6 repoTabRight" 
                <h5 class="language">${repo.language}</h5>
            </div> 
            </div>    
          `);
        })
    }
});

$('#repositories').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
})


$.ajax({
    url: "https://api.github.com/users/spmitchell10/events",
    success: function(response) {
        response.forEach(function(aTab) {
            if (aTab.type === "PushEvent") {
                $('#publicActivity').append(`
            <div class="col-md-12 topLine">
            <div class="eventsTabLeft">
            <h6>${moment(aTab.created_at).from()}</h6>
            <img  class="activityPic" src="${aTab.actor.avatar_url}" alt="">
            <h5 class="rightData">${aTab.payload.commits[0].author.name} pushed to ${aTab.payload.ref} regarding ${aTab.payload.commits[0].message}</h5> 
            </div>  
              </div>
          `);
            }
        })
    }
});

$('#publicActivity').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
})


$.ajax({
    url: "https://api.github.com/users/spmitchell10",
    success: function(response) {
        $('.leftProfile').append(`
            <img  class="mainHeadShot" src="${response.avatar_url}" alt="">
            <h2><b>${response.name}</b></h2>
            <h3>${response.login}</h3>
            <h4 class="Bio">${response.bio}</h4>
            <h5>${response.location}</h5>
              
            </div>  
              </div>
          `);
    }
});

// <h6 class="updatedAt">${moment(events.created_at).from()}</h6>
// <h4 class="charactername"><a href="${event.html_url}">${event.type}</a></h4>
