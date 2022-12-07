const { createApp } = Vue 

    createApp({
        data() {
            return{
              emails : [],
              email : "",
              nrEmail : 10
            }
        },
        methods:{
          randomEmail(nrEmail){
            this.emails = [] 
           
            for ( let i = 0 ; i < nrEmail ; i++){
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((result)=>{
              this.mail = result.data.response
               this.emails.push(result.data.response)
              })
            }
        },
        deleteEmail(indice){
          if (confirm("Sei sicuro di voler cancellare questa email?") == true) {
            this.emails.splice(indice,1)
          } else {}
        },
        deleteAll(){
          this.emails = [];
        }
   
        },
        mounted(){
          this.randomEmail(this.nrEmail);
        }

    }).mount("#webapp")
