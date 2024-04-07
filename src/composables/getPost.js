import { ref } from "vue";
import {db} from '../firebase/config'
let getPost=(id)=>{
    let post=ref(null);
    let error=ref('');
    let load=async()=>{
        try{
            // await new Promise((resolve,reject)=>{
            //     setTimeout(resolve, 2000);
            // })
            // let response= await fetch('http://localhost:3000/posts/'+id);
            // if(response.status===404){
            //     throw new Error('This is something wrong!')
            // }
            // let data= await response.json();
            // post.value=data
            let res= await db.collection('posts').doc(id).get()
            // console.log(res.id,res.data())
            return post.value={id:res.id,...res.data()}
        }catch(err){
            error.value=err.message
        }
    }
    return {post,error,load}
}
export default getPost