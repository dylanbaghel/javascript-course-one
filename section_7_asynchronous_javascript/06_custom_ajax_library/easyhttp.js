/**
 * Custom AJAX Library Using Callbacks
 */


function EasyHttp() {
    this.http = new XMLHttpRequest();
}

// Get 
EasyHttp.prototype.get = function (url, cb) {
    this.http.open('GET', url, true);

    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, JSON.parse(this.response));
        } else {
            cb(new Error(this.status), null);
        }
    }

    this.http.send();
}

// Post
EasyHttp.prototype.post = function (url, postData, cb) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    this.http.onload = function () {
        if (this.status === 201 || this.status === 200) {
            cb(null, JSON.parse(this.response));
        } else {
            cb(new Error(this.status), null);
        }
    }

    this.http.send(JSON.stringify(postData));
}

//Put
EasyHttp.prototype.put = function (url, updateData, cb) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');

    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, JSON.parse(this.response));
        } else {
            cb(new Error(this.status), null);
        }
    }

    this.http.send(JSON.stringify(updateData));
}

// Delete
EasyHttp.prototype.delete = function (url, cb) {
    this.http.open('DELETE', url, true);

    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, JSON.parse(this.response));
        } else {
            cb(new Error(this.status), null);
        }
    }

    this.http.send();
}