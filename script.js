let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}

document.querySelector("button").addEventListener("click",function(){
    document.getElementById("aboutus2").style.display="block";
    this.style.display="none";
})

<script>
    window.embeddedChatbotConfig = {
    chatbotId: "du4kc7-3VrTIuh-ZbwnVO",
    domain: "www.chatbase.co"
    }
    </script>
    <script
    src="https://www.chatbase.co/embed.min.js"
    chatbotId="du4kc7-3VrTIuh-ZbwnVO"
    domain="www.chatbase.co"
    defer>
    </script>
