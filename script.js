const{createApp}=Vue;

createApp({
  data(){
    return{
      saluto:'hello world',
      img:{
        path:'img/02.webp',
        alt: 'img-js'
      }
    }
  }
}).mount('#app')