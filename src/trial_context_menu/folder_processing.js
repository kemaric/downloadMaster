function createFolder_onClick() {
    var access_token = "EwAwAq1DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAdZc+vAWbuQTw+JQPAd+hn1IG+v1nPx+n29ZM+4V5oWUwRjuwYys972SFT8JKydeZ2I+oNreuthy3gcyDQsMnMOrezjAsZTmOM1XLNlQpeGeikplfXJtm0sWer+skio8b7rb8BMdGHz+nqYW2YJX6hDts/FxusM1AL5zzXkvgtPw6jZ4hCUV9BMihdWQPPsDJOSzyC9F2f6lYOeOgje20SRNcOx4brszNX9yxq9E1YCWSzCGxzjbtjyqnkhVAwYlnmVaB/clmoPfRnINkTLVq9ran30Pee7dBgz0TMo106c2Ahhqmh1iQeglmaE8Kn6Rrgr6UhSjkl5C12xhnhu9RWkDZgAACC5TzBBnQSMNAAH6vuHZk3qEGgb2bFCoGoWWCUjTJ7UG4+nrzi+GfLUnwpZC6v8cG8YHi0FagmTnMFQm/OXJcl7ad4MlnjSF3zrYGMkh56yCAQ3an2sMrUp3THhoHk5DDStaY9rqL9XVURO7g/cghtT817CnqGfeWdUFSchjuGizveWvJlqg3aSYuuey38wDPoeHEz7Anf5qVWx6KgpwOWn3GvJKRBuL4LqPWq9jBn5qqWhm618Nhuvf5tM+nlOVv0HU9HLfWStrwiVcRN1XXUlp3W1qefUVsbYtcpYTpkd+cF8h8vMIonBPIAIKp+qKBfNAz01hbKem0KvoiT7qF0nqW5npX33zLSS7AAA=";
    $.ajax({

      type: "POST",
      url: "https://apis.live.net/v5.0/me/skydrive?access_token=" + access_token + "&callback=?",
      dataType: "jsonp",
	  data: { name: 'skydrive/HackerFolder' }
    }).done(function( msg ) {
      console.log( msg );
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.log( "Request failed: " + textStatus );
      console.log( errorThrown );
    });
	
    /*
	https://login.live.com/oauth20_authorize.srf?client_id=000000004C109039&scope=wl.skydrive_update&response_type=token&redirect_uri=http%3A%2F%2Frequestb.in%2Fsco8tvsc
    WL.login({
        scope: "wl.skydrive_update"
    }).then(
        function (response) {
            WL.api({
                path: "me/skydrive",
                method: "POST",
                body: {
                    "name": "Hacker", // INSERT FOLDER NAME HERE!!!!
                    "description": "A new folder"				
                } 				
            }).then(
                function(response) {
                    document.getElementById("infoArea").innerText = 
                        "Created folder. Name: " + response.name + ", ID: " + response.id;
                }, 
                function (responseFailed) {
                    document.getElementById("infoArea").innerText = 
                        "Error calling API: " + responseFailed.error.message;
                }
            );
        },
        function (responseFailed) {
            document.getElementById("infoArea").innerText = 
                "Error signing in: " + responseFailed.error_description;
        }
    );
	*/
}

function uploadFile() {
    WL.login({
        scope: "wl.skydrive_update"
    }).then(
        function (response) {
            WL.upload({
                path: "folder.a6b2a7e8f2515e5e.A6B2A7E8F2515E5E!170", // ???????????????????????//
                element: "file",
                overwrite: "rename"
            }).then(
                function (response) {
                    document.getElementById("info").innerText =
                        "File uploaded.";
                },
                function (responseFailed) {
                    document.getElementById("info").innerText =
                        "Error uploading file: " + responseFailed.error.message;
                }
            );                    
        },
        function (responseFailed) {
            document.getElementById("info").innerText =
                "Error signing in: " + responseFailed.error.message;
        }
    );
}
