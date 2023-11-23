console.log("main.js werkt!");


//opdr1a
const person = `
{
    "firstname": "Judeska",
    "email": "judeska@example.com"
}
`;
const obPerson = JSON.parse(person);

console.log("Object person", obPerson);
console.log("Email", obPerson.email);

const person2 = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}
`;
const obPerson2 = JSON.parse(person2);


console.log("id", obPerson2.id);
console.log("firstname", obPerson2.firstname);
console.log("lastname", obPerson2.lastname);

//oppdr2
const tweet = `
{
    "id": 1,
  "slug": "lorem-ipsum",
  "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.",
  "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "status": "published",
  "category": "lorem",
  "publishedAt": "04/02/2023 13:25:21",
  "updatedAt": "14/03/2023 17:22:20",
  "userId": 1
}
`;

const obTweet = JSON.parse(tweet);


console.log("title", obTweet.title);
console.log("published at", obTweet.publishedAt);
console.log("content", obTweet.content);

//opdr3
const person3 = `
{
    "id": 4,
    "firstname": "Emily",
    "lastname": "Davis",
    "email": "emilydavis@example.com",
    "birthDate": "1974-11-30",
    "login": {
      "uuid": "4a0eed11-9430-4d68-901f-c0d4c1c3bf30",
      "username": "emilydavis",
      "password": "jsonplaceholder.org",
      "md5": "c1328472c5794a25723600f71c1b4586",
      "sha1": "35544a31cc19bd6520af116554873167117f4d94",
      "registered": "2022-07-10T11:21:20.033Z"
    },
    "address": {
      "street": "321 Maple Street",
      "suite": "Apt. 50",
      "city": "Anytown",
      "zipcode": "12345-6789",
      "geo": {
        "lat": "42.9012",
        "lng": "-71.5678"
      }
    },
    "phone": "(555) 555-3456",
    "website": "www.emilydavis.com",
    "company": {
      "name": "GHI Corporation",
      "catchPhrase": "Your success is our priority",
      "bs": "Consulting"
    }
}
`;

const obperson3 = JSON.parse(person3);


console.log("email", obperson3.email);
console.log("username", obperson3.login.username);
console.log("city", obperson3.address.city);
console.log("name", obperson3.company.name);

//opdr4

const comment = `
{
    "id": 11,
    "postId": 3,
    "userId": 2,
    "comment": "Cras convallis ipsum eget sapien hendrerit dignissim."
}
`;

const obComment = JSON.parse(comment);
console.log("comment", obComment);


//opdr5
const comment2 = `
    [
        {
          "id": 1,
          "postId": 1,
          "userId": 1,
          "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          "id": 2,
          "postId": 1,
          "userId": 1,
          "comment": "Nulla quis libero vel orci rutrum suscipit."
        },
        {
          "id": 3,
          "postId": 3,
          "userId": 2,
          "comment": "Cras ac elit sit amet mi placerat bibendum."
        }
      ]
`;

const obComment2 = JSON.parse(comment2);

for(let i = 0; i < obComment2.length; i++){
    console.log("Comment " + obComment2[i].id + ": " + obComment2[i].comment);
}

//opdr6
const video = `
[
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
  ]`
 
  const objvideo = JSON.parse(video)
  const ul = document.createElement('ul');
 
for(let i = 0; i < objvideo.length; i++){
    const li = document.createElement('li');
    li.innerHTML = `<h3>${objvideo[i].title}</h3><img src="${objvideo[i].thumbnailUrl}" alt="${objvideo[i].title}">`;
    ul.appendChild(li);
}
 
document.body.appendChild(ul);

//opdr7
const person4 = { 
    name: 'John', 
    age: 20,
    marks: {
        science: 70,
        math: 75
    }
}
  console.log(person4);
   
  const jsonperson = JSON.stringify(person4)

   
//opdr8  
const person5 = [
	{ 
		name: 'Wolverine', 
		age: 38,
		marks: {
			science: 20,
			math: 15
		}
	},
	{ 
		name: 'Xavier', 
		age: 64,
		marks: {
			science: 95,
			math: 90
		}
	},
	{ 
		name: 'Magneto', 
		age: 68,
		marks: {
			science: 90,
			math: 85
		}
	}
]
  console.log(person5);
   
  const jsonperson5 = JSON.stringify(person5)