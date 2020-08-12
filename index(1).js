function setQuery() {

    const searchbox = document.getElementById('search')
    getResults(searchbox.value);

}



function getResults(query) {
    fetch(`http://apilayer.net/api/validate?access_key=85da0323e6e0fa09b32399bec0679537&number=91${query}&%20country_code%20=%20IN&format=1`)
        .then(rest => {
            return rest.json();
        }).then(data);






}

function data(rest) {
    document.getElementById('valid').innerHTML = rest.valid;
    document.getElementById('carrier').innerHTML = rest.carrier;
    document.getElementById('country_code').innerHTML = rest.country_code;
    document.getElementById('country_name').innerHTML = rest.country_name;
    document.getElementById('international_format').innerHTML = rest.international_format;
    document.getElementById('line_type').innerHTML = rest.line_type;
    document.getElementById('local_format').innerHTML = rest.local_format;
    document.getElementById('location').innerHTML = rest.location;
    document.getElementById('number').innerHTML = rest.number;

}

