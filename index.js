// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 17.6, lng: 78.41 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  const ele=document.querySelector(".desh2");
    window.addEventListener("scroll",function(){
    if(ele.getBoundingClientRect().top<window.innerHeight)
    {
      ele.classList.add("vis");
    }
    else{
      ele.classList.remove("vis");
    }
  })
  const ele1=document.querySelector(".floating1");
  window.addEventListener("scroll",function(){
    if(ele1.getBoundingClientRect().top<window.innerHeight)
    {
      ele1.classList.add("anileft");
    }
    else{
      ele1.classList.remove("anileft");
    }
  })
  const ele2=document.querySelector(".floating2");
  window.addEventListener("scroll",function(){
    if(ele2.getBoundingClientRect().top<window.innerHeight)
    {
      ele2.classList.add("anileft");
    }
    else{
      ele2.classList.remove("anileft");
    }
  })
  const ele3=document.querySelector(".floating3");
  window.addEventListener("scroll",function(){
    if(ele3.getBoundingClientRect().top<window.innerHeight)
    {
      ele3.classList.add("anileft");
    }
    else{
      ele3.classList.remove("anileft");
    }
  })
  const ele4=document.querySelector(".floating4");
  window.addEventListener("scroll",function(){
    if(ele4.getBoundingClientRect().top<window.innerHeight)
    {
      ele4.classList.add("anileft");
    }
    else{
      ele4.classList.remove("anileft");
    }
  })
  const ele5=document.querySelector(".floating5");
  window.addEventListener("scroll",function(){
    if(ele5.getBoundingClientRect().top<window.innerHeight)
    {
      ele5.classList.add("anileft");
    }
    else{
      ele5.classList.remove("anileft");
    }
  })
  const ele6=document.querySelector(".odh2");
  console.log(ele6.getBoundingClientRect().top);
  window.addEventListener("scroll",function(){
    if(ele6.getBoundingClientRect().top<= window.innerHeight)
    {
      document.querySelector(".navi").style.animationPlayState="paused";
      document.querySelector(".navi1").style.zIndex="15";
      // document.querySelector(".navi").backgroundColor="black";
      document.querySelector(".d3").style.animationPlayState="paused";

    }
    else{
      // document.querySelector(".navi").style.animation="visible";
      document.querySelector(".navi").style.animationPlayState="running";
      document.querySelector(".navi1").style.zIndex="0";
      document.querySelector(".d3").style.animationPlayState="running";
    }
  })