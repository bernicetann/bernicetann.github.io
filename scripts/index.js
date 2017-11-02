$(document).ready(function(){

  var about_list_item = {
    title: "Who is Bernice?",
    content: "Junior Web Dev looking to fulfill a role to enhance my skills, hone my abilities further and keep learning new things. I am a health science major and have a diverse background in customer service ranging from retail, hospitality to reception. I have taken a colossal leap towards web development due to the rapidly changing technologies that connects everyone together and would love to build and improve web apps. Likewise it is similar to solving puzzles, which is one of my favourite pastimes. As a self-motivated coder, I like being able to build a feature out of logic and put it to production. I aspire to become a professional developer through lots of practice, applying my skills to work, and to keep learning. Apart from coding, I am a volleyball and badminton enthusiast who loves to play boardgames."
  }

  var about_list_items = []

  for(var i = 0; i < 1; i++) {
    about_list_items.push(about_list_item)
  }

  var target = document.getElementById("about-ul")

  for(var i = 0; i < about_list_items.length; i++) {
    var li = document.createElement("li")
    var title = document.createElement("p")
    title.innerHTML = about_list_items[i].title
    title.className += "about-title"
    li.appendChild(title)

    var content = document.createElement("p")
    content.innerHTML = about_list_items[i].content
    content.className += "about-content"
    li.appendChild(content)

    target.append(li)

    console.log(target)
  }

})