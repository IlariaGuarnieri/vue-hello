const{createApp}=Vue;

createApp({
  data(){
    return{
      saluto:'hello world',
      urlImmagine:'img/02.webp'
    }
  },
}).mount('#app')