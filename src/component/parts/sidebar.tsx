 import react from 'react'
 type categoryprop={
cname:string;
pic : string;
statu?:string;
 }
 type props ={
     categorys:categoryprop[];
    oncategoryselection: ()=>void;

    }
 const Sidebar =({categorys,oncategoryselection} :props)=>{
     const onselection =(category : categoryprop,index: number)=>{
         console.log('curent category',index)

     }
    return(
        <>
       {categorys.map((category,index) =>{
           return(
               <div key={index} className = {'categorycard ${category.statu}'}
               onClick={()=>onselection(category,index)}
               >
                   <h4> <span>{category.cname}</span></h4>
                   <p><span>{category.pic}</span></p>

               </div>
           )
       })

       }
        </>

    )
}
export default Sidebar;