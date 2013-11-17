 WL.Event.subscribe("auth.login", onLogin);
            WL.init({
                client_id: "000000004C109039",
                scope: "wl.signin",
                response_type: "token"
            });
            WL.ui({
                name: "signin",
                element: "signin"
            });
            function onLogin (session) {
			    debugger
                if (!session.error) {
                    WL.api({
                        path: "me",
                        method: "GET"
                    }).then(
                        function (response) {
                            document.getElementById("info").innerText =
                                "Hello, " + response.first_name + " " + response.last_name + "!";
                        },
                        function (responseFailed) {
                            document.getElementById("info").innerText =
                                "Error calling API: " + responseFailed.error.message;
                        }
                    );
                }
                else {
                    document.getElementById("info").innerText =
                        "Error signing in: " + session.error_description;
                }
            }