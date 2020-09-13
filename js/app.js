function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;


    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1

    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("form").innerHTML = "Your tweet posted successfully";
        } else if (this.readyState != 4) {
            document.getElementById("form").innerHTML = "Loading";
        }
        else {
            document.getElementById("form").innerHTML = "Something went wrong";
        }
    };

    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));

}

let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);


function updateTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    let tweetData = {
        title: "Title updated",
        body: tweetBody,
        userId: 1

    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            console.log("updated successfully");
        } else if (this.readyState != 4) {
            console.log("Loading");
        }
        else {
            console.log("Something went wrong");

        }

    };

    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
updateTweet();

function deleteTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            console.log("deleted successfully");

        } else if (this.readyState != 4) {
            console.log("Loading");
        }
        else {
            console.log("Something went wrong");
            console.log(this.status);

        }

    };

    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
deleteTweet();

function readTweet() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let allPost = JSON.parse(this.responseText);
            console.log(allPost);
            for (let i = 0; i < allPost.length; i++) {
                document.getElementById("div-one").innerHTML += "<h3>" + "userId:" + allPost[i].userId + "</h3>";
                document.getElementById("div-one").innerHTML += "<h4>" + "Id:" + allPost[i].id + "</h4>";
                document.getElementById("div-one").innerHTML += "<h5>" + "title:" + allPost[i].title + "</h5>";
                document.getElementById("div-one").innerHTML += "<p>" + "body:" + allPost[i].body + "</p>";
                document.getElementById("div-one").classList.add("div-style");
            }

        } else if (this.readyState != 4) {
            console.log("Loading");
        }
        else {
            console.log("Something went wrong");

        }

    };

    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
readTweet();

function readComments() {

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let allPost = JSON.parse(this.responseText);
            console.log(allPost);
            for (let i = 0; i < allPost.length; i++) {
                document.getElementById("div-two").innerHTML += "<h3>" + "postId:" + allPost[i].postId + "</h3>";
                document.getElementById("div-two").innerHTML += "<h4>" + "Id:" + allPost[i].id + "</h4>";
                document.getElementById("div-two").innerHTML += "<h5>" + "name:" + allPost[i].name + "</h5>";
                document.getElementById("div-two").innerHTML += "<p>" + "email:" + allPost[i].email + "</p>";
                document.getElementById("div-two").innerHTML += "<p>" + "body:" + allPost[i].body + "</p>";
                document.getElementById("div-one").classList.add("div-style");
            }

        } else if (this.readyState != 4) {
            console.log("Loading");
        }
        else {
            console.log("Something went wrong");

        }

    };

    ajax.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
readComments();






