const { createApp } = Vue 

    createApp({
        data() {
            return{
              emails : [],
              email : ""
            }
        },
        methods:{
          randomEmail(){
            for ( let i = 0 ; i < 10 ; i++){
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then((result)=>{
                this.mail = result.data.response
              console.log(this.mail);
               this.emails.push(result.data.response)
              })
            }
        },
   
        },
        mounted(){
          this.randomEmail();

        }

    }).mount("#webapp")
