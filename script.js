let avatar = document.getElementsByClassName('avatar')[0];
let input_search = document.getElementsByTagName('input')[0];
let btn = document.getElementsByTagName('button')[0];
let td = document.querySelectorAll('td');

btn.addEventListener('click', function(){
    fetch('https://api.github.com/users/' + input_search.value)
    .then(res=>res.json())
    .then(data=>{
    avatar.innerHTML = `<img src="${data.avatar_url}" style="width:250px;height:250px;">`;
    for (let i = 0; i < td.length; i++) {
        td[0].innerHTML = `<td>${data.name}</td>`;
        td[1].innerHTML = `<td>${data.bio}</td>`;
        td[2].innerHTML = `<td>${data.location}</td>`;
        td[3].innerHTML = `<td>${data.followers}</td>`;
        td[4].innerHTML = `<td>${data.following}</td>`;
      }
    })
});